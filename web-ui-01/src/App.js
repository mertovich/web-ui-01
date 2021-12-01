import './App.css';

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Basket from './Pages/Basket'
import Register from './Pages/Register'

export default class App extends Component {
  state = {
    Prodoct: [
      { id: 1, prodoctName: 'Prodoct1', pirace: 200, description: 'This is a wider card with supporting text below as a natural lead-in toadditional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in toadditional content. This content is a little bit longer.' },
      { id: 2, prodoctName: 'Prodoct2', pirace: 400, description: 'This is a wider card with supporting text below as a natural lead-in toadditional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to' },
    ],
    Cart: [],
  }

  addToCart = (prodoct)=>{
    let cartList = this.state.Cart
    let result = cartList.find(c=>c.id === prodoct.id)
    if (result) {
      
    }else{
      cartList.push(prodoct)
    }
    this.setState({Cart:cartList})
  }
  render() {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={<Home prodoctList={this.state.Prodoct} addToCart={this.addToCart}/>} />
          <Route exact path='login' element={<Login />} />
          <Route exect path='register' element={<Register />} />
          <Route exect path='basket' element={<Basket  cartList={this.state.Cart}/>} />
        </Routes>
      </div>
    )
  }
}