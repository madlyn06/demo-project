import React from 'react'

function BigDeal({ banner }: { banner: string }) {
  return (
    <div className='mt-16'>
      <div className='grid md:grid-cols-4'>
        <div className='col-span-3 relative flex items-center flex-col justify-center md:block'>
          <img src={banner} alt='' />
          <div className='md:absolute bg-[#000]/50 py-3 md:top-1/2  w-10/12 md:w-fit -translate-y-1/2 md:translate-x-1/2 pl-10 pr-24 rounded-2xl right-0 text-white'>
            <h1 className='font-semibold m-0 text-lg italic'>BIG DEAL</h1>
            <p className='font-medium'>A Faceage rendering start an $200</p>
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
      <div className='grid md:grid-cols-4'>
        <div className='col-span-1'></div>
        <div className='col-span-3 relative flex items-center flex-col justify-center md:block'>
          <img src={banner} alt='' />
          <div className='md:absolute bg-[#000]/50 py-3 md:top-1/2  w-10/12 md:w-fit  -translate-y-1/2 md:-translate-x-1/2 pl-10 pr-24 rounded-2xl left-0 text-white'>
            <h1 className='font-semibold m-0 text-lg italic'>BIG DEAL</h1>
            <p>A Faceage rendering start an $200</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigDeal
