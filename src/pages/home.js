import React from "react";
import Nav from "../components/nav";
import AllBlogs from "../components/allBlogs";
const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Nav />
        <div className="h-96 flex justify-center items-center text-center bg-indigo-300">
          <h2 className="text-3xl mb-5 text-white font-bold">supercharger</h2>
      </div>
        <AllBlogs />
      </div>
    </React.Fragment>
  );
};

export default Home;
