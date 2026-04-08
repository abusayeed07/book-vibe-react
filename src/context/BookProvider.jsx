import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  // Initialize state from localStorage
  const [readList, setReadList] = useState(() => {
    const savedReadList = localStorage.getItem("readList");
    return savedReadList ? JSON.parse(savedReadList) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save to localStorage whenever readList changes
  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(readList));
  }, [readList]);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleMarkAsRead = (currentBook) => {
    // Check if already in read list
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error("This book is already in your read list");
      return false;
    }

    // Check if in wishlist
    const isExistInWishlist = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInWishlist) {
      toast.error(
        `"${currentBook.bookName}" is in your wishlist. Remove it from wishlist first to add to read list!`,
      );
      return false;
    }

    // Add to read list
    setReadList([...readList, currentBook]);
    toast.success(`"${currentBook.bookName}" added to your read list!`);

    console.log(currentBook, readList, "book");
    return true;
  };

  const handleWishlist = (currentBook) => {
    // Check if already in wishlist
    const isExistInWishlist = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInWishlist) {
      toast.error("This book is already in your wishlist");
      return false;
    }

    // Check if in read list
    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error(
        `"${currentBook.bookName}" is in your read list. Remove it from read list first to add to wishlist!`,
      );
      return false;
    }

    // Add to wishlist
    setWishlist([...wishlist, currentBook]);
    toast.success(`"${currentBook.bookName}" added to your wishlist!`);

    console.log(currentBook, wishlist, "wishlist");
    return true;
  };

  // Function to remove from read list
  const removeFromReadList = (bookId) => {
    const bookToRemove = readList.find((book) => book.bookId === bookId);
    setReadList(readList.filter((book) => book.bookId !== bookId));
    toast.success(
      `"${bookToRemove?.bookName}" removed from read list. You can now add it to wishlist if you want.`,
    );
    return true;
  };

  // Function to remove from wishlist
  const removeFromWishlist = (bookId) => {
    const bookToRemove = wishlist.find((book) => book.bookId === bookId);
    setWishlist(wishlist.filter((book) => book.bookId !== bookId));
    toast.success(
      `"${bookToRemove?.bookName}" removed from wishlist. You can now add it to read list if you want.`,
    );
    return true;
  };

  // Optional: Clear all data from localStorage
  const clearAllData = () => {
    setReadList([]);
    setWishlist([]);
    localStorage.removeItem("readList");
    localStorage.removeItem("wishlist");
    toast.info("All data cleared from localStorage");
  };

  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishlist,
    setWishlist,
    handleWishlist,
    removeFromReadList,
    removeFromWishlist,
    clearAllData, // optional
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
