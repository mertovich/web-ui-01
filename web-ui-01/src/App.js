import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import OneSection from './Component/OneSection';
import TwoSection from './Component/TwoSection'
import ThirdSection from './Component/ThirdSection'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <OneSection />
        <TwoSection />
        <ThirdSection />
      </div>
    )
  }
}

