/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import home2 from 'src/assets/about/home2.png'
import neb from 'src/assets/about/NEB.png'
import { content } from '../Contact/Contact'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BiLogoLinkedinSquare } from 'react-icons/bi'

const item:any =[
  {
    background:'bg-[#3b5996]',
    content:<Link
    className={`text-center text-white md:text-lg text-xs`}
    to='#'
    >
    <FaFacebookF  />
    </Link>
  },
  {
    background:'bg-[#007bbf]',
    content:<Link
    className={`text-center text-white md:text-lg text-xs`}
    to='#'
    >
    <BiLogoLinkedinSquare/>
    </Link>
  },
  {
    background:'bg-[#5daff0]',
    content:<Link
    className={`text-center text-white text-lg text-xs`}
    to='#'
    >
    <FaTwitter  />
    </Link>
  },
  {
    background:'bg-[#714f40]',
    content:<Link
    className={`text-center text-white text-lg text-xs`}
    to='#'
    >
    <FaInstagram />
    </Link>
  }
]
function About() {
  const navigate = useNavigate()
  return (
    <div className='px-10 mx-auto md:max-w-7xl'>
      <div className='mt-8'>
        <div className='md:grid md:grid-cols-5'>
          <div className='md:col-span-4 relative'>
            <p className='md:absolute text-white font-banmethuot font-medium md:text-4xl text-xl lg:text-7xl lg:top-20 md:top-10 lg:right-6 md:right-0 right-0 top-10 w-28 md:translate-x-1/2 lg:w-[535px] md:w-[300px]  w-[300px] mb-4 md:mb-0'>
              WHO WE ARE ABOUT US
            </p>
            <img src={banner} alt='' className='w-full md:h-full' />
            <img
              src={layerbanner}
              className='md:absolute bottom-0 translate-y-1/2 w-1/5 -translate-x-1/2 left-1/2 hidden md:block'
              alt=''
            />
            <div className='md:absolute text-white md:-bottom-12 mt-4 -bottom-8 lg:-bottom-16 md:w-44 lg:w-52 left-2 lg:left-6 md:left-4'>
              <h1 className='font-bold md:text-xl lg:text-2xl text-lg'>SAMPLE”</h1>
              <p className='md:text-sm lg:text-lg text-sm'>
                Do you want to know how your Living room or your new interiors will look? We can create a beautiful
                Interior Render based on your floor plan.
              </p>
              <div className='absolute bg-black/20 h-full w-[700px] top-0 -left-[200%]'></div>
            </div>
            <p className='text-[#c1984f] font-century md:text-sm lg:text-base text-sm -rotate-90 lg:right-[-92px] absolute md:right-[-80px] bottom-[-35px] right-[-78px] hidden md:block'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
          <div className='md:col-span-1 md:mt-4 mt-10 lg:mt-6 md:ml-2'>
            <p className='text-[#c1984f] md:text-sm text-lg lg:text-xl font-extrabold font-century'>SINCE 2019</p>
            <p className='text-white lg:text-xl text-sm   md:text-lg  lg:mt-48 md:mt-24 mt-2'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
        </div>
      </div>
      <div className=' md:mt-32 lg:mt-64 md:mt-24'>
        <div className='grid lg:grid-cols-6'>
          <div className='col-span-4 relative lg:mt-16 mt-8 md:mt-12'>
            <img src={home2} alt='' className='w-full h-full' />
          </div>
          <div className='col-span-2  mt-10 md:ml-4'>
            <p className='text-white font-bold mt-4 md:mt-0 lg:text-3xl md:text-2xl text-xl'>Building dream spaces</p>
            <p className='text-white lg:text-xl   md:text-lg text-sm text-justify md:text-left   lg:mt-6 md:mt-4 mt-2 md:pr-12 md:pr-8 lg:pr-20'>
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
        <div className='grid grid-cols-1 lg:grid-cols-4 mt-8 gap-8'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className='col-span-1 relative w-full flex justify-center' key={index}>
                <img src={neb} alt='' className=' lg:w-full md:w-1/2 w-1/2' />
                <div
                  style={{ top: '63%' }}
                  className='absolute text-dark translate-y-1/2 top-2/3 w-full -translate-x-1/2 left-1/2 text-center'
                >
                  <p className='font-bold text-sm md:text-xl  lg:text-2xl font-copper'>{content.name}</p>
                  <p className='text-xs lg:text-xl md:text-xl  font-century font-extrabold md:mt-2'>{content.position}</p>
                </div>
                <div className='flex justify-center font-extrabold absolute md:bottom-[16px] bottom-[6px] w-full gap-4 '>
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <div className={`${item[index].background} color-white md:w-7 md:h-7 w-4 h-4 rounded-full flex items-center justify-center`} key={index}>
                          {item[index].content}
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='md:mt-16 mt-4'>
        <div className='grid lg:grid-cols-6'>
          <div className='col-span-2 mr-6'>
            <p className='text-[#fff] font-bold lg:text-3xl md:text-2xl text-xl md:pr-32'>
              Let’s plan your next rendering
            </p>
            <p className='text-white lg:text-xl text-justify md:text-left md:text-lg text-sm mt-6 '>
              We know that first impressions matter. Whether you’re a homeowner or a business owner, we can help
              transform the exterior of your property into an eye-catching and inviting space. Our team is experienced
              in working with various materials and techniques to create a durable and visually appealing finish that
              will withstand the elements.
            </p>
          </div>
          <div className='col-span-4 relative mt-4 md:mt-24'>
            <img src={home2} alt='' />
          </div>
        </div>
      </div>
      <div className='md:mt-16 mt-4'>
        <div className='grid lg:grid-cols-6'>
          <div className='col-span-4 relative mt-4 md:mt-24'>
            <img src={home2} alt='' />
          </div>
          <div className='col-span-2 mt-4 md:ml-4'>
            <p className='text-[#fff] font-bold lg:text-3xl md:text-2xl mt-4 md:mt-0 text-xl pr-20'>
              About our company
            </p>
            <p className='text-white  lg:text-xl text-justify md:text-left  md:text-lg text-sm mt-4 md:pr-20'>
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
      <div onClick={() => navigate('/contact-us')} className='md:mt-16 mt-4 flex justify-center cursor-pointer'>
        <div className='bg-[#c0854f] rounded-2xl text-center inline-block px-12 py-2'>
          <h1 className='text-white mb-4 font-medium tracking-widest md:text-2xl text-lg lg:text-3xl font-banmethuot'>
            Let s get in touch!
          </h1>
          <p className='font-extrabold text-sm md:text-base lg:text-lg font-century'>---GO TO CONTACT---</p>
        </div>
      </div>
    </div>
  )
}

export default About
