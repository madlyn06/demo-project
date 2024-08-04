import React from 'react'
import bannerimg from 'src/assets/about/banner.png'
import { REACT_APP_BASE_URL } from 'src/ultils/api'
function BigDeal({ banner }: { banner: any }) {
  return (
    <div className='mt-16'>
      <div className='grid md:grid-cols-4'>
        <div className='col-span-3 relative flex items-center flex-col justify-center md:block mt-4'>
          <img
            src={`${REACT_APP_BASE_URL}${banner[0]?.image?.data?.attributes?.url}`}
            className='w-full h-full'
            alt=''
          />
          <div className='md:absolute bg-[#000]/50 py-3 md:top-1/2  w-10/12 md:w-fit  md:mt-0 -translate-y-1/3 md:-translate-y-1/2 md:translate-x-1/2 pl-10 pr-24 rounded-2xl md:right-6 md:right-0 text-white'>
            <h1 className='font-semibold m-0 text-base md:text-lg italic'>{banner[0]?.title}</h1>
            <p className='md:w-[300px] w-[160px] text-sm md:text-base'>{banner[0]?.description}</p>
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
      <div className='md:grid md:grid-cols-4 mt-4'>
        <div className='col-span-1'></div>
        <div className='col-span-3 relative flex items-center flex-col justify-center md:block'>
          <img
            src={`${REACT_APP_BASE_URL}${banner[1]?.image?.data?.attributes?.url}`}
            className='w-full h-full'
            alt=''
          />
          <div className='md:absolute bg-[#000]/50 py-3 top-1/2  w-10/12 md:w-fit  md:-translate-y-1/2 -translate-y-1/3  md:-translate-x-1/2 pl-10 md:pr-24 rounded-2xl left-20 md:left-0 text-white'>
            <h1 className='font-semibold m-0 text-base md:text-lg italic'>{banner[1]?.title}</h1>
            <p className='md:w-[300px] w-[200px] text-sm md:text-base'>{banner[1]?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigDeal
