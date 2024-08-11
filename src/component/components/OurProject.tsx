import React from 'react'
import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
const project = [
  {
    image: p1,
    desc: "Living' DAT",
    route: 'interior-rendering'
  },
  {
    image: p2,
    desc: "Living' SON",
    route: 'interior-rendering'
  },
  {
    image: p3,
    desc: "Living' MINH",
    route: 'interior-rendering'
  },
  {
    image: p4,
    desc: "Living' THAO",
    route: 'interior-rendering'
  }
]
function OurProject() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 lg:mt-8 md:mt-4 mt-2'>
      {project.map((item, index) => (
        <div className='col-span-1' key={index}>
          <div>
            <img src={item.image} alt='' />
          </div>
          <div className='text-white text-xs md:text-base text-center mt-2 md:mt-4'>
            <p className='font-copper font-semibold'>{item.desc}</p>
            <div className='text-start'>
              <p>Client:</p>
              <p>Address</p>
              <p>{"Client's Website:"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OurProject
