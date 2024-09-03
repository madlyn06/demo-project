import React, { useEffect, useState } from 'react'

import ExteriorRendering from '../components/ExteriorRendering'
import Offer from '../components/Offer'
import Button from '../components/Button'
import Line from '../components/Line'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import { ServiceType } from './ServiceType'
import useStripe from 'src/hooks/useStripe'
import { convertImg } from 'src/ultils/utils'

function ExteriorService() {
  const [exterior, setExterior] = useState([])
  const [bigDeal, setBigDeal] = useState<any>([])
  const data = useStripe<ServiceType>('/api/services/2?populate=*')
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const res = await API.get('/api/pages/2?populate[Section][populate]=*')
    const res2 = await API.get('/api/pages/1?populate[Section][populate]=*')
    const arr = res2.data.data.attributes.Section.filter((item: any) => {
      if (item.__component === 'home.exterior') {
        return item
      }
    })
    const arr2 = res.data.data.attributes.Section.filter((item: any) => {
      if (item.__component === 'home.big-deal') {
        return item
      }
    })
    setExterior(arr)
    setBigDeal(arr2)
  }
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center flex gap-2 justify-center font-semibold font-copper uppercase text-white text-xl  md:text-2xl lg:text-3xl '>
          Exterior Rendering <h1 className='text-[#c1984f]'>Service</h1>
        </h1>
        <div className='grid lg:grid-cols-5'>
          <div className='col-span-1  mt-6 ml-2'>
            <p className='text-[#fff] text-lg  md:text-xl lg:text-2xl  font-century'>{data.title}</p>
          </div>
          <div className='col-span-4 relative'>
            <img src={convertImg(data?.image)} alt='' />
            <img
              src={convertImg(data?.subImage)}
              className='absolute bottom-0 translate-y-1/2 max-w-[250px] -translate-x-1/2 left-1/2 hidden lg:block'
              alt=''
            />
            <div className='lg:absolute lg:ml-20 lg:top-20 lg:left-10 md:top-16 md:left-32 left-48 top-20 lg:-translate-x-1/2 lg:w-[535px]'>
              <p className=' mt-8 text-white font-medium text-3xl  md:text-4xl lg:text-5xl font-banmethuot'>
                {data.heading}
              </p>
              <p className='text-white font-medium text-base  md:text-lg lg:text-xl  mt-4'>{data.description}</p>
            </div>

            <div className='hidden lg:block md:absolute -bottom-[171px] pb-32 text-[#fff]/40  w-[350px] pr-20 right-12 bg-[#000]/70 pl-2 pt-2'>
              <h1 className='font-bold text-xl md:text-2xl '>{data.titleSub}</h1>
              <p className=' text-base  md:text-lg lg:text-xl '>{data.descriptionSub}</p>
              <div className='absolute bg-black/20 h-full w-[700px] top-0 -left-[200%]'></div>
            </div>

            <p className='text-[#c1984f] text-base -rotate-90 absolute left-[-92px] bottom-[-35px]'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
        </div>
      </div>
      <Offer data={data.OfferItem && data.OfferItem[0]} />
      <div className='mt-16'>
        <div className='grid md:grid-cols-4'>
          <div className='col-span-3 relative flex items-center flex-col justify-center md:block mt-4'>
            <img
              src={`${REACT_APP_BASE_URL}${bigDeal[0]?.image?.data?.attributes?.url}`}
              className='w-full h-full'
              alt=''
            />
            <div className='md:absolute bg-[#000]/50 py-3 md:top-1/2  w-10/12 md:w-fit  md:mt-0 -translate-y-1/3 md:-translate-y-1/2 md:translate-x-1/2 pl-10 pr-24 rounded-2xl md:right-0 text-white'>
              <h1 className='font-semibold m-0 text-base md:text-lg italic'>{bigDeal[0]?.title}</h1>
              <p className='md:w-[300px] w-[160px] text-sm md:text-base'>{bigDeal[0]?.description}</p>
            </div>
          </div>
          <div className='col-span-1'></div>
        </div>
        <div className='md:grid md:grid-cols-4 mt-4'>
          <div className='col-span-1'></div>
          <div className='col-span-3 relative flex items-center flex-col justify-center md:block'>
            <img
              src={`${REACT_APP_BASE_URL}${bigDeal[1]?.image?.data?.attributes?.url}`}
              className='w-full h-full'
              alt=''
            />
            <div className='md:absolute bg-[#000]/50 py-3 top-1/2  w-10/12 md:w-fit  md:-translate-y-1/2 -translate-y-1/3  md:-translate-x-1/2 pl-10 md:pr-24 rounded-2xl left-20 md:left-0 text-white'>
              <h1 className='font-semibold m-0 text-base md:text-lg italic'>{bigDeal[1]?.title}</h1>
              <p className='md:w-[300px] w-[200px] text-sm md:text-base'>{bigDeal[1]?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:mt-16 my-8'>
        <Line />
      </div>
      <div className='flex justify-center  items-center   md:mt-8 text-lg md:text-xl '>
        <Button name='Chat More' classnamesButton='!p-2 !text-xl' />
      </div>
      <ExteriorRendering data={exterior} />
      <div className='mt-12'>
        <Line />
      </div>
    </div>
  )
}

export default ExteriorService
