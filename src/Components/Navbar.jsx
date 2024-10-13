import React from 'react'
import menu from './../assets/menu.png'

function Navbar() {
  return (
    <div className='flex justify-around items-center h-20 px-4'>
        <div>
            <h1 className='text-3xl md:text-4xl font-bold'>BLOGGER.</h1>
        </div>
        <ul className='hidden md:flex gap-10'>
            <li className='hover:font-bold cursor-pointer'>HOME</li>
            <a href='#postnow'>
            <li className='hover:font-bold cursor-pointer'>BLOGS</li>
            </a>
            <a href='#register'>
              <li className='hover:font-bold cursor-pointer'>LOG IN</li>
            </a>
            <li className='hover:font-bold cursor-pointer'>LOG OUT</li>
        </ul>
        <div>
            <img src={menu} className='w-8 '/>
         </div>
    </div>
  )
}

export default Navbar
