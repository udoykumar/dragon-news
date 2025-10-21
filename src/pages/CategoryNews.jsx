import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (Number(id) === 0) {
      setCategoryNews(data);
    } else if (Number(id) === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === Number(id)
      );
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2 className="text-lg font-semibold">
        Total: <span className="text-secondary">({categoryNews.length}) </span>
        news found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
