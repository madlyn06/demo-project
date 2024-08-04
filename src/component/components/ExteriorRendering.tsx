import React from 'react'
import { project } from '../Home'
import p6 from 'src/assets/p6.png'
import { REACT_APP_BASE_URL } from 'src/ultils/api'
import { Link } from 'react-router-dom'

function ExteriorRendering({ data }: any) {
  return (
    <div>
      <div className='flex mt-4 text-white gap-2 text-lg md:text-2xl font-copper font-extrabold'>
        <p>Exterior Rendering</p>
        <p className='text-[#c0854f]'>Project</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-8'>
        {data?.map((item: any, index: number) => (
          <Link to='/project/exterior-rendering' key={index}>
            <div className='col-span-1' key={index}>
              <div>
                <img
                  style={{ width: '100%', height: '100%' }}
                  className='w-100 h-100'
                  src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`}
                  alt=''
                />
              </div>
              <div className='text-white text-xs md:text-base text-center mt-4'>
                <p className=''>{item?.title}</p>
                <div className='text-start'>
                  <p>Client: {item?.client}</p>
                  <p>Addrest: {item?.address}</p>
                  <p>Client's Website: {item?.clientWebsite}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExteriorRendering
