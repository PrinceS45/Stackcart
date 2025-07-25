import React from 'react'

function Card1({image , title}) {
  return (
    <div>
        <div className='flex flex-col items-center'>
      <img className='w-[160px] h-[150px] rounded-t-xl ' src={image} alt="image" />
      <h2 className='text-blue-950 text-[22px] font-semibold underline hover:underline-offset-4  underline-offset-1 cursor-pointer pt-2'>{title}</h2>
      </div>
    </div>
  )
}

export default Card1
