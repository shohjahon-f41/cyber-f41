import React, { useRef } from 'react'
import ArrowTop from '../assets/scss/svg/ArrowTop'
import Search from '../assets/scss/svg/SearchIcon'
import "../assets/scss/main.scss"
import { ListTypes, CardsItem } from '../data/data'
import HeartCards from '../assets/scss/svg/HeartCards'
import ArrowRight from "../assets/scss/svg/ArrowRight"




function Cart() {

  let ButtonRef = useRef(null);
  let CartTypes = useRef(null)
  let CardItems = useRef(null)
  let CartTypesItems = useRef(null)
  function handleClick() {
     ButtonRef.current.classList.toggle("active");
  
if(ButtonRef.current.classList.contains("active")){
      CartTypes.current.classList.add("active")
    }
    else(
      CartTypes.current.classList.remove("active")
    )
    CartTypesItems.current.classList.add("active")
  
     }
    

  



  return (
    <section className="cart">
      <div className="container">
        <div className="home__wrap">
          <div className="home__wrap__item">
            <p className="home__wrap__sub">Home</p>
          <div className="home__wrap__arrow">
            <ArrowRight/>
          </div>
          </div>
          <div className="home__wrap__item">
            <p className="home__wrap__sub">Catalog</p>
          <div className="home__wrap__arrow">
            <ArrowRight/>
          </div>
          </div>
          <div className="home__wrap__item">
            <p className="home__wrap__sub">Smartphones</p>
          <div className="home__wrap__arrow">
           
           
          </div>
          </div>
        </div>
        <div className="cart__wrap">

          <div className="cart__left">
 <div className="cart__options">
            <div className="cart__left__heading">
              <h2 className="cart__heading__title">Brand</h2>
              <button className="cart__left__img" ref={ButtonRef} onClick={handleClick}>
                <ArrowTop />
              </button>
            </div>
           
              <div className="cart__heading__hidden"  >
                <div className="cart__input">
                  <label htmlFor="cart-search" className='cart__input__label'><Search /></label>
                  <input type="text" id='cart-search' placeholder='Search' className='cart__input-item' />
                </div>
                <div className="cart__types" ref={CartTypes} >
                  {
                    ListTypes.map(item => (
                      <div className="cart__types__item" key={item.id}>
                        <input type="checkbox" className="cart__types__item__input" />
                        <div className="cart__types__text">
                          <h3 className="cart__types__text__title">{item.title}</h3>
                          <p className="cart__types__text__subtitle">{item.subtitle}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>



              <div className="cart__left__heading">
                <h2 className="cart__heading__title">Battery capacity</h2>
                <button className="cart__left__img" >
                  <ArrowTop />
                </button>
              </div>
              <div className="cart__left__heading">
                <h2 className="cart__heading__title">Screen Type</h2>
                <button className="cart__left__img">
                  <ArrowTop />
                </button>
              </div>
              <div className="cart__left__heading">
                <h2 className="cart__heading__title">Screen Diognal</h2>
                <button className="cart__left__img">
                  <ArrowTop />
                </button>
              </div>
              <div className="cart__left__heading">
                <h2 className="cart__heading__title">Protection class</h2>
                <button className="cart__left__img">
                  <ArrowTop />
                </button>
              </div>
              <div className="cart__left__heading">
                <h2 className="cart__heading__title">Build-in memory</h2>
                <button className="cart__left__img">
                  <ArrowTop />
                </button>
              </div>

            </div>
          </div>

          <div className="cart__right">
            <div className="cart__right__heading">
              <div className="cart__right__heading__texts">
                <p className="cards__right__heading__texts__subtitle">Selected Products:</p>
                <p className="cards__right__heading__text__num">85</p>
              </div>
              <div className="cards__right__heading__input">
                <select name="" id="" className='cards__right__heading__select'>
                  <option value="" className='cards__right__heading__select__item'>By Rating</option>
                  <option value="" className='cards__right__heading__select__item'>By Price</option>
                  <option value="" className='cards__right__heading__select__item'>By Memory</option>
                  <option value="" className='cards__right__heading__select__item'>By Color</option>
                </select>
              </div>
            </div>
            <div className="cart__right__cards">
              {
           CardsItem.map(item=>(
            <div className="cart__right__cards__item" key={item.id}>
                  <div className='cart__cards__item__heading__box'>
                    <div></div>
                  <button className="cart__cards__item__heading__heart"><HeartCards/></button>
                  </div>
                  <div className="cart__cards__item__img-box">
                    <img src={item.img} alt="" className="cart__cards__item__img" />
                  </div>
                  <p className="cart__cards__item__desc">{item.desc}</p>
                  <h2 className="cart__cards__item__title">{item.price}</h2>
                  <button className="cart__cards__item__button">Buy Now</button>
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

export default Cart



