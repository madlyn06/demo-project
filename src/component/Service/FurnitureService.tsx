import banner from 'src/assets/about/banner.png'
import layerbanner from 'src/assets/about/layer-banner.png'
import FurnitureModeling from '../components/FurnitureModeling'
import Offer from '../components/Offer'
import Line from '../components/Line'
import p1 from 'src/assets/service/model/1.png'
import p2 from 'src/assets/service/model/2.png'
import p3 from 'src/assets/service/model/3.png'
import p4 from 'src/assets/service/model/4.png'
const project = [
  {
    image: p1,
    heading: 'Low Complexity',
    rate: 'Hourly Rate: $12/hour',
    estimate: 'Estimated working hours: 2-4 hours'
  },
  {
    image: p2,
    heading: 'Medium Complexity',
    rate: 'Hourly Rate: $12/hour',
    estimate: 'Estimated working hours: 5-8 hours'
  },
  {
    image: p3,
    heading: 'High Complexity',
    rate: 'Hourly Rate: $12/hour',
    estimate: 'Estimated working hours: 9-12 hours'
  },
  {
    image: p4,
    heading: 'Very High Complexity',
    rate: 'Hourly Rate: $12/hour',
    estimate: 'Estimated working hours: From 13h'
  }
]
function FurnitureService() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center flex gap-2 justify-center font-copper font-black text-white text-2xl'>
          Furniture Rendering<h1 className='text-[#c1984f]'>Service</h1>
        </h1>
        <div className='grid grid-cols-5'>
          <div className='col-span-1  mt-6 ml-2'>
            <p className='text-[#fff] text-xl font-century'>Visualize Your Ideas</p>
          </div>
          <div className='col-span-4 relative'>
            <img src={banner} alt='' />
            <div className='absolute top-20 left-10 -translate-x-1/2 w-[535px]'>
              <p className='text-white font-medium text-6xl font-banmethuot'>
                Create Stunning Furniture with 3D Modeling
              </p>
              <p className='text-white text-xl pr-72 mt-4'>
                Do you want to know how your Living room or your new interiors will look? We can create a beautiful
                Interior Render based on your floor plan.
              </p>
            </div>
            <img
              src={layerbanner}
              className='absolute bottom-0 translate-y-1/2 max-w-[250px] -translate-x-1/2 left-1/2'
              alt=''
            />
            <div className='absolute -bottom-[171px] pb-32 text-[#fff]/40  w-[350px] pr-20 right-12 bg-[#000]/70 pl-2 pt-2'>
              <h1 className='font-bold text-2xl text-white'>SAMPLE”</h1>
              <p className='text-lg  '>
                Do you want to know how your Living room or your new interiors will look? We can create a beautiful
                Interior Render based on your floor plan.
              </p>
            </div>

            <p className='text-[#c1984f] text-base -rotate-90 absolute left-[-92px] bottom-[-35px]'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
        </div>
      </div>
      <Offer />

      <div className='grid grid-cols-4 gap-8 pl-5 mt-8'>
        {project.map((item, index) => (
          <div className='col-span-1' key={index}>
            <div>
              <img src={item.image} alt='' />
            </div>
            <div className='text-white text-base mt-4 bg-[#151714] rounded-2xl pl-4 py-2'>
              <p className='text-xl m-0 italic'>{item.heading}</p>
              <p className='text-sm m-0'>{item.rate} </p>
              <p className='text-sm m-0'>{item.estimate} </p>
            </div>
          </div>
        ))}
      </div>
      <FurnitureModeling />
      <div className='mt-12'>
        <Line />
      </div>
    </div>
  )
}

export default FurnitureService
