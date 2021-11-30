import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Row, Button } from 'react-bootstrap'
import ImageFirstCard from '../images/ImageFirstCard.svg'
import { Navbar } from 'react-bootstrap'

export default class OneSection extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row xs='1' md='2' >
                        <Container variant='Top' style={{
                            color: 'grey',
                            marginTop: '20%'
                        }}>
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure </p>

                            <Button style={{
                                paddingLeft: '30px',
                                paddingRight: '30px',
                                borderRadius: '20px',
                                marginTop: '10%',
                                marginLeft: '40%',
                                color: 'grey',
                                backgroundColor: '#E5FFFF',
                                borderColor: '#E5FFFF'
                            }}>More</Button>

                        </Container>
                        <Container variant='Top' style={{
                            marginTop: '10%'
                        }}>
                            <img src={ImageFirstCard} width='100%'></img>
                        </Container>
                    </Row>
                </Container>
                
                <Navbar style={{
                     backgroundColor: '#B2DFDB',
                     marginTop:'10%'
                     }}>
                    <Container >
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
