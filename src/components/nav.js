import React, { useState } from "react";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <>
      <div className="nav desktop-nav">
        <div className="logo">
          <h1>supercharger</h1>
        </div>
        <ul>
          <li>
            <a href="#w">Home</a>
          </li>
          <li>
            <a href="#w">About us</a>
          </li>
          <li>
            <a href="#w">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="nav mobile-nav">
        <div className="head">
          <div className="burger-menu" onClick={updateMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <h2>supercharger</h2>
        </div>
        <div className={menu_class}>
          <div className="links">
            <ul>
              <li>
                <a href="#w">Home</a>
              </li>
              <li>
                <a href="#w">About us</a>
              </li>
              <li>
                <a href="#w">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
