import React, { Component } from 'react'
import { Container, Col, Button } from 'reactstrap'
import {  } from 'react-bootstrap'

export default class TableComponent extends Component {
    render() {
        return (
            <div>
                <Col xs='12' style={{
                    marginTop: '1%'
                }}>
                    <Container>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Prodoct</th>
                                    <th>Pirace</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.cartList.map(prodoct => (
                                    <tr key={prodoct.id}>
                                        <td>{prodoct.prodoctName}</td>
                                        <td>{prodoct.pirace}</td>
                                        <td><Button color="success" outline>Buy</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Container>
                </Col>
            </div>
        )
    }
}
