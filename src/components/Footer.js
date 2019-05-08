import React from 'react';
import { Col, Row } from "react-bootstrap"


const Footer = () => {
    return (
        <div className="footer" fluid>

            <Row style={{ padding: "40px 60px" }} >

                <Col>
                    <p className="footerMain" >ABOUT</p>
                    <a>Contact Us</a>
                    <a>About Us</a>
                    <a>Flipkart Stories</a>
                    <a>Press</a>
                </Col>
                <Col>
                    <p className="footerMain">HELP</p>
                    <a>Payment</a>
                    <a>Shipping</a>
                    <a>Cancellation and Returns</a>
                    <a>FAQ</a>
                    <a>Report Infringement</a>
                </Col>
                <Col>
                    <p className="footerMain">POLICY</p>
                    <a>Return Policy</a>
                    <a>Terms of Use</a>
                    <a>Security</a>
                    <a>Privacy</a>
                    <a>Sitemap</a>
                    <a>EPR Compliance</a>
                </Col>
                <Col >
                    <p className="footerMain borderright">SOCIAL</p>
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>Youtube</a>
                    <a>Google Plus</a>
                </Col>
                <Col className="borderleft">
                    <p className="footerMain">Mail Us</p>
                    <p className="footerdetails">Flipkart Internet Pvt Ltd Block B (Begonia),
                        Ground Floor, Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Varthur Hobli, Bengaluru East Taluk,
                        Bengaluru District,
                        Karnataka, India, 560103.</p>
                </Col>
                <Col>
                    <p className="footerMain">Registered Office Address:</p>
                    <p className="footerdetails">Flipkart Internet Private Limited,
                        Vaishnavi Summit, Ground Floor, 7th Main,
                        80 Feet Road, 3rd Block,
                        Koramangala,
                        Bengaluru - 560034
                        India
                        CIN : U51109KA2012PTC066107
                        Telephone: 1800 208 9898</p>
                </Col>
            </Row>
            <Row style={{ padding: "20px 60px", borderTop: "1px solid #666666" }} >
                <Col>
                    <p>Sell on Flipkart</p>
                </Col>
                <Col>
                    <p>Advertise</p>
                </Col>
                <Col>
                    <p>Gift Cards</p>
                </Col>
                <Col>
                    <p>Help Center</p>
                </Col>

                <Col>
                    <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_2dd397.svg" alt="sponsord by ye sab" />
                </Col>

            </Row>

        </div>)
}
export default Footer;