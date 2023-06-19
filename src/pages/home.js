import React from "react";
import Nav from '../components/nav'
import Header from '../components/header'
import AllBlogs from '../components/allBlogs'
import Footer from '../components/footer'
import AboutUs from '../components/aboutUs'
const Home = () => {
  
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Header/>
        <Nav/>
        <AllBlogs/>
        <AboutUs/>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default Home;
