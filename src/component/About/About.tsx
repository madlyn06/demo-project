import React from 'react'
import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import home2 from 'src/assets/about/home2.png'
import neb from 'src/assets/about/NEB.png'
import { content } from '../Contact/Contact'
function About() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='grid grid-cols-5'>
          <div className='col-span-4 relative'>
            <img src={banner} alt='' />
            <p className='absolute text-white font-medium text-7xl top-20 right-6 translate-x-1/2 w-[535px]'>
              WHO WE ARE ABOUT US
            </p>
            <img
              src={layerbanner}
              className='absolute bottom-0 translate-y-1/2 max-w-[250px] -translate-x-1/2 left-1/2'
              alt=''
            />
            <div className='absolute text-white -bottom-16 w-52 left-6'>
              <h1 className='font-bold text-2xl'>SAMPLE”</h1>
              <p className='text-lg'>
                Do you want to know how your Living room or your new interiors will look? We can create a beautiful
                Interior Render based on your floor plan.
              </p>
            </div>
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
      </div>
      <div className='mt-64'>
        <div className='grid grid-cols-6'>
          <div className='col-span-4 relative mt-16'>
            <img src={home2} alt='' />
          </div>
          <div className='col-span-2 ml-4'>
            <p className='text-white text-2xl'>Building dream spaces</p>
            <p className='text-white text-lg mt-6 pr-20'>
              When it comes to interior rendering, we understand the importance of creating a space that reflects your
              personal style and meets your functional needs. Whether you’re looking to update a single room or renovate
              an entire home or office, our skilled team will work closely with you to bring your vision to life. From
              selecting the right colors and textures to ensuring smooth and flawless finishes, we take pride in
              delivering outstanding results.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <h1 className='text-white text-center text-2xl'>Meet the team</h1>
        <div className='grid grid-cols-4 mt-40 gap-8'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className='col-span-1 relative w-full' key={index}>
                <img src={neb} alt='' className='w-full' />
                <div className='absolute text-dark top-[305px] w-full -translate-x-1/2 left-1/2 text-center'>
                  <p className='font-bold text-2xl'>{content.name}</p>
                  <p className='font-bold text-xl mt-2'>{content.position}</p>
                </div>
                <div className='flex justify-center absolute bottom-[10px] w-full gap-4'>
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <div className=' bg-white w-6 h-6 rounded-full' key={index}></div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='mt-16'>
        <div className='grid grid-cols-6'>
          <div className='col-span-2 mr-6'>
            <p className='text-[#fff] font-bold text-3xl pr-32'>Let’s plan your next rendering</p>
            <p className='text-white text-lg mt-6 '>
              We know that first impressions matter. Whether you’re a homeowner or a business owner, we can help
              transform the exterior of your property into an eye-catching and inviting space. Our team is experienced
              in working with various materials and techniques to create a durable and visually appealing finish that
              will withstand the elements.
            </p>
          </div>
          <div className='col-span-4 relative mt-24'>
            <img src={home2} alt='' />
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div className='grid grid-cols-6'>
          <div className='col-span-4 relative mt-24'>
            <img src={home2} alt='' />
          </div>
          <div className='col-span-2 ml-4'>
            <p className='text-[#fff] font-bold text-3xl pr-32'>About our company</p>
            <p className='text-white text-lg mt-4 pr-20'>
              We are a professional team specializing in rendering services for both interior and exterior spaces. With
              our expertise and attention to detail, we aim to provide the highest quality finishes that will enhance
              the beauty and durability of your property. At our company, we prioritize customer satisfaction and strive
              to exceed your expectations. We are committed to delivering exceptional craftsmanship, timely project
              completion, and competitive pricing. Contact us today to discuss your rendering needs and let us help you
              transform your space into something extraordinary.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-16 flex justify-center cursor-pointer'>
        <div className='bg-[#c0854f] rounded-2xl text-center inline-block px-12 py-2'>
          <h1 className='text-white mb-4 font-medium tracking-widest text-3xl'>Let s get in touch!</h1>
          <p className='font-semibold text-lg'>---GO TO CONTACT---</p>
        </div>
      </div>
    </div>
  )
}

export default About
