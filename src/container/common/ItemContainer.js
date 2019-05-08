import React, { Component } from 'react';
import pic2 from "../../assests/note52.jpg"

const items = [
    {
        img: "https://rukminim1.flixcart.com/image/312/312/jrs3mvk0/mobile/v/e/j/i-kall-k8-new-k8-new-original-imafdgsjsyfpswzr.jpeg?q=70",
        alt: "I kall K8 New(blue, 16gb)",
        name: "I Kall K8 NEW (Blue, 16 GB)",
        rating: "517",
        ratbtn: "3.5",
        price: "5,950",
        prevprice: "6,999",
        off: "15% off"
    },

]

class Card extends React.Component {
    state = {}
    render() {
        const styles = {
            width: "40%",
            height: "40%",
            margin: 'auto'
        }
        const { index = '' } = this.props;
        return (
            <div style={{ padding: 0, margin: 0, textAlign: 'center' }}>
                {/* <img style={{ paddingLeft: 40, width: "80%", height: "80%" }} src={pic2} alt="Cardimage" />
                    <p style={{ margin: 0, padding: 0 }}>Redmi Note 5 Pro</p>
                   <div></div> <p style={{ margin: 0, padding: 0 }} >Top Seller</p>
                    <p style={{ padding: 0 }}>$10,000</p>
 */}
                {items.map((i, k) => {
                    return (
                        <div style={{ margin: 0, padding: 0, height: "100%", width: '100%', backgroundColor: 'white', }}>
                            <img style={styles} src={i.img} alt={i.alt} />

                            <p style={{ margin: "15px 0px 0px 0px", padding: 0, fontSize: 15 }}>{i.name}</p>

                            <p style={{ margin: 0, marginBottom: -15, display: "-webkit-inline-box", fontSize: 15 }}> <button style={{ border: "none", cursor: 'auto', background: "green", color: "white", fontSize: 13, padding: "0px 3px" }}>{i.ratbtn} <i class="fas fa-star"></i></button><p style={{ paddingLeft: 8, fonWeight: 500, color: "#878787" }}>({i.rating})</p> </p>


                            <p style={{ margin: 0, padding: 0, fontSize: 14, display: "-webkit-inline-box" }}><p style={{ fontWeight: "bold" }}>{i.price}</p> &nbsp;&nbsp;<del>{i.prevprice}</del> &nbsp; <p style={{ color: "green", fontSize: 13 }}>{i.off}</p></p>

                        </div>
                    )
                })}


            </div>
        );
    }
}
export default Card; 