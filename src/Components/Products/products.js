import React, { Component } from 'react';
import Data from "./products.json"
import './products.css';

function Products() {
    return (
        <div className="Products">
            <div className="Items">
                {Data.map((items, index)=> {
                    return (

                        <div className="itemmm">
                            <div className="itemm">  </div>
                            <div className="item">
                            <img className="itemimg"src={items.URL}/>
                                <h4> {items.name} </h4>
                                <h3> ${items.price}.00 </h3>
                                <p> {items.description} </p>
                                <button className="shopbtn">Buy Now</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Products