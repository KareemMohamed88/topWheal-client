import React, { useState } from "react";
import Axios from "axios";
import Nav from "../components/nav";
import Footer from "../components/footer";

import "./style.css";

const CreateBlog = () => {
  const api = "http://localhost:3001";
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [p3, setP3] = useState("");
  const [p4, setP4] = useState("");
  const [p5, setP5] = useState("");
  const [p6, setP6] = useState("");
  const createBlog = () => {
    Axios.post(`${api}/createBlog`, {
      id,
      title,
      mainImg,
      secondImg,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
    }).then((res) => {
      console.log("blog created succsesfully");
    });
  };
  return (
    <React.Fragment>
      <Nav />
      <form action="/">
        <input onChange={(e) => setId(e.target.value)} type="text" />
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
        <input
          className="imagesInp"
          onChange={(e) => setMainImg(e.target.value)}
          type="text"
        />
        <input onChange={(e) => setP1(e.target.value)} type="text" />
        <input onChange={(e) => setP2(e.target.value)} type="text" />
        <input onChange={(e) => setP3(e.target.value)} type="text" />
        <input
          className="imagesInp"
          onChange={(e) => setSecondImg(e.target.value)}
          type="text"
        />
        <input onChange={(e) => setP4(e.target.value)} type="text" />
        <input onChange={(e) => setP5(e.target.value)} type="text" />
        <input onChange={(e) => setP6(e.target.value)} type="text" />
        <button onClick={createBlog} type="submit" name="submit">
          POST
        </button>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default CreateBlog;
