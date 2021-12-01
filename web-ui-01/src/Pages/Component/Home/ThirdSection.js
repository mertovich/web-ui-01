import React, { Component } from 'react'
import { CardGroup, Card, Navbar, Container, Button } from 'react-bootstrap'
import ThirdSectionIcon from '../../../images/ThirdSectionIcon.svg'

export default class ThirdSection extends Component {
    render() {
        return (
            <div>
                <CardGroup style={{
                    padding: '20px'
                }}>
                    {this.props.prodoctList.map(prodoct=>(
                        <Card className="text-center" style={{
                            marginTop: '10%',
                            marginLeft: '10%',
                            marginRight: '10%',
                            marginBottom: '10%',
                            backgroundColor: '#E5FFFF',
                            borderRadius: '20px',
                            paddingBottom: '5%'
                        }}>
                            <img src={ThirdSectionIcon} style={{
                                marginTop: '10%',
                                marginBottom: '10%',
                            }}></img>
                            <Card.Body>
                                <Card.Title>{prodoct.prodoctName}</Card.Title>
                                <Card.Text style={{ color: 'grey', textAlign: 'center', paddingTop: '10px' }}>
                                    {prodoct.description}
                                </Card.Text>
                                <h3 style={{
                                    textAlign: 'center',
                                }}>$ {prodoct.pirace}</h3>
                                <Button onClick={()=>this.props.addToCart(prodoct)}  style={
                                    {
                                        backgroundColor: '#B2DFDB',
                                        color: 'grey', borderRadius: '20px',
                                        borderColor: '#B2DFDB',
                                        marginTop: '10%',
                                        paddingLeft: '20px',
                                        paddingRight: '20px'
                                    }}>
                                    Add
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </CardGroup>
                <Navbar style={{
                    backgroundColor: '#B2DFDB',
                    marginTop: '10%'
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
