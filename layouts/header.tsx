import React, { ChangeEvent } from 'react'
import {BsSearch} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setDefaultNews, setText } from '../store/newsSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const {text} = useAppSelector(state => state.news)

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(setText(e.target.value))
  }
  if(text.length === 0) {
    dispatch(setDefaultNews())
  }
  return (
    <div className='h-20 flex justify-between items-center'>
        <input 
        type="text" 
        placeholder='Search anything...' 
        className='w-[300px] p-2 rounded-xl relative outline-none'
        value={text}
        onChange={handleChange}
        />
      <BsSearch className='absolute left-10'/>
    </div>
  )
}

export default Header