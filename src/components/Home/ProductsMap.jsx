import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

function ProductsMap() {
    const {addCart} = useContext(CartContext)
    console.log(addCart)    
    
//   return (
//   )
}

export default ProductsMap