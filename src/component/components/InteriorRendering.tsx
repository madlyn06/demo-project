import React, { useState } from 'react'
import { project } from '../Home'
import p5 from 'src/assets/p5.png'
import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import { Link } from 'react-router-dom'
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
          <Link to='/project/interior-rendering/detail' state={item} key={index}>
            <div className='col-span-1' key={index}>
              <div>
                <img
                  src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.small?.url}`}
                  alt=''
                  className='aspect-video w-full h-full aspect-video'
                />
              </div>
              <div className='text-white text-sm sm:text-base lg:text-lg  text-center mt-4'>
                <p className='font-copper font-extrabold'>{item.title}</p>
                <div className='text-start'>
                  <p>Design by: {item.design}</p>
                  <p>Addrest: {item.address}</p>
                  <p>Space: {item.space}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default InteriorRendering
