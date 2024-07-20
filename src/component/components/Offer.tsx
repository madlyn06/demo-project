import React from 'react'
import coin from 'src/assets/project/coin.png'
import calendar from 'src/assets/project/calender.png'
import star from 'src/assets/project/star.png'
const offer = [
  {
    img: coin,
    title: 'Reasonable Price '
  },
  {
    img: calendar,
    title: 'Quick Turnaround Timet'
  },
  {
    img: star,
    title: 'Realistic Quality'
  }
]
function Offer() {
  return (
    <div className='mt-64 text-white text-center'>
      <h1 className='text-xl font-banmethuot'>What we can offer you</h1>
      <p className='font-century'>
        Additional view in a room at just only $30 to showcase meticulously every detail in your space
      </p>
      <div className='text-white flex justify-between items-center mt-16'>
        {offer.map((item, index) => (
          <div key={index} className='flex flex-col items-center gap-4'>
            <img src={item.img} className='w-16 h-16 object-contain' alt='' />
            <h1 className='text-center font-century'>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offer
