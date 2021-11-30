import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import OneSection from './Component/OneSection';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <OneSection />
      </div>
    )
  }
}

