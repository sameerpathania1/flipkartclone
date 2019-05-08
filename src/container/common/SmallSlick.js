import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap"
import Slider from "react-slick";

const items = [
    {
        img: "https://rukminim1.flixcart.com/image/312/312/jtx9evk0/mobile/j/r/z/vivo-y91i-vivo-1820-original-imafegpdzevxhhn2.jpeg?q=70",
        alt: "I kall K8 New(blue, 16gb)",
        name: "Free Nike Shoes",
        rating: "4354353",
        ratbtn: "4.99",
        price: "59,345",
        prevprice: "0,000",
        off: "100% off"
    },

]


class SmallSlick extends Component {
    state = {}
    render() {
        const settings = {
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 2,
            infinite: true,
            cssEase: 'linear',
            rtl: true
        };



        return (
            <div style={{ backgroundColor: "white", margin: "20px 5px", boxShadow: "1px 2px 3px #ccc", width: "80%" }}>
                <Row className="p-0 m-0">
                    <Col style={{ float: 'left', padding: 0 }}><h3 style={{ float: "left", paddingLeft: 20, marginTop: "20px" }}>Special offers</h3></Col>
                    <Col style={{ padding: 0 }}><button className="viewallbtn">VIEW ALL</button></Col >
                </Row>
                <hr />
                <Slider {...settings}>
                    {[...Array(7)].map((i, k) => <Card key={k} />)}
                </Slider>
            </div>
        )
    }
}

export default SmallSlick;

const styles = {
            width: "40%",
            height: "40%",
            margin: 'auto'
        }

const Card = () => {
        return (
            <div style={{ padding: 0, margin: 0, textAlign: 'center' }}>
                {items.map((i, k) => {
                    return (
                        <div style={{ margin: 0, padding: 0, height: "100%", width: '100%', backgroundColor: 'white', }}>
                            <img style={styles} src={i.img} alt={i.alt} />

                            <p style={{ margin: "20px 0px 0px 0px", padding: 0, fontSize: 15 }}>{i.name}</p>

                            <p style={{ margin: 0, marginBottom: -15, display: "-webkit-inline-box", fontSize: 15 }}>
                                <button style={{ border: "none", cursor: 'auto', background: "green", color: "white", fontSize: 13, padding: "0px 3px" }}>{i.ratbtn} <i class="fas fa-star"></i></button>

                                <p style={{ paddingLeft: 8, fonWeight: 500, color: "#878787" }}>({i.rating})</p>
                            </p>


                            <p style={{ margin: 0, padding: 0, fontSize: 14, display: "-webkit-inline-box" }}><p style={{ fontWeight: "bold", fontSize: 16 }}>{i.price}</p><del style={{ paddingLeft: 8, fonWeight: 500, color: "#878787" }}>{i.prevprice}</del> &nbsp; <p style={{ color: "green", fontSize: 13 }}>{i.off}</p></p>
                        </div>
                    )
                })}
            </div>
        )
}