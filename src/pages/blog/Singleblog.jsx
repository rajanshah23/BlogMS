import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

const Singleblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  const deleteBlog = async () => {
    try {
      const response = await axios.delete(`${baseUrl}/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Something went wrong. Try again !");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fetchBlog = async () => {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 p-6">
                <div className="relative group">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src="https://imgs.search.brave.com/ISoc2NiqiDoWPsQurz8K86xojXry5ekMqofdb9xQb-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2dlbmVyYXRvci90/ZXh0LXRvLWltYWdl/LndlYnA"
                      alt="Product Image"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl" />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <div className="flex-1">
                    <Link to="/blog/editblog">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <span>Edit</span>
                      </button>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <button
                      className="w-full bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-700 dark:text-red-400 py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-red-200 dark:border-red-800 transform hover:-translate-y-0.5"
                      onClick={deleteBlog}
                    >
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-6 lg:p-8">
                <div className="h-full flex flex-col">
                  {/* Title and Subtitle */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {blog?.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {blog?.subtitle}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                     
                      <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">
                          Category:
                        </span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                          {blog?.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                  
                      <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">
                          Author:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">
                          {blog?.userId?.username}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <span className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-3 flex items-center">  
                        Product Description
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                        {blog?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Singleblog;
