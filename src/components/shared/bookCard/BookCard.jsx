import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-up p-4"
      style={{ animationDelay: `${0.1}s` }}
    >
      <div className="bg-base-300 rounded-2xl overflow-hidden">
        <figure className="p-6">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-2xl max-h-[250px] bg-base-200"
          />
        </figure>
      </div>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          {book.tags.map((tag, tagIndex) => (
            <div
              key={tagIndex}
              className="badge badge-soft badge-success font-bold transition-all duration-300 hover:badge-primary"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title font-bold text-2xl transition-colors duration-300 hover:text-primary">
          {book.bookName}
        </h2>
        <p className="font-semibold text-lg text-gray-600">By: {book.author}</p>
        <div className="card-actions border-t border-dashed border-gray-300 pt-5 flex justify-between text-xl">
          <div className="text-gray-500">{book.category}</div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
