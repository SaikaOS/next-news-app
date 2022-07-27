import React, { ChangeEvent, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import HeaderNav from '../components/header-nav'
import { useGetNewsFromCategoryQuery } from '../services/news'

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const {data, isLoading} = useGetNewsFromCategoryQuery('')

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  return (
    <div className='h-20 flex justify-between items-center'>
        <input 
        type="text" 
        placeholder='Search anything...' 
        className='w-[300px] p-2 rounded-xl relative outline-none'
        value={searchText}
        onChange={handleChange}
        />
      <BsSearch className='absolute left-10'/>
        <HeaderNav />
    </div>
  )
}

export default Header