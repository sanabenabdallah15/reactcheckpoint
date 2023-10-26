import React from "react";
import Product from "./Product";
const Image = () => {
    return (
        <div >
            <img style={{height:300,width:300}} src={Product.image} alt="" />
        </div>
    )
}
export default Image;