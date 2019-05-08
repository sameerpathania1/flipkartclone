import React, { Component } from 'react';
import logopic from "../assests/240.jpeg";

class Header extends Component {

    state = {
        thiss: false
    }

    handleChange = () => {

        this.setState(prevState => {
            this.state.thiss = !prevState.thiss
        })

    }

    render() {
        return (
            <div className="header" variant="dark">
                <img className="logoimg" src={logopic} alt="logo-pic" />
                <form onSubmit="dsds">
                    <input className="searchinput" type="text" placeholder="Search for products and brands and more" />
                </form>
                <h6 className="loginsignup">Login & Signup</h6>
                <div className="dropdown">
                    <h6 className="dropbtn">More</h6>
                    <div className="dropdown-content">
                        <p>Notification Preferences</p>
                        <p>Sell on Flipkart</p>
                        <p>24*7 Customer Care</p>
                        <p>Advertise</p>
                        <p>Download App</p>
                    </div>
                </div>
                <h6>Cart</h6>
            </div>

        )
    }
}
export default Header;