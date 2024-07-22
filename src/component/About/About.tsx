import React from 'react'
import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import home2 from 'src/assets/about/home2.png'
import neb from 'src/assets/about/NEB.png'
import { content } from '../Contact/Contact'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
function About() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='grid grid-cols-5'>
          <div className='col-span-4 relative'>
            <img src={banner} alt='' className='w-full h-full' />
            <p className='absolute text-white font-banmethuot font-medium md:text-4xl text-base lg:text-7xl lg:top-20 md:top-10 lg:right-6 md:right-0 right-0 top-10 w-28 translate-x-1/2 lg:w-[535px] md:w-[300px]'>
              WHO WE ARE ABOUT US
            </p>
            <img
              src={layerbanner}
              className='absolute bottom-0 translate-y-1/2 w-1/5 -translate-x-1/2 left-1/2'
              alt=''
            />
            <div className='absolute text-white md:-bottom-12 -bottom-8 lg:-bottom-16 md:w-44 w-32 lg:w-52 left-2 lg:left-6 md:left-4'>
              <h1 className='font-bold md:text-xl lg:text-2xl text-sm'>SAMPLE”</h1>
              <p className='md:text-sm lg:text-lg text-[8px]'>
                Do you want to know how your Living room or your new interiors will look? We can create a beautiful
                Interior Render based on your floor plan.
              </p>
            </div>
            <p className='text-[#c1984f] font-century md:text-sm lg:text-base text-sm -rotate-90 lg:right-[-92px] absolute md:right-[-80px] bottom-[-35px] right-[-78px]'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
          <div className='col-span-1 md:mt-4 mt-2 lg:mt-6 ml-2'>
            <p className='text-[#c1984f] md:text-sm text-xs lg:text-xl font-extrabold font-century'>SINCE 2019</p>
            <p className='text-white md:text-sm text-[8px] lg:text-lg lg:mt-48 md:mt-24 mt-20'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
        </div>
      </div>
      <div className=' md:mt-32 lg:mt-64 mt-24'>
        <div className='grid grid-cols-6'>
          <div className='col-span-4 relative lg:mt-16 mt-8 md:mt-12'>
            <img src={home2} alt='' className='w-full h-full' />
          </div>
          <div className='col-span-2 ml-4'>
            <p className='text-white font-bold lg:text-2xl md:text-xl text-sm'>Building dream spaces</p>
            <p className='text-white lg:text-lg md:text-base text-xs lg:mt-6 md:mt-4 mt-2 md:pr-12 pr-8 lg:pr-20'>
              When it comes to interior rendering, we understand the importance of creating a space that reflects your
              personal style and meets your functional needs. Whether you’re looking to update a single room or renovate
              an entire home or office, our skilled team will work closely with you to bring your vision to life. From
              selecting the right colors and textures to ensuring smooth and flawless finishes, we take pride in
              delivering outstanding results.
            </p>
          </div>
        </div>
      </div>
      <div className='lg:mt-20 md:mt-12 mt-8'>
        <h1 className='text-white text-center lg:text-3xl md:text-x2 text-lg font-banmethuot'>Meet the team</h1>
        <div className='grid grid-cols-4 mt-8 gap-8'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className='col-span-1 relative w-full' key={index}>
                <img src={neb} alt='' className='w-full' />
                <div className='absolute text-dark top-[305px] w-full -translate-x-1/2 left-1/2 text-center'>
                  <p className='font-bold text-2xl font-copper'>{content.name}</p>
                  <p className='text-xl font-century font-extrabold mt-2'>{content.position}</p>
                </div>
                <div className='flex justify-center font-extrabold absolute bottom-[10px] w-full gap-4'>
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
            <p className='text-[#fff] font-bold text-3xl pr-20'>About our company</p>
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
          <h1 className='text-white mb-4 font-medium tracking-widest text-3xl font-banmethuot'>Let s get in touch!</h1>
          <p className='font-extrabold text-lg font-century'>---GO TO CONTACT---</p>
        </div>
      </div>
    </div>
  )
}

export default About
