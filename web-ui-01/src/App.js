import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import FirstCard from './Component/FirstCard';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FirstCard />
      </div>
    )
  }
}

