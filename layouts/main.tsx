import React from 'react'
import NewsByCategory from '../components/news-by-category'
import TopNews from '../components/top-news'

const Main = () => {
  return (
    <div className='flex justify-between items-center'>
        <TopNews />
        <NewsByCategory category='science'/>
    </div>
  )
}

export default Main