import React, { Component } from 'react';
import AddItem from './AddItem'
import CartItem from './CartItem'


const cartItemsList = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
]

class CartItems extends Component {
  constructor (props) {
    super(props)
    // this.addProduct = this.addProduct.bind(this)
  }

  addProduct = (item) => {
    let theProduct = cartItemsList.filter(object => object.name === item.product)

    item = {
      id: item.id,
      product: theProduct[0],
      quantity: parseInt(item.quantity)
    }

    this.props.addItemToCart(item)
  }

  render () {
    { var totalPrice = 0.0 }

    return <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        { this.props.cart.map((item, i) => {
          totalPrice += ((item.product.priceInCents * parseInt(item.quantity)) / 100)
          return <CartItem key={ i } product={ item.product } price={ `$${(item.product.priceInCents / 100)}` } quantity={ item.quantity } />
        }) }
      </div>
      <p>Total Price: ${ totalPrice }</p>
      <AddItem products={ cartItemsList } addProduct={ this.addProduct } cart={ this.props.cart } />
    </div>
  }
}

export default CartItems
