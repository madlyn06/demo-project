import p1 from 'src/assets/p1.png'
import p2 from 'src/assets/p2.png'
import p3 from 'src/assets/p3.png'
import p4 from 'src/assets/p4.png'
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
              <img src={item.image} alt='' />
            </div>
            <div className='text-white text-sm sm:text-base lg:text-lgtext-center mt-4'>
              <p className='font-copper font-extrabold'>{item.desc}</p>
              <div className='text-start'>
                <p>Client:</p>
                <p>Addrest</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FurnitureModeling
