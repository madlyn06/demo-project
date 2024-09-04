import React, { useEffect, useState } from 'react'
import s1 from 'src/assets/s-1.png'
import s2 from 'src/assets/s-2.png'
import s3 from 'src/assets/s-3.png'
import s4 from 'src/assets/s-4.png'
import InteriorRendering from '../components/InteriorRendering'
import Line from '../components/Line'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
import Ourr from '../components/Ourr'
import { useLocation } from 'react-router-dom'
import { API } from 'src/ultils/api'

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
  const [interiorData, setInterior] = useState<any>([])
  const [furnitureData, setFurnitureData] = useState<any>([])
  const [exteriorData, setExteriorData] = useState<any>([])
  const [towDData, setTowDData] = useState<any>([])
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
  const pathname = useLocation().pathname
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
        <FurnitureModeling data={furnitureData} />
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

export default Services
