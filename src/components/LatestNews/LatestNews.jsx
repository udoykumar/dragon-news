import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3 rounded-lg">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded-md">Latest</p>
      <Marquee className="flex gap-3" pauseOnHover={true} speed={50}>
        <p className="text-accent text-lg font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          eius deleniti, inventore aperiam porro nemo excepturi ad optio culpa
          consequatur.
        </p>
        <p className="text-accent text-lg font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          eius deleniti, inventore aperiam porro nemo excepturi ad optio culpa
          consequatur.
        </p>
        <p className="text-accent text-lg font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          eius deleniti, inventore aperiam porro nemo excepturi ad optio culpa
          consequatur.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
