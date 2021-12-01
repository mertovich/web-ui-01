import React, { Component } from 'react'
import TableComponent from './Component/Basket/TableComponent'
import NavBar from './Component/Basket/NavBar'

export default class Basket extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <TableComponent cartList={this.props.cartList}/>
            </div>
        )
    }
}
