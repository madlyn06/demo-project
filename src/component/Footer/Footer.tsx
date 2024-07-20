import React from 'react'

import fb from 'src/assets/fb.png'
import chim from 'src/assets/chim.png'
import iabc from 'src/assets/in.png'
import inta from 'src/assets/inta.png'
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
          className='bg-[#000] py-2 font-copper text-center text-[#c0854f] text-xl mt-10 inline-block px-12'
        >
          TELL US: WHAT DO YOU NEED?
        </div>
      </div>
      <div className='bg-black pb-16 pt-5 w-full text-white text-center flex flex-col font-century gap-2'>
        <p>3D RENDERING | UNIXVISUAL</p>
        <p>No.29, 1H Alley, Tran Quang Dieu Street, O Cho Dua Ward, Dong Da District, Hanoi, Vietnam</p>
        <p>Whatsapp: +84 96 345 5103 | Email: Johan@unixvisual.com</p>
        <p className='my-4'>Architectural 3D Rendering | Interior 3D Rendering | Furniture 3D Modeling</p>
        <div>
          <div>
            <p className='text-3xl text-[#c0854f] font-bold cursor-pointer font-copper'>Unix</p>
          </div>
          <div className='flex items-center justify-center'>
            <div
              style={{
                clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
              }}
              className='bg-[#353735] font-copper font-bold text-center text-white text-xl inline-block px-16 py-1'
            >
              Mail
            </div>
            {logo.map((item, index) => (
              <div
                key={index}
                style={{
                  clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                  backgroundColor: `${item.color}`
                }}
                className={`bg-[${item.color}] text-center text-white text-xl inline-block px-16 py-1`}
              >
                <img src={item.name} alt='' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
