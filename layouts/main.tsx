import React, { useState } from 'react'
import NewsByCategory from '../components/news-by-category'
import TopNews from '../components/top-news'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

const Main = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.screen)
  return (
    <div className='flex justify-between items-center'>
        <TopNews />
        <NewsByCategory category={state.screen}/>
    </div>
  )
}

export default Main