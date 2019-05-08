import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap"
import Slider from "react-slick";
import Card from "./ItemContainer"

class SlickContainer extends Component {
    state = {}
    render() {
        const settings = {
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            infinite: true,
            cssEase: 'linear',
            rtl: true
        };



        return (
            <div style={{ backgroundColor: "white", margin: "20px 5px", boxShadow: "1px 2px 3px #ccc" }}>
                <Row className="p-0 m-0">
                    <Col style={{ float: 'left', padding: 0 }}><h3 style={{ float: "left", paddingLeft: 20, marginTop: "20px" }}>Special offers</h3></Col>
                    <Col style={{ padding: 0 }}><button className="viewallbtn">VIEW ALL</button></Col >
                </Row>
                <hr />
                <Slider {...settings}>
                    {[...Array(8)].map((i, k) => <Card key={k} />)}
                </Slider>
            </div>
        )
    }
}

export default SlickContainer;