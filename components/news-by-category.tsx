import React from 'react'
import { useGetNewsFromCategoryQuery } from '../services/news'
import NewsItem from './news-item'

type Category = {
  category:string
}

const NewsByCategory = (category: Category) => {
    const {data, isLoading} = useGetNewsFromCategoryQuery(category.category)
  return (
    <div className='grid grid-cols-2'>
      {isLoading && <p className='text-red-300'>Loading...</p>}
        {data?.slice(0, 4).map(news => (
            <NewsItem key={news.url} title={news.title} 
            urlToImage={news.urlToImage} url={news.url}/>
        ))}
    </div>
  )
}

export default NewsByCategory