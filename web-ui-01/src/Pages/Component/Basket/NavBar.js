import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar style={{
                    backgroundColor: '#B2DFDB',
                }}>
                    <Container >
                        <Navbar.Brand href="#home">Basket</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}
