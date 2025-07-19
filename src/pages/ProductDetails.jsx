import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import InfoProductDel from "../components/ProductDetails/InfoProductDel.jsx";
import {
  ProDetIphone,
  ProDetIphone2,
  ProDetIphone3,
  ProDetIphone4,
  ProDetIphone5,
  ProDetIphoneBig2,
  ProDetIphoneBig3,
  ProDetIphoneBig4,
  RelatedIphone14,
} from "../components/ProductDetails/index.js";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColor, setSelectedColor] = useState("black");
  const colors = ["#000", "#781dbc", "#e10000", "#e1b000", "#e8e8e8"];

  return (
    <>
      <section className="products-details">
        <div className="container">
          <div className="products-info">
            <div className="products-info__details swiper-layout">
              {/* Миниатюры слева */}
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                direction={"vertical"}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="products-info__small-img img1">
                    <img src={ProDetIphone} alt="thumb-1" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="products-info__small-img">
                    <img src={ProDetIphoneBig2} alt="thumb-3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products-info__small-img">
                    <img src={ProDetIphoneBig3} alt="thumb-4" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="products-info__small-img">
                    <img src={ProDetIphoneBig4} alt="thumb-5" />
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Основное изображение */}
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src={ProDetIphone} alt="nature-1" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={ProDetIphoneBig2} alt="nature-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProDetIphoneBig3} alt="nature-4" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProDetIphoneBig4} alt="nature-5" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="products-info__right">
              <h1 className="right__title">Apple iPhone 14 Pro Max</h1>
              <div className="right__price">
                <p className="right-price__text">1399$</p>{" "}
                <span className="discount">$1499</span>
              </div>
              <div className="right__select-color">
                <p className="right__color-text">Select color :</p>
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      backgroundColor: color,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "none",
                      transform:
                        selectedColor === color ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    }}
                  ></button>
                ))}
              </div>
              <div className="right-spec">
                <div className="spec-item">
                  <p className="spec-item__subtitle">Screen size</p>
                  <p className="spec-item-subtitle title">6.7"</p>
                </div>
                <div className="spec-item">
                  <p className="spec-item__subtitle">CPU</p>
                  <p className="spec-item-subtitle title">Apple A16 Bionic</p>
                </div>
                <div className="spec-item">
                  <p className="spec-item__subtitle">Number of Cores</p>
                  <p className="spec-item-subtitle title">6</p>
                </div>
                <div className="spec-item">
                  <p className="spec-item__subtitle">Main camera</p>
                  <p className="spec-item-subtitle title">48-12 -12 MP</p>
                </div>
                <div className="spec-item">
                  <p className="spec-item__subtitle">Front-camera</p>
                  <p className="spec-item-subtitle title">12 MP</p>
                </div>
                <div className="spec-item">
                  <p className="spec-item__subtitle">Battery capacity</p>
                  <p className="spec-item-subtitle title">4323 mAh</p>
                </div>
              </div>
              <p className="right__desc">
                Enhanced capabilities thanks toan enlarged display of 6.7
                inchesand work without rechargingthroughout the day. Incredible
                photosas in weak, yesand in bright lightusing the new systemwith
                two cameras more...
              </p>
              <div className="right-buttons">
                <button className="right-button">Add to Wishlist</button>
                <button className="right-button card">Add to Card</button>
              </div>
              <div className="right-info-product">
                <div className="info-product-item">
                  <div className="info-product-icon">
                    <InfoProductDel />
                  </div>
                  <div className="info-products-text">
                    <p className="info-product-item-text gray">Free Delivery</p>
                    <p className="info-product-item-text">1-2 day</p>
                  </div>
                </div>
                <div className="info-product-item">
                  <div className="info-product-icon"></div>

                  <div className="info-products-text">
                    <p className="info-product-item-text gray">In Stock</p>
                    <p className="info-product-item-text">Today</p>
                  </div>
                </div>
                <div className="info-product-item">
                  <div className="info-product-icon"></div>
                  <div className="info-products-text">
                    {" "}
                    <p className="info-product-item-text gray">Guaranteed</p>
                    <p className="info-product-item-text">1 year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="details">
        <div className="container">
          <div className="details__wrap">
            <div className="details__main-text">
              <p className="details__title">Details</p>
              <p className="details__subtitle">
                Just as a book is judged by its cover, the first thing you
                notice when you pick up a modern smartphone is the display.
                Nothing surprising, because advanced technologies allow you to
                practically level the display frames and cutouts for the front
                camera and speaker, leaving no room for bold design solutions.
                And how good that in such realities Apple everything is fine
                with displays. Both critics and mass consumers always praise the
                quality of the picture provided by the products of the
                Californian brand. And last year's 6.7-inch Retina panels, which
                had ProMotion, caused real admiration for many.
              </p>
            </div>
            <div className="details__product-main">
              <div className="details__product-wrap">
                <p className="details__product-title">Screen</p>
                <div className="details__product-item">
                  <p className="details__product-spec">Screen diagonal</p>
                  <p className="details__product-spec">6.7"</p>
                </div>
                <div className="details__product-item">
                  <p className="details__product-spec">The screen resolution</p>
                  <p className="details__product-spec">2796x1290</p>
                </div>
                <div className="details__product-item">
                  <p className="details__product-spec">
                    The screen refresh rate
                  </p>
                  <p className="details__product-spec">120Hz</p>
                </div>
                <div className="details__product-item">
                  <p className="details__product-spec">The pixel density</p>
                  <p className="details__product-spec">460 ppi</p>
                </div>
                <div className="details__product-item">
                  <p className="details__product-spec">Screen type</p>
                  <p className="details__product-spec">OLED</p>
                </div>
                <div className="details__product-item">
                  <p className="details__product-spec">Additionally</p>
                  <div className="details__product-spec">
                    <div className="details__product-spec-wrap">
                      <div className="details__product-spec-item">
                        <p className="details__product-spec-text">
                          Dynamic Island
                        </p>
                        <p className="details__product-spec-text">
                          Always-On display
                        </p>
                        <p className="details__product-spec-text">
                          HDR display
                        </p>
                        <p className="details__product-spec-text">True Tone</p>
                        <p className="details__product-spec-text">
                          Wide color (P3)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details__product-wrap">
                <p className="details__product-title">CPU</p>
                <div className="details__product-item">
                  <p className="details__product-spec">CPU</p>
                  <p className="details__product-spec">A16 Bionic</p>
                </div>
                <div className="details__product-item">
                  <p className="details__product-spec">Number of cores</p>
                  <p className="details__product-spec">6</p>
                </div>
              </div>
            </div>
            <div className="details__product-buttons">
              <button className="details__product-more">View More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="reviews-wrapper">
            <p className="reviews__title">Reviews</p>
            <div className="reviews__stars-wrap">
              <div className="reviews__stars">
                <p className="reviews__stars-rate">4.8</p>
                <p className="reviews__stars-rate-p">of 125 reviews</p>
              </div>
              <div className="reviews__stars-info">
                <div className="reviews__level">
                  <div className="reviews__level-item">
                    <p className="reviews-level-text">Excellent</p>
                    <p className="reviews-level-number">100</p>
                  </div>
                  <div className="reviews__level-item">
                    <p className="reviews-level-text">Excellent</p>
                    <p className="reviews-level-number">100</p>
                  </div>
                  <div className="reviews__level-item">
                    <p className="reviews-level-text">Excellent</p>
                    <p className="reviews-level-number">100</p>
                  </div>
                  <div className="reviews__level-item">
                    <p className="reviews-level-text">Excellent</p>
                    <p className="reviews-level-number">100</p>
                  </div>
                  <div className="reviews__level-item">
                    <p className="reviews-level-text">Excellent</p>
                    <p className="reviews-level-number">100</p>
                  </div>
                </div>
              </div>
            </div>
            <input
              placeholder="Leave Comment"
              type="text"
              className="reviews__comment"
            />
          </div>
        </div>
      </section>
      <section className="related">
        <div className="container">
          <p className="related__title">Related Products</p>
          <div className="related__products">
            <div className="related__products-item">
              <img src={RelatedIphone14} alt="a" />
              <div className="related__products-content">
                <div className="related__products-texts">
                  <p className="related__products-title">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="related__products-price">$1437</p>
                </div>
                <button className="related__products-buy">Buy Now</button>
              </div>
            </div>
            <div className="related__products-item">
              <img src={RelatedIphone14} alt="a" />

              <div className="related__products-content">
                <div className="related__products-texts">
                  <p className="related__products-title">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="related__products-price">$1437</p>
                </div>
                <button className="related__products-buy">Buy Now</button>
              </div>
            </div>
            <div className="related__products-item">
              {/* <img src="" alt="" /> */}
              <img src={RelatedIphone14} alt="a" />

              <div className="related__products-content">
                <div className="related__products-texts">
                  <p className="related__products-title">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="related__products-price">$1437</p>
                </div>
                <button className="related__products-buy">Buy Now</button>
              </div>
            </div>
            <div className="related__products-item">
              <img src={RelatedIphone14} alt="a" />

              <div className="related__products-content">
                <div className="related__products-texts">
                  <p className="related__products-title">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="related__products-price">$1437</p>
                </div>
                <button className="related__products-buy">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
