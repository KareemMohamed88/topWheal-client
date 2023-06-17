import React, { useEffect, useState } from "react";
import Axios from "axios";
const AllBlogs = () => {
  const api = "https://topwwheal-server.onrender.com";
  const [blog, setBlog] = useState([]);
  const [visible, setVisible] = useState(3);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  useEffect(() => {
    Axios.get(`${api}/article`).then((res) => {
      setBlog(res.data);
    });
  }, []);
  useEffect(() => {
    Axios.get(`${api}.article`);
  });
  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-center mt-10 mb-10 ">
        {blog.slice(0, visible).map((blog) => (
          <div
            key={blog._id}
            className="max-w-sm h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-5"
          >
            <a href={`/blogs/${blog._id}`}>
              <div className="h-52 overflow-hidden flex justify-center items-center">
                <img className="rounded-t-lg" src={blog.mainImg} alt="" />
              </div>
            </a>
            <div className="p-5">
              <a href={`/blogs/${blog._id}`}>
                <h5 className="mb-4 text-2xl  text-gray-900 dark:text-white">
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
      <div className="w-full flex justify-center my-10">
        <button
          className="py-3 px-8 bg-blue-400 text-white font-bold rounded-sm flex items-center"
          type="submit"
          onClick={showMoreItems}
        >
          Show more
          <span className="w-2" />
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
      </div>
    </React.Fragment>
  );
};

export default AllBlogs;
