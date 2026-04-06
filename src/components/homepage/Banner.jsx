import React from "react";
import { Link } from "react-router";
import bannerImg from "../../assets/book-1.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-12 mb-[100px]">
      <div className="hero bg-base-200 min-h-[500px] rounded-2xl shadow-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <img
            src={bannerImg}
            alt="Books collection - Book Vibe banner"
            className="max-w-sm rounded-lg"
          />

          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
              Books to freshen up <br /> your bookshelf
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Discover thousands of books across all genres. Find your next
              great read today!
            </p>
            <Link to="/books">
              <button className="btn bg-[#23BE0A] hover:bg-[#1a9a07] border-none text-white px-8 py-3 text-lg">
                View The List →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;