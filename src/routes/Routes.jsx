import { createBrowserRouter } from "react-router"; // Fixed: react-router instead of react-router
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import ReadingStatsPage from "../pages/readingStatsPage/ReadingStatsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { 
        path: "/books", 
        element: <Books /> 
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json")
      },
      {
        path: "/reading-stats", // Added: Route for reading statistics
        element: <ReadingStatsPage />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);