import React, { Component } from 'react'
import NavBar from './Component/Home/NavBar'
import OneSection from './Component/Home/OneSection'
import TwoSection from './Component/Home/TwoSection'
import ThirdSection from './Component/Home/ThirdSection'

export default class Home extends Component {
    render() {
        return (
            <div>

                <NavBar/>
                <OneSection/>
                <TwoSection/>
                <ThirdSection prodoctList={this.props.prodoctList} addToCart={this.props.addToCart}/>
            </div>
        )
    }
}
