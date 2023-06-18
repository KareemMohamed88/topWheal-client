import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles/blogDetalis.css";
const BlogDetalis = () => {
  const api = "https://dark-puce-seahorse-suit.cyclic.app";
  const [blog, setBlog] = useState({});
  const Params = useParams();
  useEffect(() => {
    Axios.get(`${api}/article/${Params.id}`).then((res) => {
      setBlog(res.data);
    });
  }, [Params.id]);
  return (
    <React.Fragment>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.p1} />
        <link rel="icon" type="image/x-icon" href="https://ibb.co/brLNcF1"/>
      </Helmet>
      <div className="container-fluid">
        <Nav />
        <div className="blogContainer">
          <h1 className="text-3xl mb-5">{blog.title}</h1>
          <img width={"100%"} height={"100%"} src={blog.mainImg} alt="faild to load" />
          <br />
          <p>{blog.p1}</p>
          <br />
          <p>{blog.p2}</p>
          <br />
          <p>{blog.p3}</p>
          <br />
          <img width={"100%"} height={"100%"} src={blog.secondImg} alt="faild to load" />
          <br />
          <p>{blog.p4}</p>
          <br />
          <p>{blog.p5}</p>
          <br />
          <p>{blog.p6}</p>
        </div>
        <br />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default BlogDetalis;
