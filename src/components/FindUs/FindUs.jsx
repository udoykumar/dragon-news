import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Find Us on</h2>
      <div className="">
        <div className="join join-vertical w-full space-y-4">
          <button className="btn join-item bg-base-100 justify-start border-0 text-lg ">
            <FaFacebook className="text-blue-800 text-2xl" /> Facebook
          </button>
          <button className="btn join-item bg-base-100 justify-start border-0 text-lg ">
            <FaTwitter className="text-blue-400 text-2xl" /> Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start border-0 text-lg ">
            <FaInstagram className="text-red-700 text-2xl" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
