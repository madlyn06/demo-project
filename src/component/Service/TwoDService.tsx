import React, { useEffect, useState } from 'react'
import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import Page2D from '../components/Page2D'
import Offer from '../components/Offer'
import Button from '../components/Button'
import Line from '../components/Line'
import { API } from 'src/ultils/api'
import { ServiceType } from './ServiceType'
import useStripe from 'src/hooks/useStripe'
import { convertImg } from 'src/ultils/utils'

function TwoDService() {
  const [data, setData] = useState([])
  const dataService = useStripe<ServiceType>('/api/services/4?populate=*')
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const res2 = await API.get('/api/pages/1?populate[Section][populate]=*')
    const arr = res2.data.data.attributes.Section.filter((item: any) => {
      if (item.__component === 'home.2d') {
        return item
      }
    })

    setData(arr)
  }
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center flex gap-2 justify-center font-semibold font-copper uppercase text-white text-xl  md:text-2xl lg:text-3xl '>
          2D PhotoShop <h1 className='text-[#c1984f]'>Service</h1>
        </h1>
        <div className='grid lg:grid-cols-5'>
          <div className='col-span-1  mt-6 ml-2'>
            <p className='text-[#fff] text-lg  md:text-xl lg:text-2xl  font-century'>{dataService.title}</p>
          </div>
          <div className='col-span-4 relative'>
            <img src={convertImg(dataService?.image)} alt='' />
            <img
              src={convertImg(dataService?.subImage)}
              className='absolute bottom-0 translate-y-1/2 max-w-[250px] -translate-x-1/2 left-1/2 hidden lg:block'
              alt=''
            />
            <div className='lg:absolute lg:ml-20 lg:top-20 lg:left-10 md:top-16 md:left-32 left-48 top-20 lg:-translate-x-1/2 lg:w-[535px]'>
              <p className=' mt-8 text-white font-medium text-3xl  md:text-4xl lg:text-5xl font-banmethuot'>
                {dataService.heading}
              </p>
              <p className='text-white font-medium text-base  md:text-lg lg:text-xl  mt-4'>{dataService.description}</p>
            </div>

            <div className='hidden lg:block md:absolute -bottom-[171px] pb-32 text-[#fff]/40  w-[350px] pr-20 right-12 bg-[#000]/70 pl-2 pt-2'>
              <h1 className='font-bold text-xl md:text-2xl '>{dataService.titleSub}</h1>
              <p className=' text-base  md:text-lg lg:text-xl '>{dataService.descriptionSub}</p>
              <div className='absolute bg-black/20 h-full w-[700px] top-0 -left-[200%]'></div>
            </div>
            <p className='text-[#c1984f] text-base -rotate-90 absolute left-[-92px] bottom-[-35px]'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
        </div>
      </div>
      <Offer data={dataService.OfferItem && dataService.OfferItem[0]} />
      <Page2D data={data} />
      <div className='md:mt-16 my-8'>
        <Line />
      </div>
      <div className='flex justify-center  mt-10 text-lg md:text-xl'>
        <Button name='Chat More' classnamesButton='!p-2' />
      </div>
    </div>
  )
}

export default TwoDService
