import React from 'react'
import { project } from '../Home'
import p5 from 'src/assets/p5.png'

function InteriorRendering() {
  return (
    <div>
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
    </div>
  )
}

export default InteriorRendering
