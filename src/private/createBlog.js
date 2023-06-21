import React, { useState } from "react";
import Axios from "axios";
import Nav from "../components/nav";

import "./style.css";

const CreateBlog = () => {
  const api = "https://unusual-fish-girdle.cyclic.app";
  const [title, setTitle] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [summary, setSummary] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [p3, setP3] = useState("");
  const [p4, setP4] = useState("");
  const [p5, setP5] = useState("");
  const [p6, setP6] = useState("");
  const createBlog = () => {
    Axios.post(`${api}/createBlog`, {
      title,
      mainImg,
      secondImg,
      summary,
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
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
        <input
          className="imagesInp"
          onChange={(e) => setMainImg(e.target.value)}
          type="text"
        />
        <input maxLength="120" onChange={(e) => setSummary(e.target.value)} type="text" />
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
        <button className="px-3 py-6 bg-indigo-300 text-white flex items-center justify-center" onClick={createBlog} type="submit" name="submit">
          POST
        </button>
      </form>
    </React.Fragment>
  );
};

export default CreateBlog;
