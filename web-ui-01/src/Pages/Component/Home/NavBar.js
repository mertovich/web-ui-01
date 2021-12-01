import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Button } from 'reactstrap'
import BasketIcon from '../../../images/BasketIcon.svg'
import {Link} from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor: '#B2DFDB' }}>
                    <Container >
                        <Navbar.Brand href="#home">APP NAME</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <Button style={
                                    {backgroundColor:'#E5FFFF',
                                    color:'grey',borderRadius:'20px',
                                    borderColor:'#E5FFFF'
                                    }}>
                                    <Link to='basket' style={{textDecoration:'none',color:'grey'}}>Basket</Link> <img src={BasketIcon} style={{
                                        marginRight:'10px',
                                        marginLeft: '10px',
                                    }}></img>
                                </Button>
                                <Button style={
                                    {backgroundColor:'#E5FFFF',
                                    color:'grey',borderRadius:'20px',
                                    borderColor:'#E5FFFF',
                                    paddingLeft:'20px',
                                    paddingRight: '20px',
                                    marginLeft:'20px',
                                    marginRight:'20px'
                                    }}>
                                    <Link to='login' style={{textDecoration:'none',color:'grey'}}>Login</Link>
                                </Button>
                                <Button style={
                                    {backgroundColor:'#E5FFFF',
                                    color:'grey',borderRadius:'20px',
                                    borderColor:'#E5FFFF',
                                    paddingLeft:'20px',
                                    paddingRight:'20px'
                                    }}>
                                    <Link to='register' style={{textDecoration:'none',color:'grey'}}>Register</Link>
                                </Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
