/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'

import Line from '../components/Line'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import { useLocation, useParams } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
const buttonStyle = {
  width: '30px',
  background: 'none',
  border: '0px'
}
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='white'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='white'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
      </svg>
    </button>
  )
}
function DynamicFurniture() {
  const [homeData, setHomeData]: any = useState([])
  const [interiorData, setInterior]: any = useState([])
  const [furnitureData, setFurnitureData]: any = useState([])
  const [exteriorData, setExteriorData]: any = useState([])
  const [towDData, setTowDData]: any = useState([])

  const [imagePreview, setImagePreview]: any = useState('')

  const [bannerIndex, setBannerindex] = useState(0)
  const [data, setData] = useState<any>({})
  const { name } = useParams()
  useEffect(() => {
    if (furnitureData.length > 0 && name) {
      const result = furnitureData.find((item: any) => item.id === +name)
      setData(result)
    }
  }, [furnitureData, name])
  const callApi = async () => {
    // const { state } = props.location
    const res = await API.get('/api/pages/1?populate[Section][populate]=*')
    if (res) {
      const dataInter = res?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.interior'
      })
      const furniture = res?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.furniture'
      })
      const exterior = res?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.exterior'
      })
      const towD = res?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.2d'
      })
      if (dataInter) {
        setInterior(dataInter)
      }
      if (furniture) {
        setFurnitureData(furniture)
      }
      if (exterior) {
        setExteriorData(exterior)
      }
      if (towD) {
        setTowDData(towD)
      }
      setHomeData(res.data)
    }
  }
  useEffect(() => {
    callApi()
  }, [])
  const handleSlideChange = (previous: any, next: any) => {
    setBannerindex(next)
  }

  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-2 mt-8'>
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

        <FurnitureModeling data={furnitureData} number={true} />
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
