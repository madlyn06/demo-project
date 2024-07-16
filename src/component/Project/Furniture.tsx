import React from 'react'
import p5 from 'src/assets/p5.png'
import sofa from 'src/assets/project/sofa.png'
import sofamini from 'src/assets/project/sofa-mini.png'
import { project } from '../Home'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
function Furniture() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='grid grid-cols-5'>
          <div className='col-span-1 text-white mt-24 '>
            <h1 className='text-3xl tracking-widest'>Furniture</h1>
            <h1 className='text-3xl tracking-widest'>Modeling</h1>
            <p className='text-base pr-10 tracking-wide'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
          <div className='col-span-4'>
            <div className='text-white text-lg font-semibold'>Living’ Dat</div>
            <div className='flex gap-6 h-[600px]'>
              <div className='flex gap-4 flex-col'>
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className='w-[189px]'>
                      <img className='w-full h-full' src={sofamini} alt='' />
                    </div>
                  ))}
              </div>
              <div>
                <img src={sofa} className='w-full h-full' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-lg'>
          <div className='col-span-1'>
            <p>Client:</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Addrest:</p>
            <p className='flex-1 text-center'>Client’s Website:</p>
          </div>
        </div>
        <FurnitureModeling />
        <InteriorRendering />
        <ExteriorRendering />
        <Page2D />
      </div>
    </div>
  )
}

export default Furniture
