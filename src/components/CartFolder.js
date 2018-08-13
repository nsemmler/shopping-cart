import React from 'react'

const CartFolder = ({ copyright }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">&copy; {copyright}</a>
    </nav>
  )
}

export default CartFolder
