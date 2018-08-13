import React, { Component } from 'react';
import CartHeader from './components/CartHeader'
import CartFolder from './components/CartFolder'
import CartItems from './components/CartItems'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems />
        <CartFolder />
      </div>
    );
  }
}

export default App;
