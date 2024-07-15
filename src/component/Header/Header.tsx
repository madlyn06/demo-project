/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Search } from 'src/svg/icon'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
export default function Header() {
  return (
    <div className='px-10 max-w-7xl w-full mx-auto'>
      <div className='pl-10 flex justify-between items-center bg-[#000]/20 pr-20'>
        <div>
          <Link to={'/'}>
            <p className='text-3xl text-[#c0854f] font-bold cursor-pointer'>Unix</p>
          </Link>
        </div>
        <ul className='flex gap-10 text-white text-lg'>
          <Link to={'/about-us'} className='uppercase cursor-pointer'>
            about us
          </Link>
          <Link to={'/project'} className='uppercase cursor-pointer'>
            <a id='clickable'>project</a>
            <Tooltip anchorSelect='#clickable' clickable className='z-50 relative'>
              <div className='bg-white px-6 py-2 z-50 relative'>
                <ul className='text-[#000] flex flex-col'>
                  <Link to={'/project/interior-rendering'} className='hover:bg-black/50 hover:text-white'>
                    Interior Rendering
                  </Link>
                  <Link to={'/project/furniture-modeling'} className='hover:bg-black/50 hover:text-white'>
                    Furniture Modeling
                  </Link>
                  <Link to={'/project/exterior-rendering'} className='hover:bg-black/50 hover:text-white'>
                    Exterior Rendering
                  </Link>
                  <Link to={'/project/2d'} className='hover:bg-black/50 hover:text-white'>
                    2D
                  </Link>
                </ul>
              </div>
            </Tooltip>
          </Link>
          <Link to={'/services'} className='uppercase cursor-pointer'>
            services
          </Link>
          <Link to={'/contact-us'} className='uppercase cursor-pointer'>
            contact us
          </Link>
          <Link to={'/'} className='uppercase cursor-pointer'>
            <Search />
          </Link>
        </ul>
      </div>
    </div>
  )
}
