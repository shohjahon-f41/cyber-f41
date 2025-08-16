import React, {useContext} from 'react';
import {Products} from '../../data/data.jsx';
import CloseIcon from '../../assets/icons/CloseIcon.jsx';
import {CartContext} from '../../contexts/CartContext.jsx';

function ShoppingCardProducts() {
	const {cart, incrementData, decrementData, deleteItem, deleteAll} = useContext(CartContext);
	return (
		<div className="shopping-card-left">
			<div className="shopping-card-title">
				<h1>Shopping Cart</h1>
				<button onClick={deleteAll} className="shopping-card-delete-button">
					Delete All
				</button>
			</div>
			<div className="shopping-card-items">
				{cart.map((item) => (
					<div className="shopping-card-item" key={item.id}>
						<img src={item.img} alt={item.productCode} />
						<div className="shopping-card-item-datas">
							<div className="shopping-card-item-left">
								<div className="shopping-card-item-info">
									<h1>{item.title}</h1>
									<p>{item.productCode}</p>
								</div>
							</div>
							<div className="shopping-card-item-right">
								<div className="shopping-card-quantity-selector">
									<button
										onClick={() => {
											decrementData(item);
										}}
									>
										-
									</button>
									<p>{item.qty}</p>
									<button
										onClick={() => {
											incrementData(item);
										}}
									>
										+
									</button>
								</div>
								<h1>{item.productPrice}</h1>
								<button onClick={() => deleteItem(item)}>
									<CloseIcon />
								</button>
								{/* 54:54 */}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ShoppingCardProducts;
