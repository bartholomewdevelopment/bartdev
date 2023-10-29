import React from 'react'

export const SectionTitle = ({badge,title,description}) => {
  return (
    <div className='my-14 text-center'>
        <h4 className='text-primary text-xl font-semibold'>{badge}</h4>
        <h1 className='text-4xl md:text-[40px] font-bold'>{title}</h1>
        <p className='text-gray w-[100%] md:w-[60%] text-lg mx-auto'>{description}</p>
    </div>
  )
}
