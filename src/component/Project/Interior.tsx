import React from 'react'
import p5 from 'src/assets/p5.png'
import { project } from '../Home'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
import Line from '../components/Line'
const data = [
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  }
]
const project_interior = [
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
  },
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
  },
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
  },
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
function Interior() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-2 mt-8'>
        <div className='grid md:grid-cols-5'>
          <div className='col-span-1 mb-6 lg:mb-0 text-white lg:mt-24 mr-6 md:mr-0'>
            <h1 className='lg:text-3xl md:text-2xl text-xl  tracking-widest font-banmethuot font-black'>
              Interior Rendering
            </h1>
            <p className='text-sm lg:text-base mt-2 md:pr-10 tracking-wide '>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
          <div className='col-span-4  '>
            <div className='text-white text-lg font-semibold font-copper'>Living’ Dat</div>
            <img src={p5} alt='' className='w-full' />
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-base md:text-lg'>
          <div className='col-span-1 '>
            <p>Design by:</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Addrest:</p>
            <p className='flex-1 text-center'>Space:</p>
          </div>
        </div>
        <InteriorRendering data={project_interior} />
        <div className='mt-12'>
          <Line />
        </div>
        <FurnitureModeling />
        <div className='mt-12'>
          <Line />
        </div>
        <ExteriorRendering />
        <div className='mt-12'>
          <Line />
        </div>
        <Page2D data={data} />
      </div>
    </div>
  )
}

export default Interior
