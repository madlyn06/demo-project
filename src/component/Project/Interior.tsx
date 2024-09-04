import { useEffect, useState } from 'react'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'

import Line from '../components/Line'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
function Interior() {
  const [homeData, setHomeData]: any = useState([])
  const [interiorData, setInterior]: any = useState([])
  const [furnitureData, setFurnitureData]: any = useState([])
  const [exteriorData, setExteriorData]: any = useState([])
  const [towDData, setTowDData]: any = useState([])
  // pass data through Link
  const callApi = async () => {
    const res = await API.get('/api/pages/1?populate[Section][populate]=*')
    if (res.data) {
      setHomeData(res.data)
    }
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
        <div className='grid md:grid-cols-5'>
          <div className='col-span-1 mb-6 lg:mb-0 text-white lg:mt-24 mr-6 md:mr-0'>
            <h1 className='lg:text-3xl md:text-2xl text-xl  tracking-widest font-banmethuot font-black'>
              {homeData?.data?.attributes?.Section[0]?.title}
            </h1>
            <p className='text-sm lg:text-base mt-2 md:pr-10 tracking-wide '>
              {homeData?.data?.attributes?.Section[0]?.description}
            </p>
          </div>
          <div className='col-span-4'>
            {/* <div className='text-white text-lg font-semibold font-copper'>Living’ Dat</div> */}
            <img
              src={`${REACT_APP_BASE_URL}${homeData?.data?.attributes?.Section[0]?.image?.data?.attributes?.formats?.large?.url}`}
              alt=''
              className='w-full'
            />
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-base md:text-lg'>
          <div className='col-span-1 '>
            <p>Design by:</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Address:</p>
            <p className='flex-1 text-center'>Space:</p>
          </div>
        </div>
        <InteriorRendering data={interiorData} number={true} />
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

export default Interior
