import './App.css';

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Basket from'./Pages/Basket'
import Register from './Pages/Register'

export default class App extends Component {
  render() {
    return (
      <div>
         <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='login' element={<Login/>}/>
          <Route exect path='register' element={<Register/>}/>
          <Route exect path='basket' element={<Basket/>}/>
        </Routes>
      </div>
    )
  }
}