import React from 'react'
import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import coin from 'src/assets/project/coin.png'
import calendar from 'src/assets/project/calender.png'
import p6 from 'src/assets/p6.png'

import star from 'src/assets/project/star.png'
import { project } from '../Home'
import p5 from 'src/assets/p5.png'
import { service } from '../Service/Services'
import foter from 'src/assets/foter.png'

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
function Project() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='flex justify-center text-white gap-2 text-2xl'>
          <p>Our</p>
          <p className='text-[#c0854f]'>Project</p>
        </div>
        <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
          {service.map((item, index) => (
            <div className='col-span-1 relative' key={index}>
              <div>
                <img src={item.image} alt='' />
              </div>
              <div className='text-white text-base text-center mt-4'>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
              </div>
              {/* <div className='absolute w-full flex justify-center bottom-[70px]'>
                <button type='submit' className='text-white bg-[#c0854f] px-8 mt-8 py-2 rounded-[80px] text-xl'>
                  More
                </button>
              </div> */}
            </div>
          ))}
        </div>
        <div className='flex mt-4 text-white gap-2 text-2xl'>
          <p>Interior Rendering</p>
          <p className='text-[#c0854f]'>Project</p>
        </div>
        <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
          {project.map((item, index) => (
            <div className='col-span-1' key={index}>
              <div>
                <img src={p5} alt='' />
              </div>
              <div className='text-white text-base text-center mt-4'>
                <p>{item.desc}</p>
                <div className='text-start'>
                  <p>Client:</p>
                  <p>Addrest</p>
                  <p>{"Client's Website:"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex mt-4 text-white gap-2 text-2xl'>
          <p>Furniture Modeling</p>
          <p className='text-[#c0854f]'>Project</p>
        </div>
        <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
          {project.map((item, index) => (
            <div className='col-span-1' key={index}>
              <div>
                <img src={item.image} alt='' />
              </div>
              <div className='text-white text-base text-center mt-4'>
                <p>{item.desc}</p>
                <div className='text-start'>
                  <p>Client:</p>
                  <p>Addrest</p>
                  <p>{"Client's Website:"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex mt-4 text-white gap-2 text-2xl'>
          <p>Exterior Rendering</p>
          <p className='text-[#c0854f]'>Project</p>
        </div>
        <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
          {project.map((item, index) => (
            <div className='col-span-1' key={index}>
              <div>
                <img src={p6} alt='' />
              </div>
              <div className='text-white text-base text-center mt-4'>
                <p>{"Exx' DAT"}</p>
                <div className='text-start'>
                  <p>Client:</p>
                  <p>Addrest</p>
                  <p>{"Client's Website:"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-12'>
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div className='mt-10' key={index}>
                <img src={foter} alt='' />
                <div className='text-white text-base text-start mt-4'>
                  <p className='mb-2'>{'Living’ MINH'}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                    <p>{"Client's Website:"}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Project
