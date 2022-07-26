import React, { FC } from "react";
import { News } from "../types/types";

const NewsItem:FC<News> = (item: News) => {
  return (
    <div className="border-2 border-black">
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <p>{item.author}</p>
      {item?.urlToImage && (
        <img src={item?.urlToImage} alt="img" height={200} width={200} />
      )}
    </div>
  );
};

export default NewsItem;
