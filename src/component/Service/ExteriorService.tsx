import React from 'react'
import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import coin from 'src/assets/project/coin.png'
import calendar from 'src/assets/project/calender.png'
import star from 'src/assets/project/star.png'
import { project } from '../Home'
import p5 from 'src/assets/p5.png'
import p6 from 'src/assets/p6-big.png'
import ExteriorRendering from '../components/ExteriorRendering'
import Offer from '../components/Offer'
import Button from '../components/Button'
import Line from '../components/Line'
const project1 = [
  {
    img: coin,
    title: 'Reasonable Price '
  },
  {
    img: calendar,
    title: 'Quick Turnaround Timet'
  },
  {
    img: star,
    title: 'Realistic Quality'
  }
]
function ExteriorService() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center font-copper font-black flex gap-2 justify-center  text-white text-2xl'>
          Exterior Rendering <h1 className='text-[#c1984f]'>Service</h1>
        </h1>
        <div className='grid grid-cols-5'>
          <div className='col-span-1  mt-6 ml-2'>
            <p className='text-[#fff] text-xl font-century'>Let’s Start</p>
          </div>
          <div className='col-span-4 relative'>
            <img src={banner} alt='' />
            <div className='absolute top-20 left-10 -translate-x-1/2 w-[535px]'>
              <p className=' text-white font-medium text-6xl font-banmethuot'>
                Realistic Interior Close-Up Views Rendering
              </p>
              <p className='text-white text-xl pr-72 mt-4'>
                Do you want to know how your Living room or your new interiors will look? We can create a beautiful
                Interior Render based on your floor plan.
              </p>
            </div>
            <img
              src={layerbanner}
              className='absolute bottom-0 translate-y-1/2 max-w-[250px] -translate-x-1/2 left-1/2'
              alt=''
            />
            <div className='absolute -bottom-[171px] pb-32 text-[#fff]/40  w-[350px] pr-20 right-12 bg-[#000]/70 pl-2 pt-2'>
              <h1 className='font-bold text-2xl text-white'>SAMPLE”</h1>
              <p className='text-lg  '>
                Do you want to know how your Living room or your new interiors will look? We can create a beautiful
                Interior Render based on your floor plan.
              </p>
            </div>

            <p className='text-[#c1984f] text-base -rotate-90 absolute left-[-92px] bottom-[-35px]'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
        </div>
      </div>
      <Offer />
      <div className='mt-16'>
        <div className='grid grid-cols-4'>
          <div className='col-span-3 relative'>
            <div className='absolute bg-[#000]/50 py-3 top-1/2  -translate-y-1/2 translate-x-1/2 pl-10 pr-24 rounded-2xl right-0 text-white'>
              <h1 className='font-semibold m-0 text-lg italic'>BIG DEAL</h1>
              <p>A Faceage rendering start an $200</p>
            </div>
            <img src={p6} alt='' />
          </div>
          <div className='col-span-1'></div>
        </div>
        <div className='grid grid-cols-4'>
          <div className='col-span-1'></div>
          <div className='col-span-3 relative'>
            <div className='absolute bg-[#000]/50 py-3 top-1/2  -translate-y-1/2 -translate-x-1/2 pl-10 pr-24 rounded-2xl left-0 text-white'>
              <h1 className='font-semibold m-0 text-lg italic'>BIG DEAL</h1>
              <p className='w-[300px]'>
                Custom furnishing modeling piece just from $50 – $150 in the rendering package
              </p>
            </div>
            <img src={p6} alt='' />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button name='Chat More' classnamesButton='!p-2 !text-xl' />
      </div>
      <ExteriorRendering />
      <div className='mt-12'>
        <Line />
      </div>
    </div>
  )
}

export default ExteriorService
