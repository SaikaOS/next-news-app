import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { News } from '../types/types'

export const BASE_API = 'f19e6da990164fc48e08d89c22e76b32'

type NewsArticles = {
    articles: News[]
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: `https://newsapi.org/v2/`}),
    endpoints: (builder) => ({
        getTopNews: builder.query<News[], void>({
            query: () => `top-headlines?country=us&apiKey=${BASE_API}`,
            transformResponse: (data: NewsArticles[]) => data.articles
        }),
        getNewsFromCategory: builder.query<News[], string>({
            query: (category) => `everything?q=${category}&apiKey=${BASE_API}`,
            transformResponse: (data: NewsArticles[]) => data.articles
        })
    })
})

export const { useGetTopNewsQuery, useGetNewsFromCategoryQuery } = newsApi