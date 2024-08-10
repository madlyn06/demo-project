import React from 'react'
import { Link } from 'react-router-dom'
import s1 from 'src/assets/s-1.png'
import s2 from 'src/assets/s-2.png'
import s3 from 'src/assets/s-3.png'
import s4 from 'src/assets/s-4.png'
const service = [
  {
    image: s1,
    desc1: 'INTERIOR',
    desc2: 'RENDERING',
    route: 'interior-rendering'
  },
  {
    image: s2,
    desc1: 'EXTERIOR',
    desc2: 'RENDERING',
    route: 'exterior-rendering'
  },
  {
    image: s3,
    desc1: 'FURNITURE',
    desc2: 'MODELING',
    route: 'furniture-modeling'
  },
  {
    image: s4,
    desc1: '2D',
    desc2: 'PHOTOSHOP',
    route: '2d'
  }
]
function Ourr({ data = service }: any) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-8 pl-5 lg:mt-8 md:mt-6 mt-2'>
      {data.map((item: any, index: any) => {
        return (
          <Link to={item.route} className='col-span-1' key={index}>
            <div>
              <img src={item.image} alt='' />
            </div>
            <div className='text-white md:text-base text-xs text-center mt-2 md:mt-4 font-century'>
              <p className='font-bold'>{item.desc1}</p>
              <p className='font-bold'>{item.desc2}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Ourr
