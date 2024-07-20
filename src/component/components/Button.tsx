import React from 'react'

function Button({ name, classnamesButton }: { name?: string; classnamesButton?: string }) {
  return (
    <div>
      <button
        type='submit'
        className={`text-white uppercase font-banmethuot font-normal bg-[#c0854f] px-16 mt-8 py-3 rounded-[80px] text-2xl ${classnamesButton}`}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
