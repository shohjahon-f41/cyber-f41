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
} from "../components/ProductDetails/index.js";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="product-details">
      <div className="product-info">
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
              <img src={ProDetIphone} alt="thumb-1" />
            </SwiperSlide>
           
            <SwiperSlide>
              <img src={ProDetIphone3} alt="thumb-3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ProDetIphone4} alt="thumb-4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ProDetIphone5} alt="thumb-5" />
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
              <img src={ProDetIphone2} alt="nature-3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ProDetIphone4} alt="nature-4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ProDetIphone5} alt="nature-5" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
