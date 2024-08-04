/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Search } from 'src/svg/icon'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
export default function Header() {
  return (
    <div className='px-4 md:px-6 lg:px-10 lg:max-w-7xl mx-auto'>
      <div className='pl-2 md:pl-4 lg:pl-10 flex justify-between items-center bg-[#232522] pr-4 md:pr-10 lg:pr-20'>
        <div>
          <Link to={'/'}>
            <p className='text-2xl md:text-3xl  text-[#c0854f] font-bold font-copper cursor-pointer'>Unix</p>
          </Link>
        </div>
        <ul className='flex gap-2 pl-4 sm:pl-0 md:gap-6 lg:gap-10 text-white sm:text-sm md:text-base text-[9px]  lg:text-lg font-copper font-semibold'>
          <Link to={'/about-us'} className='uppercase cursor-pointer'>
            about us
          </Link>
          <Link to={'/project'} className='uppercase cursor-pointer'>
            <a id='clickable_project'>project</a>
            <Tooltip
              anchorSelect='#clickable_project'
              // style={{ backgroundColor: '#000', opacity: '0.5 !important' }}
              clickable
              className='z-50 relative bg-[#000]/10'
            >
              <div className='z-50 relative shadow-2xl'>
                <ul className='text-[#fff] flex flex-col'>
                  <Link
                    to={'/project/interior-rendering'}
                    className='hover:bg-white/50 px-4 hover:shadow-2xl  rounded-md hover:text-white'
                  >
                    Interior Rendering
                  </Link>
                  <Link
                    to={'/project/furniture-modeling'}
                    className='hover:bg-white/50 px-4 rounded-md hover:text-white'
                  >
                    Furniture Modeling
                  </Link>
                  <Link
                    to={'/project/exterior-rendering'}
                    className='hover:bg-white/50 px-4 rounded-md hover:text-white'
                  >
                    Exterior Rendering
                  </Link>
                  <Link to={'/project/2d'} className='hover:bg-white/50 px-4 rounded-md hover:text-white'>
                    2D
                  </Link>
                </ul>
              </div>
            </Tooltip>
          </Link>
          <Link to={'/services'} className='uppercase cursor-pointer'>
            <a id='clickable'>services</a>
            <Tooltip anchorSelect='#clickable' clickable className='z-50 relative bg-[#000]/10'>
              <div className='z-50 relative'>
                <ul className='text-[#fff] flex flex-col'>
                  <Link
                    to={'/services/interior-rendering'}
                    className='hover:bg-white/50 px-4  rounded-md hover:text-white'
                  >
                    Interior Rendering
                  </Link>
                  <Link
                    to={'/services/furniture-modeling'}
                    className='hover:bg-white/50 px-4  rounded-md hover:text-white'
                  >
                    Furniture Modeling
                  </Link>
                  <Link
                    to={'/services/exterior-rendering'}
                    className='hover:bg-white/50 px-4  rounded-md hover:text-white'
                  >
                    Exterior Rendering
                  </Link>
                  <Link to={'/services/2d'} className='hover:bg-white/50 px-4  rounded-md hover:text-white'>
                    2D
                  </Link>
                </ul>
              </div>
            </Tooltip>
          </Link>
          <Link to={'/contact-us'} className='uppercase cursor-pointer'>
            contact us
          </Link>
        </ul>
      </div>
    </div>
  )
}
