import React, { FC } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { setScreen } from '../store/screenSlice'

type LinksType = {
  links: string[]
}

const Navbar:FC<LinksType> = ({links}) => {
  const dispatch = useAppDispatch()
  
  const handleClick = (link: string) => {
      dispatch(setScreen(link))
  }
  return (
    <nav>
        <ul className='flex justify-between items-center w-[570px]'>
            {links.map(link => (
              <li key={link}>
                <button
                onClick={() => handleClick(link)}
                >#{link}</button>
              </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar