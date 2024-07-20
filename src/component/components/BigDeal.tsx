import React from 'react'

function BigDeal({ banner }: { banner: string }) {
  return (
    <div className='mt-16'>
      <div className='grid grid-cols-4'>
        <div className='col-span-3 relative'>
          <div className='absolute bg-[#000]/50 py-3 top-1/2  -translate-y-1/2 translate-x-1/2 pl-10 pr-24 rounded-2xl right-0 text-white'>
            <h1 className='font-semibold m-0 text-lg italic'>BIG DEAL</h1>
            <p className='font-medium'>A Faceage rendering start an $200</p>
          </div>
          <img src={banner} alt='' />
        </div>
        <div className='col-span-1'></div>
      </div>
      <div className='grid grid-cols-4'>
        <div className='col-span-1'></div>
        <div className='col-span-3 relative'>
          <div className='absolute bg-[#000]/50 py-3 top-1/2  -translate-y-1/2 -translate-x-1/2 pl-10 pr-24 rounded-2xl left-0 text-white'>
            <h1 className='font-semibold m-0 text-lg italic'>BIG DEAL</h1>
            <p>A Faceage rendering start an $200</p>
          </div>
          <img src={banner} alt='' />
        </div>
      </div>
    </div>
  )
}

export default BigDeal
