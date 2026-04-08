// pages/readingStatsPage/ReadingStatsPage.jsx
import React, { useState } from "react";
import ReadingStats from "../../components/readingStatistics/ReadingStatistics"; // Fixed path
import ListedReadList from "../../components/listedBooks/ListedReadList"; // Add this import

const ReadingStatsPage = () => {
  const [showChart, setShowChart] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Reading Statistics</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowChart(true)}
            className={`px-4 py-2 rounded-lg ${
              showChart ? "bg-[#23BE0A] text-white" : "bg-gray-200"
            }`}
          >
            Chart View
          </button>
          <button
            onClick={() => setShowChart(false)}
            className={`px-4 py-2 rounded-lg ${
              !showChart ? "bg-[#23BE0A] text-white" : "bg-gray-200"
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {showChart ? <ReadingStats /> : <ListedReadList sortingType="" />}
    </div>
  );
};

export default ReadingStatsPage;
