import home from '../../public/home-image.png'
import s1 from '../assets/s-1.png'
import s2 from '../assets/s-2.png'
import s3 from '../assets/s-3.png'
import s4 from '../assets/s-4.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import foter from '../assets/foter.png'

const service = [
  {
    image: s1,
    desc1: 'INTERIOR',
    desc2: 'RENDERING'
  },
  {
    image: s2,
    desc1: 'EXTERIOR',
    desc2: 'RENDERING'
  },
  {
    image: s3,
    desc1: 'FURNITURE',
    desc2: 'MODELING'
  },
  {
    image: s4,
    desc1: '2D',
    desc2: 'PHOTOSHOP'
  }
]
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

export const Home = () => {
  return (
    <div className='max-w-7xl w-full mx-auto'>
      <div className='pt-20 px-10'>
        <div className='grid grid-cols-10'>
          <div className='col-span-4'>
            <div className='flex gap-8 lg:text-8xl text-white/20 font-black items-start'>
              <p>0</p>
              <p>1</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-white text-xl'>RENDER</p>
              <p className='text-white text-8xl tracking-wider font-semibold'>Interior</p>
              <div className='flex flex-col w-1/2 text-white font-normal text-2xl'>
                <p>Do you want to know how your Living room or your new interior will look?</p>
                <p>We can create a beatiful Interior Render based on your floor plan</p>
              </div>
            </div>
            <div>
              <button type='submit' className='text-white bg-[#c0854f] px-16 mt-8 py-3 rounded-[80px] text-2xl'>
                More
              </button>
            </div>
          </div>
          <div className='col-span-6'>
            <img src={home} alt='' />
          </div>
        </div>
        <div>
          <h3 className='flex gap-2 text-3xl text-center justify-center text-white'>
            Our <h3 className='text-[#c0854f]'>Services and Workflow</h3>
          </h3>
          <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
            {service.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={item.image} alt='' />
                </div>
                <div className='text-white text-base text-center mt-4'>
                  <p>{item.desc1}</p>
                  <p>{item.desc2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='flex gap-2 text-3xl text-center justify-center text-white'>
            Our <h3 className='text-[#c0854f]'>Project</h3>
          </h3>
          <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
            {project.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={item.image} alt='' />
                </div>
                <div className='text-white text-base text-center mt-4'>
                  <p>{item.desc}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                    <p>{"Client's Website:"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
            {project.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={p5} alt='' />
                </div>
                <div className='text-white text-base text-center mt-4'>
                  <p>{item.desc}</p>
                  <div className='text-start'>
                    <p>Client:</p>
                    <p>Addrest</p>
                    <p>{"Client's Website:"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
            {project.map((item, index) => (
              <div className='col-span-1' key={index}>
                <div>
                  <img src={p6} alt='' />
                </div>
                <div className='text-white text-base text-center mt-4'>
                  <p>{"Exx' DAT"}</p>
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
        <div className='mt-10'>
          <img src={foter} alt='' />
          <div className='text-white text-base text-start mt-4'>
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
