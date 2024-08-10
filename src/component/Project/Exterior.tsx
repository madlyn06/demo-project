import React, { useEffect, useState } from 'react'
import p5 from 'src/assets/p5.png'
import { project } from '../Home'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
const data = [
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  }
]
function Exterior() {
  const [homeData, setHomeData]: any = useState([])
  const [interiorData, setInterior]: any = useState([])
  const [furnitureData, setFurnitureData]: any = useState([])
  const [exteriorData, setExteriorData]: any = useState([])
  const [towDData, setTowDData]: any = useState([])
  const callApi = async () => {
    const res = await API.get('/api/pages/4?populate[Section][populate]=*')
    const res2 = await API.get('/api/pages/1?populate[Section][populate]=*')
    if (res) {
      const dataInter = res2?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.interior'
      })
      const furniture = res2?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.furniture'
      })
      const exterior = res2?.data?.data.attributes.Section.filter((item: any) => {
        return item.__component == 'home.exterior'
      })
      const towD = res2?.data?.data.attributes.Section.filter((item: any) => {
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
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='grid md:grid-cols-5'>
          <div className='col-span-1 text-white lg:mt-24 '>
            <h1 className='lg:text-3xl md:text-2xl text-xl tracking-widest'>
              {homeData?.data?.attributes?.Section[0]?.title}
            </h1>
            <p className='text-sm lg:text-base pr-10 tracking-wide'>
              {homeData?.data?.attributes?.Section[0]?.description}
            </p>
          </div>
          <div className='col-span-4 mt-3 md:mt-0'>
            <div className='text-white  text-base md:text-lg font-semibold  font-copper'>Living’ Dat</div>
            <img
              src={`${REACT_APP_BASE_URL}${homeData?.data?.attributes?.Section[0]?.image?.data?.attributes?.formats?.thumbnail?.url}`}
              alt=''
              className='w-full'
            />
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
        <ExteriorRendering data={exteriorData} />
        <InteriorRendering data={interiorData} />
        <FurnitureModeling data={furnitureData} />
        <Page2D data={towDData} />
      </div>
    </div>
  )
}

export default Exterior
