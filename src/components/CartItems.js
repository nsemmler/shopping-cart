import React from 'react'
import CartItem from './CartItem'

const CartItems = ({ items }) => {
  // const cart =

  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        { items.map((item, i) => {
          return <CartItem key={ i } product={ item.product } price={ (item.product.priceInCents / 100) } quantity={ item.quantity } />
        }) }
      </div>
    </div>
  )
}

export default CartItems
