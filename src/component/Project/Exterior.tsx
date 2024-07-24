import React from 'react'
import p5 from 'src/assets/p5.png'
import { project } from '../Home'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
const data = [
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  }
]
function Exterior() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='grid md:grid-cols-5'>
          <div className='col-span-1 text-white lg:mt-24 '>
            <h1 className='lg:text-3xl md:text-2xl text-xl tracking-widest'>Exterior Rendering</h1>
            <p className='text-sm lg:text-base pr-10 tracking-wide'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
          <div className='col-span-4 mt-3 md:mt-0'>
            <div className='text-white  text-base md:text-lg font-semibold  font-copper'>Living’ Dat</div>
            <img src={p5} alt='' className='w-full' />
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-base md:text-lg'>
          <div className='col-span-1'>
            <p>Client:</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Addrest:</p>
            <p className='flex-1 text-center'>Client’s Website:</p>
          </div>
        </div>
        <ExteriorRendering />
        <InteriorRendering />
        <FurnitureModeling />
        <Page2D data={data} />
      </div>
    </div>
  )
}

export default Exterior
