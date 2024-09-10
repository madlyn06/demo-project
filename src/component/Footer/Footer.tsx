import React from 'react'

import fb from 'src/assets/fb.png'
import chim from 'src/assets/chim.png'
import iabc from 'src/assets/in.png'
import inta from 'src/assets/inta.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const logo = [
  {
    color: '#3b5999',
    name: fb
  },
  {
    color: '#55acf0',
    name: chim
  },
  {
    color: '#007ab9',
    name: iabc
  },
  {
    color: '#6a453c',
    name: inta
  }
]
export default function Footer() {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div
          style={{
            clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'
          }}
          className='bg-[#000] py-2 font-copper text-center text-[#c0854f] text-sm md:text-xl mt-10 inline-block px-12'
        >
          TELL US: WHAT DO YOU NEED?
        </div>
      </div>
      <div className='bg-black pb-16 pt-5 px-4 lg:px-0 text-xs md:text-lg w-full text-white text-center flex flex-col font-century gap-2'>
        <p>3D RENDERING | UNIXVISUAL</p>
        <p>No.29, 1H Alley, Tran Quang Dieu Street, O Cho Dua Ward, Dong Da District, Hanoi, Vietnam</p>
        <p>Whatsapp: +84 96 345 5103 | Email: Johan@unixvisual.com</p>
        <p>Whatsapp: +84 35 921 9631 | Email: Emily@unixvisuals.com</p>
        <p className='my-4'>Architectural 3D Rendering | Interior 3D Rendering | Furniture 3D Modeling</p>
        <div>
          <div>
            <p className='md:text-3xl text-2xl  text-[#c0854f] font-bold cursor-pointer font-copper'>Unix</p>
          </div>
          <div className='flex items-center mt-2 justify-center'>
            <div
              style={{
                transform: 'skew(-40deg)'
              }}
              className={`bg-[#323432] mr-2 text-center text-white text-xl inline-block px-4 md:px-8 md:py-1`}
            >
              <p className='text-sm' style={{ transform: 'skew(40deg)' }}>
                Mail
              </p>
            </div>
            <Link
              to='https://www.facebook.com/Unixvisual'
              style={{
                transform: 'skew(-40deg)'
              }}
              className={`bg-[#3b5996] text-center text-white text-xl inline-block px-4 md:px-8 md:py-1`}
            >
              <FaFacebookF style={{ transform: 'skew(40deg)' }} />
            </Link>
            <div
              style={{
                transform: 'skew(-40deg)'
              }}
              className={`bg-[#5daff0] text-center text-white text-xl inline-block px-4 md:px-8 md:py-1`}
            >
              <FaTwitter style={{ transform: 'skew(40deg)' }} />
            </div>
            <Link
              to='https://www.linkedin.com/in/alex-nguyen-025234293'
              style={{
                transform: 'skew(-40deg)'
              }}
              className={`bg-[#007bbf] text-center text-white text-xl inline-block px-4 md:px-8 md:py-1`}
            >
              <BiLogoLinkedinSquare style={{ transform: 'skew(40deg)' }} />
            </Link>
            <Link
              to='https://www.instagram.com/johan.unixvisual'
              style={{
                transform: 'skew(-40deg)'
              }}
              className={`bg-[#714f40] text-center text-white text-xl inline-block px-4 md:px-8 md:py-1`}
            >
              <FaInstagram style={{ transform: 'skew(40deg)' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
