// src/components/NewsDetail.jsx
import React from "react";
import { Link } from "react-router";

const NewsDetail = ({ news }) => {
  const { title, image_url, details } = news;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Card */}
      <div className="bg-base-100 border border-base-200 rounded-lg shadow-sm overflow-hidden">
        {/* Header - author + actions */}

        {/* Body */}
        <div className="px-6 py-6">
          {/* Image */}
          <div className="mb-6">
            <img
              src={image_url}
              alt={title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-sm"
            />
          </div>
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
            {title}
          </h1>

          {/* Content */}
          <div className="prose prose-sm md:prose-base max-w-none text-gray-700 mb-8">
            <p>{details}</p>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-base-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
              <Link
                to={`/category/${news.category_id}`}
                className="btn btn-secondary btn-md"
              >
                ← All news in this category
              </Link>

              <div className="text-sm text-gray-500">
                <span className="mr-4">
                  Production: {news.production ? "Yes" : "No"}
                </span>
                <span>Pick: {news.others?.is_today_pick ? "Today" : "—"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
