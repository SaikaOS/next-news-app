import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { useGetNewsFromCategoryQuery } from '../services/news'
import NewsItem from './news-item'

const FilteredNews = () => {
  const {text} = useAppSelector(state => state.news)
   const {data} = useGetNewsFromCategoryQuery(text)
  return (
    <div>
        {data?.map(news => (
          <NewsItem key={news.url} title={news.title} 
          urlToImage={news.urlToImage} url={news.url}/>
        ))}
    </div>
  )
}

export default FilteredNews