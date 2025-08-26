import React, {useContext, useEffect, useState} from 'react';
import {ProductsItem} from '../../data/data';
import {CartContext} from '../../contexts/CartContext';
import {LanguageContext} from '../../contexts/LanguageContext';
import {Link} from 'react-router-dom';

function Products() {
	const [products, setProducts] = useState([]);
	const {addCart} = useContext(CartContext);
	const {language} = useContext(LanguageContext);

	function getProducts() {
		fetch('https://302d37aacffa4da5.mokky.dev/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}

	useEffect(() => {getProducts()}, [])

	// console.log(CartContext);

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
							{ProductsItem.map((item) => (
								<div className="products-cards-item" key={item.id}>
									<div className="products-item-icon">{item.svg}</div>
									<Link className="products-item-image" to={`/product-details/${item.id}`}>
										<img src={item.img} alt="Iphone" />
									</Link>
									<div className="products-item-sub">
										<p className="products-item-subtitle">{language === 'uz' ? item.name_uz : item.name}</p>
										<p className="products-item-buy">{item.buy}</p>
										<button className="products-item-btn" onClick={() => addCart(item)}>
											Buy now
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Products;
