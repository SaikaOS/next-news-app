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
            <NewsItem key={news.url} title={news.title} author={news.author} 
            description={news.description} url={news.url} urlToImage={news.urlToImage}/>
        ))}
    </div>
  )
}

export default NewsByCategory