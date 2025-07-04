import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      {/* Blog Card */}
      <Link to="/blog/id">
        <div className="max-w-sm rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2">
          <div className="h-2/3 overflow-hidden">
        <img
          className="object-cover rounded-t-lg"
          src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA"
          alt="Blog"
        />
      </div>

          <div className="p-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Boteworthy technology acquisitions 2021  
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
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
        <Link to="/blog/id">
        <div className="max-w-sm rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2">
          <div className="h-2/3 overflow-hidden">
        <img
          className="object-cover rounded-t-lg"
          src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA"
          alt="Blog"
        />
      </div>

          <div className="p-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Boteworthy technology acquisitions 2021  
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
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
