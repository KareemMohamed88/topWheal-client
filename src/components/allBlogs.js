import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/allBlogs.css";
const AllBlogs = () => {
  const api = "https://topwwheal-server.onrender.com";
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    Axios.get(`${api}/blogs`).then((res) => {
      setBlog(res.data);
    });
  }, [blog]);
  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-center mt-10 mb-10 ">
        {blog.map((blog) => (
          <div className="max-w-sm h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
            <div className="h-64">
              <a href={`/blogs/${blog._id}`}>
                <img
                  className="rounded-t-lg"
                  src={blog.mainImg}
                  alt
                />
              </a>
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </a>
              
              <a
                href={`/blogs/${blog._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AllBlogs;
