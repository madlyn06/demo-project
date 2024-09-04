/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'

import Line from '../components/Line'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import { useParams } from 'react-router-dom'

function DynamicFurniture() {
  const [interiorData, setInterior]: any = useState([])
  const [furnitureData, setFurnitureData]: any = useState([])
  const [exteriorData, setExteriorData]: any = useState([])
  const [towDData, setTowDData]: any = useState([])

  const [imagePreview, setImagePreview]: any = useState('')

  const [data, setData] = useState<any>({})
  const { name } = useParams()
  useEffect(() => {
    if (furnitureData.length > 0 && name) {
      const result = furnitureData.find((item: any) => item.id === +name)
      setData(result)
    }
  }, [furnitureData, name])
  const callApi = async () => {
    const result_interior = await API.get('/api/interiors/1?populate[InteriorItem][populate]=*')
    const result_exterior = await API.get('/api/exteriors/1?populate[Exterior][populate]=*')
    const result_furniture = await API.get('/api/furnitures/1?populate[Furniture][populate]=*')
    const result_cartoon = await API.get('/api/cartoons/1?populate[Cartoon][populate]=*')
    if (result_interior?.data) {
      setInterior(result_interior?.data?.data.attributes.InteriorItem)
    }

    if (result_furniture?.data) {
      setFurnitureData(result_furniture?.data?.data.attributes.Furniture)
    }
    if (result_exterior?.data) {
      setExteriorData(result_exterior?.data?.data.attributes.Exterior)
    }

    if (result_cartoon?.data) {
      setTowDData(result_cartoon?.data?.data.attributes.Cartoon)
    }
  }
  useEffect(() => {
    callApi()
  }, [])
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='md:grid  md:grid-cols-5 mb-10 md:mb-0'>
          <div className='col-span-1 text-white lg:mt-24 md:pr-4 mb-4 md:mb-0 '>
            <h1 className='text-2xl  md:text-3xl lg:text-3xl tracking-widest font-banmethuot'>
              {data?.DetailProduct?.title}
            </h1>
            <p className='text-sm md:text-base lg:pr-10 tracking-wide md:mt-6'>{data?.DetailProduct?.description}</p>
          </div>
          <div className='col-span-4'>
            <div className='text-white text-lg font-semibold font-copper mb-2 md:mb-0'>{data?.DetailProduct?.name}</div>
            <div className='md:flex  gap-6 md:h-[600px]'>
              <div className='md:max-w-[60%] w-full'>
                <img
                  src={
                    imagePreview
                      ? `${REACT_APP_BASE_URL}${imagePreview}`
                      : `${REACT_APP_BASE_URL}${data?.images?.data[0]?.attributes?.formats?.large?.url}`
                  }
                  className='w-full h-full mb-4 object-cover aspect-square'
                  alt=''
                />
              </div>
              <div className='flex gap-4 flex-col'>
                {data?.images &&
                  data?.images?.data?.slice(0, 3).map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className='md:w-[189px]'
                        onClick={() => setImagePreview(item?.attributes?.formats?.large?.url)}
                      >
                        <img
                          className='w-full h-full cursor-pointer aspect-square object-cover'
                          src={`${REACT_APP_BASE_URL}${item?.attributes?.formats?.large?.url}`}
                          alt=''
                        />
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-base md:text-lg'>
          <div className='col-span-1'>
            <p>Client: {data?.client}</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Address: {data?.address}</p>
            {/* <p className='flex-1 text-center'>Space:</p> */}
          </div>
        </div>

        <FurnitureModeling data={furnitureData} number={true} id={data?.id} />
        <div className='mt-12'>
          <Line />
        </div>
        <InteriorRendering data={interiorData} />

        <div className='mt-12'>
          <Line />
        </div>
        <ExteriorRendering data={exteriorData} />
        <div className='mt-12'>
          <Line />
        </div>
        <Page2D data={towDData} />
      </div>
    </div>
  )
}

export default DynamicFurniture
