// pages/books/Books.jsx
import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedWishList from "../../components/listedBooks/ListedWishList";
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ReadingStats from "../../components/readingStatistics/ReadingStatistics"; // Add this import
import { IoIosArrowDown } from "react-icons/io";

const Books = () => {
  const { storedBooks, wishlist } = useContext(BookContext);
  console.log(storedBooks, wishlist, "bookContest");

  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-center my-5">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white rounded-xl"
          >
            Sort by {sortingType} <IoIosArrowDown size={22} />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages (Low to High)</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating (High to Low)</a>
            </li>
            <li onClick={() => setSortingType("")}>
              <a>Clear Sort</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books 📖</Tab>
          <Tab>Wishlist Books 💝</Tab>
          <Tab>Statistics 📊</Tab> {/* Add this tab */}
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ReadingStats /> {/* Add this panel */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
