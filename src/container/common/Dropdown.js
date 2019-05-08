import React, { Component } from 'react';
import { Container, Col, Row } from "react-bootstrap"

class Dropdown extends Component {
    state = {}
    render() {
        return (
            <Container className="Maindrop" fluid>
                <Row>
                    <Col className='dropdown' style={{ padding: 0 }}>
                        <h6 className="dropbtn2" >Electronics</h6>
                        <div className="dropdown-content">
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                        </div>
                    </Col>

                    <Col className='dropdown' style={{ padding: 0 }} >
                        <h6 className="dropbtn2" >TV & Appliances</h6>
                        <div className="dropdown-content">
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                        </div>
                    </Col>

                    <Col className='dropdown' style={{ padding: 0 }} >
                        <h6 className="dropbtn2" >Men</h6>
                        <div className="dropdown-content">
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                        </div>
                    </Col>

                    <Col className='dropdown' style={{ padding: 0 }} >
                        <h6 className="dropbtn2" >Woman</h6>
                        <div className="dropdown-content">
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                        </div>
                    </Col>

                    <Col className='dropdown' style={{ padding: 0 }}>
                        <h6 className="dropbtn2" >Baby & Kids</h6>
                        <div className="dropdown-content">
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                        </div>
                    </Col>

                    <Col className='dropdown' style={{ padding: 0 }}>
                        <h6 className="dropbtn2" >Sports, Books & More</h6>
                        <div className="dropdown-content">
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                            <p>mobile</p>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <h6 style={{marginTop: '15px'}}>Offer Zone</h6>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dropdown;