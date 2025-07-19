import React from 'react'
import { ShoppingCardOrdering, ShoppingCardProducts } from '../components/Cart'
function Cart(){
  return (
    <>
      <div className="shopping-card">
        <div className="container">
          <div className="shopping-card-wrap">
            <ShoppingCardProducts />
            <ShoppingCardOrdering />
          </div>
        </div>
      </div>
    </>
  )}

export default Cart
