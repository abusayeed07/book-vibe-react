import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="text-center">
                {/* Error Number */}
                <h1 className="text-9xl font-bold text-gray-900 dark:text-white mb-4">
                    404
                </h1>
                
                {/* Error Title */}
                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Page Not Found
                </h2>
                
                {/* Error Message */}
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                
                {/* Home Button */}
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;