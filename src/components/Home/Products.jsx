import React from 'react';
import { ProductsItem } from '../../data/data';

function Products() {
    return (
        <section className="products">
            <div className="container">
                <div className="products-wrap">
                    <div className="products-titles">
                        <p className="products-title">New Arrival</p>
                        <p className="products-title">Bestseller</p>
                        <p className="products-title">Featured Products</p>
                    </div>
                    <div className="products-card">
                        <div className="products-cards-items">
                            {
                                ProductsItem.map((item) => (
                                    <div className="products-cards-item" key={item.id}>
                                        <div className="products-item-icon">
                                            {item.svg}
                                        </div>
                                        <div className="products-item-img">
                                            <img src={item.img} alt="Iphone" />
                                        </div>
                                        <div className="products-item-sub">
                                            <p className="products-item-subtitle">{item.title}</p>
                                            <p className="products-item-buy">{item.buy}</p>
                                            <button className='products-item-btn'>Buy now</button>
                                        </div>
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
