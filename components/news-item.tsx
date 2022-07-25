import React from "react";
import { News } from "../types/types";

const NewsItem = (item: News) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <p>{item.author}</p>
      <a href={item.url}>Read more</a>
      {item?.urlToImage && (
        <img src={item?.urlToImage} alt="img" height={100} width={100} />
      )}
    </div>
  );
};

export default NewsItem;
