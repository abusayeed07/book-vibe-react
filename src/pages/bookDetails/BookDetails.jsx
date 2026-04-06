import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  console.log(bookParamsId, "bookParamsId");
  //wait
  const books = useLoaderData();
  console.log(books, "books");
  const expectedBook = books.find((book) => book.bookId == bookParamsId);
  console.log(expectedBook, "expectedBook");
  
  if (!expectedBook) {
    return (
      <div className="container mx-auto mt-5 text-center text-xl">
        Book not found
      </div>
    );
  }
  
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = expectedBook;
  
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mt-5 rounded-2xl max-w-[1170px] overflow-hidden">
      <figure className="lg:w-1/2 bg-base-200 flex items-center justify-center p-8">
        <img src={image} alt={bookName} className="max-h-[500px] w-auto object-contain rounded-lg" />
      </figure>
      <div className="card-body lg:w-1/2 p-8">
        <h2 className="card-title text-3xl font-bold text-gray-800">{bookName}</h2>
        <h3 className="text-xl text-primary font-semibold mb-2">By: {author}</h3>
        
        <div className="bg-blue-50 rounded-lg p-3 my-2">
          <span className="font-semibold">Category: </span>
          <span className="text-gray-600">{category}</span>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 my-2 border-l-4 border-primary">
          <span className="font-semibold block mb-1">Review:</span>
          <p className="text-gray-600 italic">"{review}"</p>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap my-3">
          <span className="font-semibold">Tags:</span>
          {tags.map((tag, tagIndex) => (
            <div
              key={tagIndex}
              className="badge badge-soft badge-success font-bold transition-all duration-300 hover:badge-primary"
            >
              {tag}
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-4 space-y-3">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Number of Pages:</span>
            <span className="font-bold text-gray-800">{totalPages}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-gray-100">
            <span className="text-gray-600">Publisher:</span>
            <span className="font-bold text-gray-800">{publisher}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-gray-100">
            <span className="text-gray-600">Year of Publishing:</span>
            <span className="font-bold text-gray-800">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-gray-100">
            <span className="text-gray-600">Rating:</span>
            <span className="font-bold text-yellow-500 text-lg">{rating}/5</span>
          </div>
        </div>
        
        <div className="flex gap-4 mt-6">
          <button className="btn btn-soft btn-success">📖 Read Book</button>
          <button className="btn btn-info text-white">❤️ Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;