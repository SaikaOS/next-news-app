import React from "react";
import { useGetTopNewsQuery } from "../services/news";
import NewsItem from "./news-item";

const TopNews = () => {
  const { data, isLoading } = useGetTopNewsQuery();

  return (
    <div className="flex flex-wrap">
      {isLoading && <p className="text-red-300 text-xl">Loading...</p>}
      <NewsItem title={data?.[0].title} author={data?.[0].author} 
      description={data?.[0].description} url={data?.[0].url} urlToImage={data?.[0].urlToImage} />
    </div>
  );
};

export default TopNews;
