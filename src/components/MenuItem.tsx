import React from 'react'
import Image from 'next/image'

const MenuItem = () => {
  return (
    <div className='menuitem my-4 bg-slate-300 w-full rounded-xl'>
    <Image className='rounded-xl w-80 pt-4 h-44 m-auto object-cover overflow-hidden' src="/assets/tandoori-chicken.jpg" alt="tandoori-chicken" width={500} height={200} />
    <div className='bg-slate-400 w-11/12 rounded-xl'>Tandoori Chicken</div>
    </div>
  )
}

export default MenuItem