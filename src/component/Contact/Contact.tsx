import React from 'react'
import slider from '../../assets/contact/background.png'
import neb from '../../assets/contact/NEB.png'
export const content = {
  name: 'NEB TRAN',
  position: 'CEO AND FOUNDER',
  email: 'Neb@Unixvisual.com',
  phone: '+84 78 566 2222'
}

function Contact() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center text-[#c1984f] text-2xl font-bold mb-3'>Contact Us</h1>
        <div className='grid grid-cols-5'>
          <div className='col-span-4 relative'>
            <img src={slider} alt='' />
            <p className='absolute text-white font-bold text-7xl top-20 right-0 translate-x-1/2 w-[535px]'>
              Contact us via email or phone
            </p>
            <p className='text-[#c1984f] text-base -rotate-90 absolute right-[-92px] bottom-[-35px]'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
          <div className='col-span-1  mt-6 ml-2'>
            <p className='text-[#c1984f] text-2xl'>Unix Visual</p>
            <p className='text-white text-lg mt-48'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-4 mt-40 gap-8'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className='col-span-1 relative w-full' key={index}>
                <img src={neb} alt='' className='w-full' />
                <div className='absolute text-dark top-[305px] w-full -translate-x-1/2 left-1/2 text-center'>
                  <p className='font-bold text-2xl'>{content.name}</p>
                  <p className='font-bold text-xl mt-4'>{content.position}</p>
                  <p className='text-2xl'>{content.email}</p>
                  <p className='mt-4 text-lg'>{content.phone}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
