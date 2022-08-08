import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setScreen } from '../store/screenSlice'

type LinksType = {
  links: string[]
}

const Navbar:FC<LinksType> = ({links}) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.screen)
  
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