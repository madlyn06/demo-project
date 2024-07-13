import React from 'react'
import { Search } from 'src/svg/icon'
import { Button, Tooltip } from 'flowbite-react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='px-10 max-w-7xl w-full mx-auto'>
      <div className='pl-10 lg:flex justify-between hidden items-center bg-[#000]/20 pr-20'>
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
            project
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
      <div className='pl-10 lg:hidden justify-between flex items-center bg-[#000]/20 '>
        <div>
          <p className='text-3xl text-[#c0854f] font-bold cursor-pointer'>Unix</p>
        </div>
        <div>
          <Tooltip
            content={
              <ul className=' gap-10 text-white text-lg'>
                <li className='uppercase cursor-pointer'>about us</li>
                <li className='uppercase cursor-pointer'>project</li>
                <li className='uppercase cursor-pointer'>services</li>
                <li className='uppercase cursor-pointer'>contact us</li>
                <li className='uppercase cursor-pointer'>
                  <Search />
                </li>
              </ul>
            }
            trigger='click'
          >
            <Button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='h-6 w-6 text-white'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
