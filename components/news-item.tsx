import React, { FC } from "react";
import { News } from "../types/types";

const NewsItem: FC<News> = (item: News) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <h1 className="font-bold text-lg">
        {item.title && item.title?.length > 40 ? item.title?.slice(0, 30) + '...' : item.title}</h1>
      {item?.urlToImage && (
        <img src={item?.urlToImage} alt="img" height={500} width={500} />
      )}
      <h2>{item.description}</h2>
      <p>{item.author}</p>
      <a href={item.url} className="text-md text-zinc-400">Readmore</a>
    </div>
  );
};

export default NewsItem;
