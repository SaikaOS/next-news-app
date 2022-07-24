import React from 'react'
import { useGetTopNewsQuery } from '../services/news'

const TopNews = () => {
    const {data} = useGetTopNewsQuery()
    
  return (
    <div className='flex flex-wrap border-2 border-black'>
        {
          <div>
          <h1>{data?.[0].title}</h1>
          <h2>{data?.[0].description}</h2>
          <p>{data?.[0].author}</p>
          <a href={data?.[0].url}>Read more</a>
          <img src={data?.[0].urlToImage} alt="img" />
      </div>
        }
    </div>
  )
}

export default TopNews