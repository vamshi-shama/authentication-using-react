import React from 'react'


const Navbar = () => {
  
  return (
    <div className='bg-black text-slate-200 w-full h-14 '>
      <div className=' h-14 fixed w-full z-50 bg-black border border-transparent border-b-white'>
        <div className=' w-[90%] m-auto flex justify-between'>
          <a href='/'> Header</a>
          <div className='flex gap-5'>
            <a href='/'>Signup</a>
            <a href='/Profile'>Profile</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;