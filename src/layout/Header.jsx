import React from 'react'
import LogoIcon from '../assets/scss/svg/LogoIcon'
import Search from '../assets/scss/svg/SearchIcon'
import Heart from '../assets/scss/svg/Heart'
import Shop from '../assets/scss/svg/Shop'
import Contact from '../assets/scss/svg/Contact'
import "../assets/scss/main.scss"
import { Link } from 'react-router-dom'


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
          <Link to="/" className="header__navbar-item">Home</Link>
          <Link href="#" className="header__navbar-item">About</Link>
          <Link href="#" className="header__navbar-item">Contact Us </Link>
          <Link href="#" className="header__navbar-item">Blog</Link>
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