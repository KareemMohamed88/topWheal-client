import React from "react";
import Nav from '../components/nav'
import AllBlogs from '../components/allBlogs'
const Home = () => {
  
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Nav/>
        <AllBlogs/>
      </div>
    </React.Fragment>
  );
};

export default Home;
