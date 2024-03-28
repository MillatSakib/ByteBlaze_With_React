import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ singleArticle }) => {
  return (
    <div className="my-4 mx-2 border-2 rounded-lg p-2">
      <Link
        to={`/blogs/${singleArticle.id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={singleArticle.social_image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {singleArticle.title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(singleArticle.published_timestamp).toLocaleDateString()}
          </span>
          <p>{singleArticle.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
