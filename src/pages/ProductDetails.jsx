import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  ProDetIphone,
  ProDetIphone2,
  ProDetIphone3,
  ProDetIphone4,
  ProDetIphone5,
  ProDetIphoneBig2,
  ProDetIphoneBig3,
  ProDetIphoneBig4,
} from "../components/ProductDetails/index.js";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="products-details">
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
              <div className="products-info__small-img">
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
      </div>
    </section>
  );
}
