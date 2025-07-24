import React from 'react'
import PlayStationImg from "/images/playstation-img.png"
import HeadPhoneImg from "/images/headphone-img.png"
import VisionImg from "/images/vision-img.png"
import MacBookImg from "/images/macbook-img.png"

function HomeProducts() {
    return (
        <section className="home-products">
            <div className="home-products-left">
                <div className="home-products-left-top">
                    <div className="home-products-left-top-img">
                        <img src={PlayStationImg} alt="playstation img" />
                    </div>
                    <div className="home-products-left-top-infos">
                        <h1>Playstation 5</h1>
                        <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>

                <div className="home-products-left-bottom">
                    <div className="home-products-left-bottom-headphone">
                        <div className="home-products-left-bottom-headphone-img">
                            <img src={HeadPhoneImg} alt="headphone img" />
                        </div>
                        <div className="home-products-left-bottom-headphone-infos">
                            <h1>Apple AirPods <span>Max</span></h1>
                            <p>Computational audio. Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className="home-products-left-bottom-vision">
                        <div className="home-products-left-bottom-vision-img">
                            <img src={VisionImg} alt="vision img" />
                        </div>
                        <div className="home-products-left-bottom-vision-infos">
                            <h1>Apple Vision <span>Pro</span></h1>
                            <p>An immersive way to experience entertainment</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="home-products-right">
                <div className="home-products-right-infos">
                    <h1>Macbook <span>Air</span></h1>
                    <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <button>Shop Now</button>
                </div>

                <div className="home-products-right-img">
                    <img src={MacBookImg} alt="macbook img" />
                </div>
            </div>
        </section>
    )
}

export default HomeProducts