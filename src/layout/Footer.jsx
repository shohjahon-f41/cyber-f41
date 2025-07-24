import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '../assets/icons/TwitterIcon'
import FaceBookIcon from '../assets/icons/FaceBookIcon'
import TikTokIcon from "../assets/icons/TikTokIcon.jsx"
import InstagramIcon from "../assets/icons/InstagramIcon.jsx"
import LogoFooter from "../assets/icons/LogoFooter.jsx"

function Footer() {
  return (

    <footer className='footer'>
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-wrap-top">
            <div className="footer-infos">
              <Link to="/"><LogoFooter /></Link>
              <h1>We are a residential interior design firm located in <br /> Portland. Our boutique-studio offers more than</h1>
            </div>

            <div className="footer-menus">
              <h1>Services</h1>
              <Link className='footer-menus-item'>Bonus program</Link>
              <Link className='footer-menus-item'>Gift cards</Link>
              <Link className='footer-menus-item'>Credit and payment</Link>
              <Link className='footer-menus-item'>Service contracts</Link>
              <Link className='footer-menus-item'>Non-cash account</Link>
              <Link className='footer-menus-item'>Payment</Link>
            </div>

            <div className="footer-menus">
              <h1>Assistance to the buyer</h1>
              <Link className='footer-menus-item'>Find an order</Link>
              <Link className='footer-menus-item'>Terms of delivery</Link>
              <Link className='footer-menus-item'>Exchange and return of goods</Link>
              <Link className='footer-menus-item'>Guarantee</Link>
              <Link className='footer-menus-item'>Frequently asked questions</Link>
              <Link className='footer-menus-item'>Terms of use of the site</Link>
            </div>
          </div>

          <div className="footer-icons">
            <TwitterIcon />
            <FaceBookIcon />
            <TikTokIcon />
            <InstagramIcon />
          </div>


        </div>


      </div>
    </footer>

  )
}

export default Footer