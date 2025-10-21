import React from "react";
import { FaShareAlt, FaEye, FaStar, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, thumbnail_url, author, details, rating, total_view } =
    news;

  // Format date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-base-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-400">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition flex items-center gap-5">
          <FaRegBookmark size={24} />
          <FaShareAlt size={24} />
        </button>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-bold text-gray-900 leading-snug mb-3">
        {title}
      </h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-[500px] object-cover rounded-xl px-4 mb-3"
      />

      {/* Details */}
      <div className="text-accent px-4 text-sm  mb-3">
        <p>
          {details.length > 180 ? `${details.slice(0, 180)}...` : details}
          <Link
            to={`/details/${id}`}
            className="  text-lg font-medium hover:underline cursor-pointer ml-1"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-base-200 px-4 py-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
