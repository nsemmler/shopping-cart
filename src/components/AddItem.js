import React, { Component } from 'react'
import CartItem from './CartItem'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: (this.props.cart.length + 1),
      product: "Mediocre Iron Watch",
      quantity: 0
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    const id = (this.props.cart.length + 1)
    const product = this.state.product
    const quantity = this.state.quantity
    this.props.addProduct({ id, product, quantity })

    this.setState({ id: (this.props.cart.length + 1), product: "Mediocre Iron Watch", quantity: 0 })
  }

  onChange = (e) => {
    this.setState({ [ e.target.name ]: e.target.value })
  }

  render () {
    return (
      <form onSubmit={ this.onSubmit }>
        <div className="form-container">
          <div>
            <label htmlFor="addedProductQuantity">Quantity</label>
            <input name="quantity" type="text" id="addedProductQuantity" placeholder="i.e. 1" onChange={ this.onChange } value={this.state.quantity}></input>
          </div>
          <div>
            <label htmlFor="productToAdd">Products</label>
            <select id="productToAdd" name="product" onChange={ this.onChange }>
              { this.props.products.map((product, i) => {
                return <option key={ i } name="product">{ product.name }</option>
              })}
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default AddItem
