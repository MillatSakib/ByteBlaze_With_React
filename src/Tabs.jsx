import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Tabs = ({ stateId }) => {
  const handelTab = () => {
    console.log("Hello");
  };
  return (
    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap my-4">
      <Link
        to={`/blogs/${stateId}`}
        className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Content</span>
      </Link>
      <Link
        to={`/blogs/${stateId}/author`}
        className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>Author</span>
      </Link>
      <BsFillBookmarkStarFill className="ml-10 text-pink-600 text-4xl rounded-full bg-gray-200 p-2 cursor-pointer" />
    </div>
  );
};

export default Tabs;
