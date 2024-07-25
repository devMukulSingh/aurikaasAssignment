import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed print:hidden z-40 flex items-center justify-center top-0 w-screen h-20 bg-slate-500 shadow-xl'>
        <h1 className='text-4xl font-medium text-white '>
            Invoice Generator
        </h1>
    </div>
  )
}

export default Navbar