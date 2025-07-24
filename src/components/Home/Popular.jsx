import React from 'react';
import PopularProdacts from "/image/popular-img.png";
import PopularIpad from "/image/popular-ipad.png";
import PopularSamsung from "/image/popular-samsung.png";
import PopularMac from "/image/popular-macbook.png";

function Popular() {
    return (
        <section className="popular">
            <div className="popular-wrap">
                <div className="popular-products popular-item">
                    <div className="popular-products-img">
                        <img src={PopularProdacts} alt="image" className='popular-img' />
                    </div>
                    <div className="popular-products-sub">
                        <p className="popular-products-title">Popular Products</p>
                        <p className="popular-products-subtitle">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    </div>
                    <div className="popular-products-button">
                        <button className="popular-products-btn">Shop Now</button>
                    </div>
                </div>
                <div className="popular-ipad popular-item">
                    <div className="popular-products-img">
                        <img src={PopularIpad} alt="image" className='popular-img' />
                    </div>
                    <div className="popular-products-sub">
                        <p className="popular-products-title">Popular Products</p>
                        <p className="popular-products-subtitle">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    </div>
                    <div className="popular-products-button">
                        <button className="popular-products-btn">Shop Now</button>
                    </div>
                </div>
                <div className="popular-samsung popular-item">
                    <div className="popular-products-img">
                        <img src={PopularSamsung} alt="image" className='popular-img' />
                    </div>
                    <div className="popular-products-sub">
                        <p className="popular-products-title">Popular Products</p>
                        <p className="popular-products-subtitle">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    </div>
                    <div className="popular-products-button">
                        <button className="popular-products-btn">Shop Now</button>
                    </div>
                </div>
                <div className="popular-mac popular-item">
                    <div className="popular-products-img">
                        <img src={PopularMac} alt="image" className='popular-img' />
                    </div>
                    <div className="popular-products-sub popular-products-white">
                        <p className="popular-products-title">Popular Products</p>
                        <p className="popular-products-subtitle">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    </div>
                    <div className="popular-products-button">
                        <button className="popular-products-btn popular-products-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular
