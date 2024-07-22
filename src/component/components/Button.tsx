import React from 'react'

function Button({ name, classnamesButton }: { name?: string; classnamesButton?: string }) {
  return (
    <div className=''>
      <button
        type='submit'
        className={`text-white uppercase font-banmethuot font-normal bg-[#c0854f] rounded-[80px] ${classnamesButton}`}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
