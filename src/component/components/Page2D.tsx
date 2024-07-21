import React from 'react'
import foter from 'src/assets/foter.png'
const data_2d = [
  {
    name: 'Living’ MINH'
  },
  {
    name: 'Living’ MINH'
  }
]
function Page2D({ data = data_2d }: any) {
  return (
    <div>
      <div className='flex mt-4 text-white gap-2 text-2xl font-copper font-extrabold'>
        <p>2D PhotoShop</p>
        <p className='text-[#c0854f]'>Project</p>
      </div>
      <div className='grid grid-cols-2 gap-x-12 gap-y-4 pl-8'>
        {data.map((_: any, index: any) => (
          <div key={index}>
            <img src={foter} alt='' />
            <div className='text-white text-base text-start mt-4'>
              <p className='mb-2 font-copper font-extrabold'>{_.name}</p>
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
