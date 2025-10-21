import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 space-y-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={({ isActive }) =>
              `btn border-none bg-base-100 hover:bg-base-200 rounded-lg text-lg ${
                isActive ? "bg-base-300 font-bold" : ""
              }`
            }
            to={`category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
