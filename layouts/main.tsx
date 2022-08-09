import React from 'react'
import FilteredNews from '../components/filtered-news'
import NewsByCategory from '../components/news-by-category'
import TopNews from '../components/top-news'
import { useAppSelector } from '../hooks/hooks'

const Main = () => {
  const {isSearched} = useAppSelector(state => state.news)
  const state = useAppSelector(state => state.screen)
  return (
    <div className='flex justify-between items-center'>
        {isSearched ? (<FilteredNews />) : (
            <>
            <TopNews />
            <NewsByCategory category={state.screen}/>
            </>
        )}
    </div>
  )
}

export default Main