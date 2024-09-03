import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import FurnitureModeling from '../components/FurnitureModeling'
import Offer from '../components/Offer'
import Line from '../components/Line'
import { useEffect, useState } from 'react'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import { ServiceType } from './ServiceType'
import useStripe from 'src/hooks/useStripe'
import { convertImg } from 'src/ultils/utils'

function FurnitureService() {
  const [model, setModel] = useState<any>([])
  const [funiture, setFurniture] = useState<any>([])
  const data = useStripe<ServiceType>('/api/services/3?populate=*')
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await API.get('/api/pages/3?populate[Section][populate]=*')
    const res2 = await API.get('/api/pages/1?populate[Section][populate]=*')
    if (res?.data?.data?.attributes?.Section) {
      const arr = res.data.data.attributes.Section.filter((item: any) => {
        if (item.__component === 'home.complexity') {
          return item
        }
      })
      const arr2 = res2.data.data.attributes.Section.filter((item: any) => {
        if (item.__component === 'home.furniture') {
          return item
        }
      })
      setFurniture(arr2)
      setModel(arr)
    }
  }
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center flex gap-2 justify-center font-semibold font-copper uppercase text-white text-xl  md:text-2xl lg:text-3xl '>
          Furniture Rendering <h1 className='text-[#c1984f]'>Service</h1>
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

      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-8'>
        {model.length > 0 &&
          model.map((item: any, index: any) => (
            <div className='col-span-1' key={index}>
              <div>
                <img src={`${REACT_APP_BASE_URL}${item.image.data.attributes.url}`} alt='' />
              </div>
              <div className='text-white text-base mt-4 bg-[#151714] rounded-2xl pl-4 py-2'>
                <p className='text-lg md:text-xl m-0 italic'>{item.title}</p>
                <p className='text-xs md:text-sm m-0'>Hourly Rate: {item.rate} </p>
                <p className='text-xs md:text-sm m-0'>Estimated working hours: {item.estimate} </p>
              </div>
            </div>
          ))}
      </div>
      <FurnitureModeling data={funiture} />
      <div className='mt-12'>
        <Line />
      </div>
    </div>
  )
}

export default FurnitureService
