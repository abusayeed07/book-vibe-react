// components/ReadingStats.jsx
import React, { useContext, useMemo } from "react";
import { BookContext } from "../../context/BookProvider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

const ReadingStats = () => {
  const { readList } = useContext(BookContext);

  // Statistics by category
  const categoryStats = useMemo(() => {
    const categories = {};
    readList.forEach((book) => {
      categories[book.category] = (categories[book.category] || 0) + 1;
    });
    return Object.entries(categories).map(([name, value]) => ({
      name,
      value,
    }));
  }, [readList]);

  // Statistics by rating
  const ratingStats = useMemo(() => {
    const ratings = {};
    readList.forEach((book) => {
      const rating = Math.floor(book.rating);
      ratings[rating] = (ratings[rating] || 0) + 1;
    });
    return Object.entries(ratings).map(([rating, count]) => ({
      rating: `${rating} Star`,
      count,
    }));
  }, [readList]);

  // Pages read statistics
  const pagesStats = useMemo(() => {
    return readList.map((book) => ({
      name:
        book.bookName.length > 15
          ? book.bookName.substring(0, 15) + "..."
          : book.bookName,
      pages: book.totalPages,
      rating: book.rating,
    }));
  }, [readList]);

  // Yearly reading statistics
  const yearlyStats = useMemo(() => {
    const years = {};
    readList.forEach((book) => {
      const year = book.yearOfPublishing;
      years[year] = (years[year] || 0) + 1;
    });
    return Object.entries(years)
      .map(([year, count]) => ({
        year,
        count,
      }))
      .sort((a, b) => a.year - b.year);
  }, [readList]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];

  if (readList.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-2xl">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          No Reading Data Yet
        </h2>
        <p className="text-gray-500">
          Start adding books to your read list to see statistics!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Reading Statistics Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold">{readList.length}</div>
          <div className="text-sm">Total Books Read</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold">
            {readList.reduce((sum, book) => sum + book.totalPages, 0)}
          </div>
          <div className="text-sm">Total Pages Read</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold">
            {(
              readList.reduce((sum, book) => sum + book.rating, 0) /
              readList.length
            ).toFixed(1)}
          </div>
          <div className="text-sm">Average Rating</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
          <div className="text-3xl font-bold">
            {[...new Set(readList.map((book) => book.category))].length}
          </div>
          <div className="text-sm">Categories Explored</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Books by Category - Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Books by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Books by Rating - Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Books by Rating</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ratingStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rating" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Number of Books" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pages per Book - Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Pages per Book</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pagesStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pages" fill="#82ca9d" name="Pages" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Reading Over Years - Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            Books Read by Publication Year
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yearlyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                name="Books Read"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Rating Distribution - Area Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Rating Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={ratingStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rating" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="count"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Reading Progress - Custom Table */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Reading Summary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Book Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pages
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {readList.map((book) => (
                <tr key={book.bookId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {book.bookName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.totalPages}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ⭐ {book.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadingStats;
