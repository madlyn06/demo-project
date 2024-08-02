import React, { useEffect, useState } from 'react'
import s1 from 'src/assets/s-1.png'
import s2 from 'src/assets/s-2.png'
import s3 from 'src/assets/s-3.png'
import s4 from 'src/assets/s-4.png'
import p6 from 'src/assets/p6.png'
import p5 from 'src/assets/p5.png'
import { project } from '../Home'
import foter from 'src/assets/foter.png'
import InteriorRendering from '../components/InteriorRendering'
import Line from '../components/Line'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
import Ourr from '../components/Ourr'
import { useLocation } from 'react-router-dom'
import { API } from 'src/ultils/api'
const data = [
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  }
]
export const service = [
  {
    image: s1,
    desc1: 'INTERIOR',
    desc2: 'RENDERING'
  },
  {
    image: s2,
    desc1: 'EXTERIOR',
    desc2: 'RENDERING'
  },
  {
    image: s3,
    desc1: 'FURNITURE',
    desc2: 'MODELING'
  },
  {
    image: s4,
    desc1: '2D',
    desc2: 'PHOTOSHOP'
  }
]

function Services() {
  const [homeData,setHomeData] = useState<any>([]);
  const [interiorData,setInterior] = useState<any>([])
  const [furnitureData,setFurnitureData] = useState<any>([])
  const [exteriorData,setExteriorData] = useState<any>([])
  const [towDData,setTowDData] = useState<any>([])
  const callApi = async()=>{
      const res = await API.get('/api/pages/3?populate[Section][populate]=*');
      if(res){
        const dataInter  = res?.data?.data.attributes.Section.filter((item:any)=>{
              return item.__component == "home.interior"
        })
        const furniture  = res?.data?.data.attributes.Section.filter((item:any)=>{
          return item.__component == "home.furniture"
          
        })
      const exterior  = res?.data?.data.attributes.Section.filter((item:any)=>{
        return item.__component == "home.exterior"
        })
        const towD  = res?.data?.data.attributes.Section.filter((item:any)=>{
          return item.__component == "home.2d"
          
      })
        if(dataInter){
          setInterior(dataInter);
        }
        if(furniture){
          setFurnitureData(furniture);
        }
        if(exterior){
          setExteriorData(exterior);
        }
        if(towD){
          setTowDData(towD);
        }
        console.log("dataInter",dataInter)
        console.log("daa",res?.data);
        setHomeData(res.data);
    }
  }
  useEffect(()=>{
    callApi();
  },[])
  const pathname = useLocation().pathname
  console.log(pathname)
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='flex font-copper font-black justify-center text-white gap-2 text-2xl'>
          <p>Our</p>
          <p className='text-[#c0854f]'>{pathname === '/project' ? 'Project' : 'Services'}</p>
        </div>
        <Ourr></Ourr>
        <InteriorRendering data={interiorData} />
        <div className='mt-12'>
          <Line />
        </div>
        <FurnitureModeling data={furnitureData}/>
        <div className='mt-12'>
          <Line />
        </div>
        <ExteriorRendering data={exteriorData}/>
        <div className='mt-12'>
          <Line />
        </div>
        <Page2D data={towDData} />
      </div>
    </div>
  )
}

export default Services
