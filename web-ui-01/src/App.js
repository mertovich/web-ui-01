import './App.css';

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';

export default class App extends Component {
  render() {
    return (
      <div>
         <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='login' element={<Login/>}/>
        </Routes>
      </div>
    )
  }
}

