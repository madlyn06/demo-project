import React, { useEffect, useState } from 'react'
import p5 from 'src/assets/p5.png'
import sofa from 'src/assets/project/sofa.png'
import sofamini from 'src/assets/project/sofa-mini.png'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
import Line from '../components/Line'
import { API } from 'src/ultils/api'
const data = [
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  }
]
const project_furniture = [
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
  },
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
  },
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
function Furniture() {
  const [homeData,setHomeData]:any = useState([]);
  const [interiorData,setInterior]:any = useState([])
  const [furnitureData,setFurnitureData]:any = useState([])
  const [exteriorData,setExteriorData]:any = useState([])
  const [towDData,setTowDData]:any = useState([])
  const callApi = async()=>{
      const res = await API.get('/api/pages/1?populate[Section][populate]=*');
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
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='md:grid  md:grid-cols-5 mb-10 md:mb-0'>
          <div className='col-span-1 text-white lg:mt-24 md:pr-4 mb-4 md:mb-0 '>
            <h1 className='text-2xl  md:text-3xl lg:text-3xl tracking-widest font-banmethuot'>Furniture</h1>
            <h1 className='text-2xl md:text-3xl lg:text-3xl tracking-widest font-banmethuot'>Modeling</h1>
            <p className='text-sm md:text-base lg:pr-10 tracking-wide md:mt-6'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
          <div className='col-span-4'>
            <div className='text-white text-lg font-semibold font-copper mb-2 md:mb-0'>Living’ Dat</div>
            <div className='md:flex gap-6 md:h-[600px]'>
              <div>
                <img src={sofa} className='w-full h-full mb-4' alt='' />
              </div>
              <div className='flex gap-4 flex-col'>
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className='md:w-[189px]'>
                      <img className='w-full h-full ' src={sofamini} alt='' />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-base md:text-lg'>
          <div className='col-span-1'>
            <p>Design by:</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Addrest:</p>
            <p className='flex-1 text-center'>Space:</p>
          </div>
        </div>
        <FurnitureModeling data={furnitureData} />
        <div className='mt-12'>
          <Line />
        </div>
        <InteriorRendering data={interiorData}/>
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

export default Furniture
