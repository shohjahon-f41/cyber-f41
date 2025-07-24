import React from 'react';
import { SaleProduct } from '../../data/data';

function Sale() {
    return (
        <section className="sale">
            <div className="container">
                <div className="sale-wrap">
                    <h1 className="sale-title">Discounts up to -50%</h1>
                    <div className="products-card">
                        <div className="products-cards-items">
                            {
                                SaleProduct.map((item) => (
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

export default Sale
