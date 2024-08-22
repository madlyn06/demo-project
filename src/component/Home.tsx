import Ourr from './components/Ourr'
import Button from './components/Button'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import s1 from 'src/assets/s-1.png'
import s2 from 'src/assets/s-2.png'
import s3 from 'src/assets/s-3.png'
import s4 from 'src/assets/s-4.png'
import './home.css'
import { useEffect, useState } from 'react'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import InteriorRendering from './components/InteriorRendering'
import FurnitureModeling from './components/FurnitureModeling'
import ExteriorRendering from './components/ExteriorRendering'
import Page2D from './components/Page2D'
import { Link } from 'react-router-dom'
import { properties } from 'src/constant/constant'

const service = [
  {
    image: s1,
    desc1: 'INTERIOR',
    desc2: 'RENDERING',
    route: 'services/interior-rendering'
  },
  {
    image: s2,
    desc1: 'EXTERIOR',
    desc2: 'RENDERING',
    route: 'services/exterior-rendering'
  },
  {
    image: s3,
    desc1: 'FURNITURE',
    desc2: 'MODELING',
    route: 'services/furniture-modeling'
  },
  {
    image: s4,
    desc1: '2D',
    desc2: 'PHOTOSHOP',
    route: 'services/2d'
  }
]
export const Home = () => {
  const [interiorData, setInterior] = useState<any>([])
  const [furnitureData, setFurnitureData] = useState<any>([])
  const [exteriorData, setExteriorData] = useState<any>([])
  const [towDData, setTowDData] = useState<any>([])
  const [bannerData, setBannerData] = useState<any>([])
  const [bannerIndex, setBannerindex] = useState(0)
  const arrayPath = [
    'project/interior-rendering',
    'project/exterior-rendering',
    'project/furniture-modeling',
    'project/2d'
  ]
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
      const banner = res?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.banner'
      })
      if (dataInter) {
        setInterior(dataInter)
      }
      if (banner) {
        setBannerData(banner)
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
    }
  }
  useEffect(() => {
    callApi()
  }, [])
  const handleSlideChange = (previous: any, next: any) => {
    setBannerindex(next)
  }
  return (
    <div className='max-w-7xl w-full mx-auto'>
      <div className='lg:pt-20 md:pt-10 pt-4 lg:px-10 px-4 md:px-6'>
        <div className='md:grid md:grid-cols-10'>
          <div className='md:col-span-3 col-span-10'>
            <div className='flex lg:gap-2 text-4xl md:text-6xl lg:text-8xl text-white/20 font-black items-start'>
              <p className='font-bauhaus'>0</p>
              <p className='font-bauhaus'>{bannerIndex + 1}</p>
            </div>
            {bannerData[bannerIndex] ? (
              <div className='flex flex-col'>
                <p className='text-white md:text-base text-sm lg:text-xl font-century'>RENDER</p>
                <p
                  style={{ fontFamily: 'banmethuot' }}
                  className=' text-white lg:text-6xl tracking-wider font-semibold text-2xl md:text-6xl '
                >
                  {bannerData[bannerIndex].title}
                </p>
                <div className='flex flex-col md:pr-32 pr-10 lg:pr-32 text-white md:text-base text-xs font-normal lg:text-2xl'>
                  <p>{bannerData[bannerIndex].description}</p>
                </div>
              </div>
            ) : (
              ''
            )}
            <Link to={`${arrayPath[bannerIndex]}`}>
              <Button name='More' classnamesButton='py-2 px-4 text-sm md:text-base mt-3 md:mt-5 lg:mt-8 lg:text-xl' />
            </Link>
          </div>
          <div className='md:col-span-7 mt-10 md:mt-0'>
            {bannerData.length > 0 && (
              <Slide
                {...properties}
                easing='ease'
                onChange={handleSlideChange}
                infinite={true}
                autoplay={false}
                transitionDuration={500}
                indicators={true}
              >
                {bannerData?.map((item: any, index: number) => {
                  return (
                    <div className='each-slide-effect' key={index}>
                      <div
                        style={{
                          backgroundImage: `url(${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.large?.url})`
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
        <div>
          <h3 className='flex gap-2 text-xl md:text-2xl lg:text-3xl text-center justify-center text-white'>
            Our <h3 className='text-[#c0854f]'>Services and Workflow</h3>
          </h3>
          <Ourr data={service} />
        </div>
        <div className='lg:mt-8 md:mt-6 mt-4'>
          <h3 className='flex gap-2 md:text-2xl text-xl lg:text-3xl text-center justify-center text-white'>
            Our <h3 className='text-[#c0854f]'>Project</h3>
          </h3>
          {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 lg:mt-8 md:mt-4 mt-2'>
              {furnitureData?.map((item:any, index:number) => (
                <div className='col-span-1' key={index}>
                  <div>
                  <img style={{width:"100%",height:"100%"}} className='w-100 h-100' src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt='' />

                  </div>
                  <div className='text-white text-xs md:text-base text-center mt-2 md:mt-4'>
                    <p className='font-copper font-semibold'>{item.title}</p>
                    <div className='text-start'>
                      <p>Client: {item?.client}</p>
                      <p>Addrest: {item?.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          <FurnitureModeling data={furnitureData} />
          {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-4 md:mt-8'>
              {interiorData?.map((item:any, index:number) => (
                <div className='col-span-1' key={index}>
                  <div>
                    <img style={{width:"100%",height:"100%"}} className='w-100 h-100' src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt='' />
                  </div>
                  <div className='text-white text-xs md:text-base text-center mt-4'>
                    <p className='font-copper font-bold'>{item.title}</p>
                    <div className='text-start'>
                      <p>Design by: {item.design}</p>
                      <p>Addrest: {item.address}</p>
                      <p>Space: {item.space}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          <InteriorRendering data={interiorData} />
          {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-4 md:mt-8'>
              {exteriorData.map((item:any, index:number) => (
                <div className='col-span-1' key={index}>
                  <div>
                  <img style={{width:"100%",height:"100%"}} className='w-100 h-100' src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt='' />
                  </div>
                  <div className='text-white text-xs md:text-base text-center mt-4'>
                    <p className=''>{item.title}</p>
                    <div className='text-start'>
                      <p>Client: {item.client}</p>
                      <p>Addrest: {item.address}</p>
                      <p>Client's Website: {item.clientWebsite}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          <ExteriorRendering data={exteriorData} />
        </div>
        {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-4 md:mt-8'>

          {towDData.map((item:any,index:any)=>{
            return (
              <div  key={index} className='lg:mt-10 md:mt-8 mt-4 ml-5'>
              <img src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt='' />
              <div className='text-white text-xs md:text-base text-start mt-2 md:mt-4'>
                <p className='mb-2'>{item.title}</p>
                <div className='text-start'>
                  <p>Clientd: {item.client}</p>
                  <p>Addrest: {item.address}</p>
                </div>
              </div>
            </div>
            )
          })}
          </div> */}
        <Page2D data={towDData} />
      </div>
    </div>
  )
}
