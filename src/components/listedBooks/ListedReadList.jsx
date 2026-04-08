import React, { useContext, useMemo } from "react";
import { BookContext } from "../../context/BookProvider";
import { toast } from "react-toastify";
import { CiLocationOn } from "react-icons/ci";
import { StickyNote } from "lucide-react";
import { FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ListedReadList = ({ sortingType }) => {
  const { readList, setReadList } = useContext(BookContext);

  // Sort books based on sortingType
  const sortedReadList = useMemo(() => {
    if (!sortingType) return readList;
    
    const sorted = [...readList]; // Create a copy to avoid mutating original
    
    if (sortingType === 'pages') {
      sorted.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    
    return sorted;
  }, [readList, sortingType]);

  const handleRemoveFromReadList = (bookId) => {
    const updatedReadList = readList.filter((book) => book.bookId !== bookId);
    setReadList(updatedReadList);
    toast.success("Book removed from read list");
  };

  if (readList.length === 0) {
    return (
      <div className="container mx-auto mt-12 px-4">
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your Read List is Empty
          </h2>
          <p className="text-gray-500 mb-6">
            You haven't marked any books as read yet.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="btn btn-primary"
          >
            Browse Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            My Read List 📖
          </h1>
          <p className="text-gray-500">
            You have {readList.length} book{readList.length !== 1 ? "s" : ""} in
            your read list
            {sortingType && (
              <span className="ml-2 text-sm text-gray-400">
                (Sorted by {sortingType === 'pages' ? 'Pages' : 'Rating'})
              </span>
            )}
          </p>
        </div>
        <button
          onClick={() => {
            setReadList([]);
            toast.info("All books removed from read list");
          }}
          className="btn btn-error text-white"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {sortedReadList.map((book) => (
          <div
            key={book.bookId}
            className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 flex gap-6 bg-white hover:border-blue-200 relative"
          >
            {/* Left Side - Image with Background */}
            <div className="left bg-base-200 rounded-lg px-4 py-2 flex items-center justify-center w-[230px]">
              <img
                src={book.image}
                alt={book.bookName}
                className="w-30 h-50 object-cover rounded-md"
              />
            </div>

            {/* Right Side - Book Details */}
            <div className="right flex-1">
              <h3 className="font-bold text-2xl mb-3">{book.bookName}</h3>
              <p className="text-gray-600 mb-4">By: {book.author}</p>

              {/* Tags + Year of Publish */}
              <div className="flex items-center gap-5 mb-4 text-gray-600 flex-wrap">
                <div className="flex gap-2 items-center">
                  <span className="font-bold">Tag:</span>
                  {book.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-[#23BE0A] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 flex items-center gap-1">
                  <CiLocationOn size={22}/> Year: {book.yearOfPublishing}
                </span>
              </div>

              {/* Publisher + Total Pages */}
              <div className="flex items-center gap-6 mb-4 text-gray-600 flex-wrap">
                <span className="flex items-center gap-1">
                  <FaUserFriends size={22}/> {book.publisher}
                </span>
                <span className="flex items-center gap-1">
                  <StickyNote size={22} /> {book.totalPages} pages
                </span>
              </div>

              <div className="divider"></div>

              {/* Category + Rating + View Details */}
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                  {book.category}
                </span>
                <span className="text-orange-600 bg-orange-100 px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ {book.rating}
                </span>
                <button
                  onClick={() => (window.location.href = `/bookDetails/${book.bookId}`)}
                  className="text-white bg-[#23BE0A] px-4 py-2 rounded-full text-sm font-medium btn hover:bg-[#1a8a05]"
                >
                  View Details
                </button>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleRemoveFromReadList(book.bookId)}
                className="absolute top-2 right-2 btn btn-sm btn-circle btn-error text-white"
              >
                <MdDelete className="text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;