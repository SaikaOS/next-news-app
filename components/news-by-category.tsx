import React from 'react'
import { useGetNewsFromCategoryQuery } from '../services/news'

const NewsByCategory = () => {
    const {data} = useGetNewsFromCategoryQuery('sport')
  return (
    <div className='grid grid-cols-2 border-2 border-black'>
        {data?.slice(0, 4).map(news => (
            <div>
                <h1>{news.title}</h1>
                <h2>{news.description}</h2>
                <p>{news.author}</p>
                <a href={news.url}>Read more</a>
                <img src={news.urlToImage} alt="img" />
            </div>
        ))}
    </div>
  )
}

export default NewsByCategory