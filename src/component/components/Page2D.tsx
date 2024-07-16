import React from 'react'
import foter from 'src/assets/foter.png'

function Page2D() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-12'>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div className='mt-10' key={index}>
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
          ))}
      </div>
    </div>
  )
}

export default Page2D
