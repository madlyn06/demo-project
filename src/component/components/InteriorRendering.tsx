import React from 'react'
import { project } from '../Home'
import p5 from 'src/assets/p5.png'
import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
const project_interior = [
  {
    image: p1,
    desc: "Living' DAT"
  },
  {
    image: p2,
    desc: "Living' SON"
  },
  {
    image: p3,
    desc: "Living' MINH"
  },
  {
    image: p4,
    desc: "Living' THAO"
  }
]
function InteriorRendering({ data = project_interior }: any) {
  return (
    <div>
      <div className='flex mt-4 text-white gap-2 md:text-2xl text-lg font-copper font-extrabold'>
        <p>Interior Rendering</p>
        <p className='text-[#c0854f]'>Project</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-8'>
        {data.map((item: any, index: any) => (
          <div className='col-span-1' key={index}>
            <div>
              <img src={p5} alt='' />
            </div>
            <div className='text-white text-sm sm:text-base lg:text-lg  text-center mt-4'>
              <p className='font-copper font-extrabold'>{item.desc}</p>
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
