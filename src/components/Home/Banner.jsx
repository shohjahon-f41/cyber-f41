import React from 'react'
import BannerImg from "/images/banner-img.png"

function Banner() {
  return (
    <section className='banner'>
        <div className="container">
            <div className="banner-wrap">
                <div className="banner-infos">
                    <p className='banner-subtitle'>Pro.Beyond.</p>
                    <h1 className="banner-title">IPhone 14 <span className='banner-span'>Pro</span></h1>
                    <p className="banner-subtitle">Created to change everything for the better. For everyone</p>
                    <button className="banner-button">Shop Now</button>
                </div>

                <div className="banner-img">
                    <img src={BannerImg} alt="banner img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner