import React from "react"

const items = [
   {
      url: "https://rukminim1.flixcart.com/flap/960/960/image/2a10bb7ba99b0b69.jpg?q=50",
      alt: "imag-card"

   },
   {
      url: "https://rukminim1.flixcart.com/flap/960/960/image/9a6c43e108a8448c.jpg?q=50",
      alt: "imag-card"
   },
   {
      url: "https://rukminim1.flixcart.com/flap/960/960/image/e43b9a1ea877e267.jpg?q=50",
      alt: "imag-card"
   }
]

const styles = {
   display: "flex",
   paddingLeft: "2px",
   paddingRight: '30px'
}
const styleimg = {
   width: "33.33%",
   height: "70%",
   margin: "5px",
   boxShadow: "1px 2px 3px #ccc",


}

const ImgCard = () => {
   return <div style={styles} >{items.map((i) => <img style={styleimg} src={i.url} alt={i.alt} />)}</div>
}
export default ImgCard;