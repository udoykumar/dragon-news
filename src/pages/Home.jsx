import React from "react";
import { Navigate, useLoaderData } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return <Navigate to={"/category/0"}></Navigate>;
};

export default Home;
