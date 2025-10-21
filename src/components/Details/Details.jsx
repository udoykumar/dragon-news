import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const findDetails = data.find((item) => item.id == id);
    setNewsData(findDetails);
  }, [id, data]);
  console.log(newsData);
  return (
    <div>
      <DetailsCard news={newsData} />
    </div>
  );
};

export default Details;
