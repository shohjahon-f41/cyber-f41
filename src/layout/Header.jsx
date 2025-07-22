import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {CloseIcon, HeartIcon, KorzinaIcon, LogoIcon, MenuIcon} from "../assets/svg/Home/index";


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
            <Link>
              {" "}
              <LogoIcon />{" "}
            </Link>
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search" />
          </div>
          <nav className="header-nav">
            <Link className="header-nav-title">Home</Link>
            <Link className="header-nav-title">About</Link>
            <Link className="header-nav-title">Contact Us</Link>
            <Link className="header-nav-title">Blog</Link>
          </nav>
          <div className="header-right">
            <Link>
              {" "}
              <HeartIcon />{" "}
            </Link>
            <Link>
              {" "}
              <KorzinaIcon />{" "}
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
              <Link className="">Home</Link>
              <Link className="">About</Link>
              <Link className="">Contact Us</Link>
              <Link className="">Blog</Link>
            </nav>
            <div className="header-nav-menu-liked">
              <Link className="header-nav-menu-liked-title">
                {" "}
                <HeartIcon />{" "}
                Favourites
              </Link>
              <Link className="header-nav-menu-liked-title">
                {" "}
                <KorzinaIcon />{" "}
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
