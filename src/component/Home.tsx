import home from '../../public/home-image.png'

import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
import p5 from 'src/assets/p5.png'
import p6 from 'src/assets/p6.png'
import foter from 'src/assets/foter.png'
import Ourr from './components/Ourr'
import Button from './components/Button'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
export const project = [
  {
    image: p1,
    desc: "Living' DAT"
  },
  {
    image: p2,
    desc: "Living' SON"
  },
  {
    image: p3,
    desc: "Living' MINH"
  },
  {
    image: p4,
    desc: "Living' THAO"
  }
]
const images = [
  'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
]
import s1 from 'src/assets/s-1.png'
import s2 from 'src/assets/s-2.png'
import s3 from 'src/assets/s-3.png'
import s4 from 'src/assets/s-4.png'
import './home.css'
import { useEffect, useState } from 'react'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
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
        stroke='currentColor'
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
        stroke='currentColor'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
      </svg>
    </button>
  )
}
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
  const [homeData,setHomeData]:any = useState([]);
  const [interiorData,setInterior]:any = useState([])
  const [furnitureData,setFurnitureData]:any = useState([])
  const callApi = async()=>{
      const res = await API.get('/api/pages/1?populate[Section][populate]=*');
      if(res){
        const dataInter  = res?.data?.data.attributes.Section.filter((item:any)=>{
              return item.__component == "home.interior"
        })
        const furniture  = res?.data?.data.attributes.Section.filter((item:any)=>{
          return item.__component == "home.furniture"
    })
        if(dataInter){
          setInterior(dataInter);
        }
        if(furniture){
          setFurnitureData(furniture);
        }
        console.log("dataInter",dataInter)
        console.log("daa",res?.data);
        setHomeData(res.data);
    }
  }
  useEffect(()=>{
    callApi();
  },[])
  console.log("check pro",homeData)
  const indicators = (index: any) => <div className='indicator h-1 w-1 rounded-full'></div>

  return (
    <div className='max-w-7xl w-full mx-auto'>
      <div className='lg:pt-20 md:pt-10 pt-4 lg:px-10 px-4 md:px-6'>
        <div className='md:grid md:grid-cols-10 '>
          <div className='md:col-span-4 col-span-10 '>
            <div className='flex gap-4 md:gap-6 lg:gap-8 text-4xl md:text-6xl lg:text-8xl text-white/20 font-black items-start'>
              <p className='font-bauhaus'>0</p>
              <p className='font-bauhaus'>1</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-white md:text-base text-sm lg:text-xl font-century'>RENDER</p>
              <p
                style={{ fontFamily: 'banmethuot' }}
                className=' text-white lg:text-8xl tracking-wider font-semibold text-2xl md:text-6xl '
              >
                Interior
              </p>
              <div className='flex flex-col md:pr-32 pr-10 lg:pr-44 text-white md:text-base text-xs font-normal lg:text-2xl'>
                {/* <p>{homeData?.data?.attributes.Section}</p> */}
              </div>
            </div>
            <Button name='More' classnamesButton='py-2 px-4 text-sm md:text-base mt-3 md:mt-5 lg:mt-8 lg:text-xl' />
          </div>
          <div className='md:col-span-6 mt-10 md:mt-0'>
            <Slide {...properties} easing='ease' infinite={false} transitionDuration={500} indicators={true}>
              {images.map((image, index) => (
                <div className='each-slide-effect' key={index}>
                  <div style={{ backgroundImage: `url(${home})` }}></div>
                </div>
              ))}
            </Slide>
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
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 lg:mt-8 md:mt-4 mt-2'>
            {interiorData?.map((item:any, index:number) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt='' />
                </div>
                <div className='text-white text-xs md:text-base text-center mt-2 md:mt-4'>
                  <p className='font-copper font-semibold'>{item.title}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-4 md:mt-8'>
            {furnitureData?.map((item:any, index:number) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img style={{width:"100%",height:"100%"}} className='w-100 h-100' src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt='' />
                </div>
                <div className='text-white text-xs md:text-base text-center mt-4'>
                  <p className='font-copper font-bold'>{item.title}</p>
                  <div className='text-start'>
                    <p>Design by:</p>
                    <p>Addrest</p>
                    <p>Space:</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-4 md:mt-8'>
            {project.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={p6} alt='' />
                </div>
                <div className='text-white text-xs md:text-base text-center mt-4'>
                  <p className=''>{"Exx' DAT"}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                    <p>{"Client's Website:"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:mt-10 md:mt-8 mt-4 ml-5'>
          <img src={foter} alt='' />
          <div className='text-white text-xs md:text-base text-start mt-2 md:mt-4'>
            <p className='mb-2'>{'Living’ MINH'}</p>
            <div className='text-start'>
              <p>Client:</p>
              <p>Addrest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
