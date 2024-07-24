import React from 'react'
import { project } from '../Home'
import p6 from 'src/assets/p6.png'

function ExteriorRendering() {
  return (
    <div>
      <div className='flex mt-4 text-white gap-2 text-lg md:text-2xl font-copper font-extrabold'>
        <p>Exterior Rendering</p>
        <p className='text-[#c0854f]'>Project</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-8'>
        {project.map((item, index) => (
          <div className='col-span-1' key={index}>
            <div>
              <img src={p6} alt='' />
            </div>
            <div className='text-white text-sm sm:text-base lg:text-lg  text-center mt-4'>
              <p className='font-copper font-black'>{"Exx' DAT"}</p>
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
  )
}

export default ExteriorRendering
