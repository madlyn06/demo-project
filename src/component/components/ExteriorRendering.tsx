/* eslint-disable react/no-unescaped-entities */
import { REACT_APP_BASE_URL } from 'src/ultils/api'
import { Link } from 'react-router-dom'

function ExteriorRendering({ data, id, number }: any) {
  const displayedItems = !number ? data.slice(0, 4) : data
  return (
    <div>
      <div className='flex mt-4 text-white gap-2 text-lg md:text-2xl font-copper font-extrabold'>
        <p>Exterior Rendering</p>
        <p className='text-[#c0854f]'>Project</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 mt-8'>
        {displayedItems?.map((item: any, index: number) => (
          <Link to={`/project/exterior-rendering/details/${item.id}`} state={item} key={index}>
            <div className='col-span-1' key={index}>
              <div>
                <img
                  style={{ width: '100%', height: '100%', aspectRatio: '32 / 21' }}
                  className='w-full h-full object-cover'
                  src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.small?.url}`}
                  alt=''
                />
              </div>
              <div
                className={`text-white text-xs md:text-base text-center mt-4 ${
                  item.id === id ? '!text-[#c0854f]' : ''
                }`}
              >
                <p className=''>{item?.title}</p>
                <div className='text-start'>
                  <p>Client: {item?.client}</p>
                  <p>Address: {item?.address}</p>
                  <p>Space: {item?.clientWebsite}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExteriorRendering
