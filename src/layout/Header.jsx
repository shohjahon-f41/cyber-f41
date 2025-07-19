import React from 'react'
import LogoIcon from '../assets/scss/svg/LogoIcon'
import Search from '../assets/scss/svg/SearchIcon'
import Heart from '../assets/scss/svg/Heart'
import Shop from '../assets/scss/svg/Shop'
import Contact from '../assets/scss/svg/Contact'
import "../assets/scss/main.scss"




function Header() {
  return (
    <>
   <header className='header'>
      <div className="container">

      <div className="header__wrap">
        <a href="#" className="header__wrap__logo"><LogoIcon/></a>
        <div className="header__input">
        <label htmlFor="search" className='header__input__label'><Search/></label>
        <input type="text" id='search' placeholder='Search' className='header__input-item'/>
        </div>
        <nav className="header__navbar">
          <a href="#" className="header__navbar-item">Home</a>
          <a href="#" className="header__navbar-item">About</a>
          <a href="#" className="header__navbar-item">Contact Us </a>
          <a href="#" className="header__navbar-item">Blog</a>
        </nav>
        <div className="header__buttons">
          <a href="#" className="header__buttons__item"><Heart/></a>
          <a href="#" className="header__buttons__item"><Shop/></a>
          <a href="#" className="header__buttons__item"><Contact/></a>
        </div>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header