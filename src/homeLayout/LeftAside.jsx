import React, { Suspense } from "react";
import Loader from "../components/Loader/Loader";
import Categories from "../components/Categories/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
