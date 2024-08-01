import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
import { REACT_APP_BASE_URL } from 'src/ultils/api'
const project_furniture = [
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
function FurnitureModeling({ data = project_furniture }: any) {
  return (
    <div>
      <div className='flex mt-4 text-white gap-2 font-copper font-extrabold text-lg md:text-2xl '>
        <p>Furniture Modeling</p>
        <p className='text-[#c0854f]'>Project</p>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-8 pl-5 mt-8'>
        {data.map((item: any, index: any) => (
           <div className='col-span-1' key={index}>
           <div>
           <img style={{width:"100%",height:"100%"}} className='w-100 h-100' src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.thumbnail?.url}`} alt='' />

           </div>
           <div className='text-white text-xs md:text-base text-center mt-2 md:mt-4'>
             <p className='font-copper font-semibold'>{item.title}</p>
             <div className='text-start'>
               <p>Client: {item?.client}</p>
               <p>Addrest: {item?.address}</p>
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  )
}

export default FurnitureModeling
