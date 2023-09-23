// components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-indigo-500">
      <h1 className="text-6xl text-white font-extrabold mb-4">404</h1>
      <p className="text-2xl text-white mb-8">Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
