import React, { Component } from 'react'
import { CardGroup, Card,Container,Navbar } from 'react-bootstrap'
import TwoSectionIcon1 from '../../../images/TwoSectionIcon1.svg'
import TwoSectionIcon2 from '../../../images/TwoSectionIcon2.svg'
import TwoSectionIcon3 from '../../../images/TwoSectionIcon3.svg'


export default class TwoSection extends Component {
    render() {
        return (
            <div>
                <CardGroup style={{
                    padding:'20px'
                }}>
                    <Card style={{
                        marginTop: '10%',
                        marginBottom: '10%',
                        backgroundColor: '#E5FFFF',
                        borderRadius:'20px',
                        marginLeft:'20px',
                        marginRight:'20px'
                    }}>
                        <img src={TwoSectionIcon1} style={{
                            marginTop: '10%',
                            marginBottom: '10%',
                        }}></img>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text style={{ color: 'grey' }}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{
                        marginTop: '10%',
                        marginBottom: '10%',
                        backgroundColor: '#E5FFFF',
                        borderRadius:'20px',
                        marginLeft:'20px',
                        marginRight:'20px'
                    }}>
                        <img src={TwoSectionIcon2} style={{
                            marginTop: '10%',
                            marginBottom: '10%',
                        }}></img>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text style={{ color: 'grey' }}>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{
                        marginTop: '10%',
                        marginBottom: '10%',
                        backgroundColor: '#E5FFFF',
                        borderRadius:'20px',
                        marginLeft:'20px',
                        marginRight:'20px'
                    }}>
                        <img src={TwoSectionIcon3} style={{
                            marginTop: '10%',
                            marginBottom: '10%',
                        }}></img>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text style={{ color: 'grey' }}>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
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
