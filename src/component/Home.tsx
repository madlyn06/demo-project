import home from '../../public/home-image.png'

import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
import p5 from 'src/assets/p5.png'
import p6 from 'src/assets/p6.png'
import foter from 'src/assets/foter.png'
import Ourr from './components/Ourr'
import Button from './components/Button'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
export const project = [
  {
    image: p1,
    desc: "Living' DAT"
  },
  {
    image: p2,
    desc: "Living' SON"
  },
  {
    image: p3,
    desc: "Living' MINH"
  },
  {
    image: p4,
    desc: "Living' THAO"
  }
]
const images = [
  'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
]
import './home.css'
const buttonStyle = {
  width: '30px',
  background: 'none',
  border: '0px'
}

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
      </svg>
    </button>
  )
}

export const Home = () => {
  const indicators = (index: any) => <div className='indicator h-1 w-1 rounded-full'></div>

  return (
    <div className='max-w-7xl w-full mx-auto'>
      <div className='lg:pt-20 md:pt-10 pt-4 lg:px-10 px-4 md:px-6'>
        <div className='grid grid-cols-10'>
          <div className='col-span-4'>
            <div className='flex gap-4 md:gap-6 lg:gap-8 text-4xl md:text-6xl lg:text-8xl text-white/20 font-black items-start'>
              <p className='font-bauhaus'>0</p>
              <p className='font-bauhaus'>1</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-white md:text-base text-sm lg:text-xl font-century'>RENDER</p>
              <p
                style={{ fontFamily: 'banmethuot' }}
                className=' text-white lg:text-8xl tracking-wider font-semibold text-2xl md:text-6xl '
              >
                Interior
              </p>
              <div className='flex flex-col md:pr-32 pr-10 lg:pr-44 text-white md:text-base text-xs font-normal lg:text-2xl'>
                <p>Do you want to know how your Living room or your new interior will look?</p>
                <p>We can create a beatiful Interior Render based on your floor plan.</p>
              </div>
            </div>
            <Button name='More' classnamesButton='py-2 px-4 text-sm md:text-base mt-3 md:mt-5 lg:mt-8 lg:text-xl' />
          </div>
          <div className='col-span-6'>
            <Slide {...properties} easing='ease' infinite={false} transitionDuration={500} indicators={true}>
              {images.map((image, index) => (
                <div className='each-slide-effect' key={index}>
                  <div style={{ backgroundImage: `url(${home})` }}></div>
                </div>
              ))}
            </Slide>
            {/* <img src={home} alt='' /> */}
          </div>
        </div>
        <div>
          <h3 className='flex gap-2 text-xl md:text-2xl lg:text-3xl text-center justify-center text-white'>
            Our <h3 className='text-[#c0854f]'>Services and Workflow</h3>
          </h3>
          <Ourr />
        </div>
        <div className='lg:mt-8 md:mt-6 mt-4'>
          <h3 className='flex gap-2 md:text-2xl text-xl lg:text-3xl text-center justify-center text-white'>
            Our <h3 className='text-[#c0854f]'>Project</h3>
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 lg:mt-8 md:mt-4 mt-2'>
            {project.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={item.image} alt='' />
                </div>
                <div className='text-white text-xs md:text-base text-center mt-2 md:mt-4'>
                  <p className='font-copper font-semibold'>{item.desc}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                    <p>{"Client's Website:"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-4 md:mt-8'>
            {project.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={p5} alt='' />
                </div>
                <div className='text-white text-xs md:text-base text-center mt-4'>
                  <p className='font-copper font-bold'>{item.desc}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                    <p>{"Client's Website:"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-4 md:mt-8'>
            {project.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={p6} alt='' />
                </div>
                <div className='text-white text-xs md:text-base text-center mt-4'>
                  <p className=''>{"Exx' DAT"}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                    <p>{"Client's Website:"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:mt-10 md:mt-8 mt-4 ml-5'>
          <img src={foter} alt='' />
          <div className='text-white text-xs md:text-base text-start mt-2 md:mt-4'>
            <p className='mb-2'>{'Living’ MINH'}</p>
            <div className='text-start'>
              <p>Client:</p>
              <p>Addrest</p>
              <p>{"Client's Website:"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
