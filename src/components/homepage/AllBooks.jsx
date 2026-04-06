import React, { use } from "react";

import BookCard from "../shared/bookCard/BookCard";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log("Books: ", books);
  return (
    <div className="my-12 container mx-auto">
      <h2 className="text-3xl font-bold text-center animate-fade-in">Books</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {books.map((book, ind) => {
          return (
              <BookCard key={ind} book={book} />
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
