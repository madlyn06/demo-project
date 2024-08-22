/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
import Line from '../components/Line'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'

function Furniture() {
  const [homeData, setHomeData]: any = useState([])
  const [interiorData, setInterior]: any = useState([])
  const [furnitureData, setFurnitureData]: any = useState([])
  const [exteriorData, setExteriorData]: any = useState([])
  const [towDData, setTowDData]: any = useState([])
  const [sliderData, setSliderData]: any = useState([])
  const [imagePreview, setImagePreview]: any = useState('')
  const callApi = async () => {
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
      // slider
      const slider = res?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.slider'
      })
      const arr = [slider[0]?.img1, slider[0]?.img2, slider[0]?.img3]
      setSliderData(arr)
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
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='md:grid  md:grid-cols-5 mb-10 md:mb-0'>
          <div className='col-span-1 text-white lg:mt-24 md:pr-4 mb-4 md:mb-0 '>
            <h1 className='text-2xl  md:text-3xl lg:text-3xl tracking-widest font-banmethuot'>
              {homeData?.data?.attributes?.Section[2]?.title}
            </h1>
            <p className='text-sm md:text-base lg:pr-10 tracking-wide md:mt-6'>
              {homeData?.data?.attributes?.Section[2]?.description}
            </p>
          </div>
          <div className='col-span-4'>
            {/* <div className='text-white text-lg font-semibold font-copper mb-2 md:mb-0'>Living’ Dat</div> */}
            <div className='md:flex  gap-6 md:h-[600px]'>
              <div className='md:max-w-[60%] w-full'>
                <img
                  src={
                    imagePreview
                      ? `${REACT_APP_BASE_URL}${imagePreview}`
                      : `${REACT_APP_BASE_URL}${sliderData[0]?.data?.attributes?.url}`
                  }
                  className='w-full h-full mb-4 object-cover aspect-square'
                  alt=''
                />
              </div>
              <div className='flex gap-4 flex-col'>
                {sliderData.length > 0 &&
                  sliderData.map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className='md:w-[189px]'
                        onClick={() => setImagePreview(item?.data?.attributes?.url)}
                      >
                        <img
                          className='w-full h-full cursor-pointer aspect-square object-cover'
                          src={`${REACT_APP_BASE_URL}${item?.data?.attributes?.url}`}
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
            <p>Design by:</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Address:</p>
            <p className='flex-1 text-center'>Space:</p>
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

export default Furniture
