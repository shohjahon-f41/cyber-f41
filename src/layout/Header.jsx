import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {CloseIcon, HeartIcon, KorzinaIcon, LogoIcon, MenuIcon} from "../assets/icons";

function Header() {
  let MenuBtnRef = useRef(document.querySelector(".header-menu"));

  function MenuBtn() {
    MenuBtnRef.current.classList.add("active");
    document.querySelector("#root").classList.add("active")
  }

  function CloseBtn() {
    MenuBtnRef.current.classList.remove("active")
    document.querySelector("#root").classList.remove("active")

  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <div className="header-logo">
            <Link to="/">
              <LogoIcon />
            </Link>
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search" />
          </div>
          <nav className="header-nav">
            <Link to="/" className="header-nav-title">Home</Link>
            <Link to="#" className="header-nav-title">About</Link>
            <Link to="#" className="header-nav-title">Contact Us</Link>
            <Link to="#" className="header-nav-title">Blog</Link>
          </nav>
          <div className="header-right">
            <Link>
              <HeartIcon />
            </Link>
            <Link to="/cart">
              <KorzinaIcon />
            </Link>
          </div>
          <div className="header-menu-icon">
            <button onClick={MenuBtn} className="MenuBtn">
              <MenuIcon />
            </button>
          </div>

          <div className="header-menu" ref={MenuBtnRef}>
            <div className="header-close-btn">
              <button onClick={CloseBtn}>
                <CloseIcon />
              </button>
            </div>
            <nav className="header-nav-menu">
              <Link to="#" className="">Home</Link>
              <Link to="#" className="">About</Link>
              <Link to="#" className="">Contact Us</Link>
              <Link to="#" className="">Blog</Link>
            </nav>
            <div className="header-nav-menu-liked">
              <Link className="header-nav-menu-liked-title">
                <HeartIcon />
                Favourites
              </Link>
              <Link to="/cart" className="header-nav-menu-liked-title">
                <KorzinaIcon />
                Korzina
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
