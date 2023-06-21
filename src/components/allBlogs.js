import React, { useEffect, useState } from "react";
import Axios from "axios";
const AllBlogs = () => {
  const api = "https://unusual-fish-girdle.cyclic.app";
  const [blog, setBlog] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const handleNext = () => {
    setPageCount((prevValue) => prevValue + 1);
  };
  const handlePrevious = () => {
    setPageCount((prevValue) => prevValue - 1);
  };
  useEffect(() => {
    Axios.get(`${api}/article?page=${pageCount}&limit=6`).then((res) => {
      setBlog(res.data);
    });
  }, [pageCount]);

  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-center mt-10 mb-10 ">
        {blog.map((blog) => (
          <div
            key={blog._id}
            className="max-w-sm h-fit bg-white border border-gray-200  shadow  my-5 mx-5 overflow-hidden"
          >
            <a className="text-transparent" href={`/article/${blog._id}`}>
              <div className="h-44 overflow-hidden flex justify-center items-center">
                <img
                  width={"100%"}
                  height={"100%"}
                  className="rounded-t-lg"
                  src={blog.mainImg}
                  alt=""
                />
              </div>
              learn more
            </a>

            <div className="p-3">
              <h5 className="mb-6 text-2xl  text-gray-900">{blog.title}</h5>

              <p>
                {blog.summary}
                <br />
                <br />
                <a
                  href={`/article/${blog._id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-300 rounded-md hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  learn more
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
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="test w-full flex justify-center my-10">
        <button
          className="px-5 py-3 bg-indigo-300 hover:bg-indigo-500 text-white font-bold border rounded-s-md"
          onClick={handlePrevious}
          type="submit"
        >
          previous
        </button>
        <button
          className="px-5 py-3 bg-indigo-300 hover:bg-indigo-500 text-white font-bold border rounded-e-md"
          onClick={handleNext}
          type="submit"
        >
          next
        </button>
      </div>
    </React.Fragment>
  );
};

export default AllBlogs;
