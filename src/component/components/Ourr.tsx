import React from 'react'
import s1 from 'src/assets/s-1.png'
import s2 from 'src/assets/s-2.png'
import s3 from 'src/assets/s-3.png'
import s4 from 'src/assets/s-4.png'
const service = [
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
function Ourr() {
  return (
    <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
      {service.map((item, index) => (
        <div className='col-span-1' key={index}>
          <div>
            <img src={item.image} alt='' />
          </div>
          <div className='text-white text-base text-center mt-4 font-century'>
            <p className='font-bold'>{item.desc1}</p>
            <p className='font-bold'>{item.desc2}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ourr
