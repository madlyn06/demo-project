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
        <h1 className='text-center text-[#c1984f] text-2xl mb-3 font-copper font-extrabold'>Contact Us</h1>
        <div className='grid md:grid-cols-5 md:mx-10 flex justify-center'>
          <div className=' mx-2 md:col-span-4 md:relative'>
            <img src={slider} alt='' className='w-full'/>
            <p className=' lg:absolute font-banmethuot mt-8 md:mt-0 text-white font-bold text-4xl md:text-5xl lg:text-7xl top-20 right-0 lg:translate-x-1/2 sm:w-[535px] w-[360px]'>
              Contact us via email or phone
            </p>
            <p className='text-[#c1984f] font-century text-base -rotate-90 absolute right-[-92px] bottom-[-35px] hidden md:block'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
          <div className='lg:col-span-1 lg:mt-6 ml-2'>
            <p className='text-[#c1984f] text-2xl font-century font-extrabold  my-4'>Unix Visual</p>
            <p className='text-white text-base  md:text-lg lg:text-xl lg:mt-48'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
        </div>
        <div className='grid  grid-cols-1 lg:grid-cols-4 mt-10 md:mt-40 gap-8'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className='col-span-1 font-copper relative w-full flex justify-center' key={index}>
                <img src={neb} alt='' className='lg:w-full md:w-1/2 w-2/3  ' />
                <div className=' font-copper absolute text-dark translate-y-1/2 top-1/2  w-full -translate-x-1/2 left-1/2 text-center'>
                  <p className='font-bold text-sm  md:text-2xl lg:text-2xl'>{content.name}</p>
                  <p className='font-bold text-sm md:text-2xl lg:text-xl  mt-4'>{content.position}</p>
                  <p className='text-xs md:text-xl lg:text-xl '>{content.email}</p>
                  <p className='mt-4 text-sm md:text-xl lg:text-xl '>{content.phone}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
