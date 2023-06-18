import React from "react";

const Nav = () => {
  return (
    <React.Fragment>
      <nav style={{width: "100%", height: "60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", placeItems: "center"}}>
        <ul>
          <li className="">
            <a href="#w">Home</a>
          </li>
          <li>
            <a href="#w">all-Blogs</a>
          </li>
        </ul>
        <h2>Topwheal</h2>
        <a href="#w">Follow us</a>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
