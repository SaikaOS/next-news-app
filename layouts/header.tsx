import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='h-20 flex justify-between items-center'>
        <input 
        type="text" 
        placeholder='Search anything...' 
        className='w-[300px] p-2 rounded-xl relative outline-none'/>
      <BsSearch className='absolute left-10'/>
        <div>
          <ul className='flex justify-between items-center w-[200px]'>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
    </div>
  )
}

export default Header