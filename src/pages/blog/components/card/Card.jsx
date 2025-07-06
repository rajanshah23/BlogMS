import React from "react";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <>
      {/* Blog Card */}
      <Link to={`/blog/${blog._id}`}>
        <div className="max-w-sm rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2">
          <div className="h-2/3 overflow-hidden">
            <img className={blog.imageUrl} alt="Blog" />
          </div>

          <div className="p-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {blog.description}
            </p>

            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
