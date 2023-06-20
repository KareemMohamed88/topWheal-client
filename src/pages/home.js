import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import AllBlogs from "../components/allBlogs";
const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Nav />
        <Header />
        <AllBlogs />
      </div>
    </React.Fragment>
  );
};

export default Home;
