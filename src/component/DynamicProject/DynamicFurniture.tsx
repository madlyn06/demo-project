import React, { useEffect, useState } from 'react'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'

import Line from '../components/Line'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import { useLocation } from 'react-router-dom'
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

  const [bannerIndex, setBannerindex] = useState(0)
  const [data, setData] = useState<any>({})
  const location = useLocation()
  useEffect(() => {
    if (location.state) setData(location.state)
  }, [location])
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
        <div className='md:grid md:grid-cols-5'>
          <div className='md:col-span-1 mb-6 lg:mb-0 text-white lg:mt-24 mr-6 md:mr-0'>
            <h1 className='lg:text-3xl md:text-2xl text-xl  tracking-widest font-banmethuot font-black'>
              {data?.DetailProduct?.title}
            </h1>
            <p className='text-sm lg:text-base mt-2 md:pr-10 tracking-wide '>{data?.DetailProduct?.description}</p>
          </div>
          <div className='col-span-4  '>
            <div className='text-white text-lg font-semibold font-copper'>{data?.DetailProduct?.name}</div>
            {/* <img
              src={`${REACT_APP_BASE_URL}${homeData?.data?.attributes?.Section[0]?.image?.data?.attributes?.formats?.thumbnail?.url}`}
              alt=''
              className='w-full'
            /> */}
            <div className='md:col-span-6 col-span-3 mt-10 md:mt-0'>
              {data?.images?.data && data?.images?.data.length > 0 && (
                <Slide
                  {...properties}
                  easing='ease'
                  onChange={handleSlideChange}
                  infinite={true}
                  transitionDuration={500}
                  indicators={true}
                >
                  {data?.images?.data?.map((item: any, index: number) => {
                    return (
                      <div className='each-slide-effect' key={index}>
                        <div
                          style={{
                            backgroundImage: `url(${REACT_APP_BASE_URL}${item?.attributes?.formats?.large?.url})`
                          }}
                          className='aspect-video w-full h-full'
                        ></div>
                      </div>
                    )
                  })}
                </Slide>
              )}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-base md:text-lg'>
          <div className='col-span-1 '>
            <p>Client: {data?.client}</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Address: {data?.address}</p>
            {/* <p className='flex-1 text-center'>Address: {data?.space}</p> */}
          </div>
        </div>

        <FurnitureModeling data={furnitureData} />
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
