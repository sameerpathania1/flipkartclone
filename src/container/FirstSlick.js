import React from "react";
import Slider from "react-slick";

const items = [
    {
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/cd3ad1af9f777f5b.jpg?q=50",
        alt: "pic1"
    },
    {
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/4d27b9be393bb4c8.jpg?q=50",
        alt: "pic2"
    },
    {
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/8fc322f4f35fd033.jpg?q=50",
        alt: "pic3"
    },
    {
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/967669f010817648.jpg?q=50",
        alt: "pic4"
    },
    {
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/59613b188cbe1afd.jpg?q=50",
        alt: "pic5"
    },
    {
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/c6744438d8185d10.jpg?q=50",
        alt: "pic6"
    },
]

export default class FirstSlick extends React.Component {
    render() {
        const settings = {
            dots: false,
            padding: 0,
            margin: 0,
            infinite: true,
            // arrows: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            slidesToScroll: 1
        }

        const imgstyle = {
            width: "100%",
            height: '100%',
            cursor: "pointer"
        }
        return (
            <div>
                <div style={{ padding: "20px 5px 10px 5px" }}>
                    <Slider {...settings} className="top" >
                        {items.map((i, k) => {
                            return (
                                <div>
                                    <div style={{ height: 280 }}>
                                        <img style={imgstyle} src={i.url} alt={i.alt} key={k} />
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}




