import React from 'react'
import s1 from 'src/assets/s-1.png'
import s2 from 'src/assets/s-2.png'
import s3 from 'src/assets/s-3.png'
import s4 from 'src/assets/s-4.png'
import p6 from 'src/assets/p6.png'
import p5 from 'src/assets/p5.png'
import { project } from '../Home'
import foter from 'src/assets/foter.png'
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
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='flex justify-center text-white gap-2 text-2xl'>
          <p>Our</p>
          <p className='text-[#c0854f]'>Services</p>
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
              <div className='absolute w-full flex justify-center bottom-[70px]'>
                <button type='submit' className='text-white bg-[#c0854f] px-8 mt-8 py-2 rounded-[80px] text-xl'>
                  More
                </button>
              </div>
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

export default Services
