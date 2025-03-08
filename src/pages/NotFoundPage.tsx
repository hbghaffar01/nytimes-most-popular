import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="hover:bg-gray-700 hover:text-white text-gray-500 border font-bold py-2 px-6 rounded transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
