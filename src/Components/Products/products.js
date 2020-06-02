import React, { Component } from 'react';
import Data from "./products.json"
import './products.css';

function Products() {
    return (
        <div className="Products">
            <div className="wrapper">
            <h1 className="heading">Shop NOW</h1>
            <div className="items">
                <div className="item">
                    {Data.map((items) => {
                        return (


                            <div>
                                <img className="itemimg" src={items.URL} />
                                <h4 className="itemcaption"> {items.name} </h4>
                                <h3> ${items.price}.00 </h3>
                                <p> {items.description} </p>
                                <button className="shopbtn">Buy Now</button>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Products