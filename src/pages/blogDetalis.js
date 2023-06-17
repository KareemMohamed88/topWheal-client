import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Nav from "../components/nav";
import Footer from "../components/footer";
import '../styles/blogDetalis.css'

const BlogDetalis = () => {
  const api = "https://topwwheal-server.onrender.com";
  const [blog, setBlog] = useState({});
  const Params = useParams();
  useEffect(() => {
    Axios.get(`${api}/article/${Params.id}`).then((res) => {
      setBlog(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Nav />
        <div className="blogContainer">
          <h1 className="text-3xl mb-5">{blog.title}</h1>
          <img src={blog.mainImg} />
          <br/>
          <p>{blog.p1}</p>
          <br/>
          <p>{blog.p2}</p>
          <br/>
          <p>{blog.p3}</p>
          <br/>
          <img src={blog.secondImg} />
          <br/>
          <p>{blog.p4}</p>
          <br/>
          <p>{blog.p5}</p>
          <br/>
          <p>{blog.p6}</p>
        </div>
        <br/>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default BlogDetalis;
