import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Button } from 'reactstrap'
import BasketIcon from '../images/BasketIcon.svg'


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
                                    Basket <img src={BasketIcon} style={{
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
                                    Login
                                </Button>
                                <Button style={
                                    {backgroundColor:'#E5FFFF',
                                    color:'grey',borderRadius:'20px',
                                    borderColor:'#E5FFFF',
                                    paddingLeft:'20px',
                                    paddingRight:'20px'
                                    }}>
                                    Register
                                </Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
