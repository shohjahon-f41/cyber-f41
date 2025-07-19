import React, { useRef } from 'react'
import ArrowTop from '../assets/icons/ArrowTop'
import Search from '../assets/icons/SearchIcon'
import { ListTypes, CardsItem } from '../data/data'
import HeartCards from '../assets/icons/HeartCards'
import ArrowRight from "../assets/icons/ArrowRight"
import "../assets/scss/main.scss"

function Products() {

  let ButtonRef = useRef(null);
  let ProductsTypes = useRef(null)
  let CardItems = useRef(null)
  let ProductsTypesItems = useRef(null)
  function handleClick() {
    ButtonRef.current.classList.toggle("active");

    if (ButtonRef.current.classList.contains("active")) {
      ProductsTypes.current.classList.add("active")
    }
    else (
      ProductsTypes.current.classList.remove("active")
    )
    ProductsTypesItems.current.classList.add("active")

    console.log(ButtonRef);
  }


  return (
    <section className="products">
      <div className="container">
        <div className="home__wrap">
          <div className="home__wrap__item">
            <p className="home__wrap__sub">Home</p>
            <div className="home__wrap__arrow">
              <ArrowRight />
            </div>
          </div>
          <div className="home__wrap__item">
            <p className="home__wrap__sub">Catalog</p>
            <div className="home__wrap__arrow">
              <ArrowRight />
            </div>
          </div>
          <div className="home__wrap__item">
            <p className="home__wrap__sub">Smartphones</p>
            <div className="home__wrap__arrow">


            </div>
          </div>
        </div>
        <div className="products__wrap">

          <div className="products__left">
            <div className="products__options">
              <div className="products__left__heading">
                <h2 className="products__heading__title">Brand</h2>
                <button className="products__left__img" ref={ButtonRef} onClick={handleClick}>
                  <ArrowTop />
                </button>
              </div>

              <div className="products__heading__hidden"  >
                <div className="products__input">
                  <label htmlFor="products-search" className='products__input__label'><Search /></label>
                  <input type="text" id='products-search' placeholder='Search' className='products__input-item' />
                </div>
                <div className="products__types" ref={ProductsTypes} >
                  {
                    ListTypes.map(item => (
                      <div className="products__types__item" key={item.id}>
                        <input type="checkbox" className="cart__types__item__input" />
                        <div className="products__types__text">
                          <h3 className="products__types__text__title">{item.title}</h3>
                          <p className="products__types__text__subtitle">{item.subtitle}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>



              <div className="products__left__heading">
                <h2 className="products__heading__title">Battery capacity</h2>
                <button className="products__left__img" >
                  <ArrowTop />
                </button>
              </div>
              <div className="products__left__heading">
                <h2 className="products__heading__title">Screen Type</h2>
                <button className="products__left__img">
                  <ArrowTop />
                </button>
              </div>
              <div className="products__left__heading">
                <h2 className="products__heading__title">Screen Diognal</h2>
                <button className="products__left__img">
                  <ArrowTop />
                </button>
              </div>
              <div className="products__left__heading">
                <h2 className="products__heading__title">Protection class</h2>
                <button className="products__left__img">
                  <ArrowTop />
                </button>
              </div>
              <div className="products__left__heading">
                <h2 className="products__heading__title">Build-in memory</h2>
                <button className="products__left__img">
                  <ArrowTop />
                </button>
              </div>

            </div>
          </div>

          <div className="products__right">
            <div className="products__right__heading">
              <div className="products__right__heading__texts">
                <p className="products__cards__right__heading__texts__subtitle">Selected Products:</p>
                <p className="products__cards__right__heading__text__num">85</p>
              </div>
              <div className="products__cards__right__heading__input">
                <select name="" id="" className='products__cards__right__heading__select'>
                  <option value="" className='products__cards__right__heading__select__item'>By Rating</option>
                  <option value="" className='products__cards__right__heading__select__item'>By Price</option>
                  <option value="" className='products__cards__right__heading__select__item'>By Memory</option>
                  <option value="" className='products__cards__right__heading__select__item'>By Color</option>
                </select>
              </div>
            </div>
            <div className="products__right__cards">
              {
                CardsItem.map(item => (
                  <div className="products__right__cards__item" key={item.id}>
                    <div className='products__cards__item__heading__box'>
                      <div></div>
                      <button className="products__cards__item__heading__heart"><HeartCards /></button>
                    </div>
                    <div className="products__cards__item__img-box">
                      <img src={item.img} alt="" className="products__cards__item__img" />
                    </div>
                    <p className="products__cards__item__desc">{item.desc}</p>
                    <h2 className="products__cards__item__title">{item.price}</h2>
                    <button className="products__cards__item__button">Buy Now</button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products