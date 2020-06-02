import React, { Component } from 'react';
import Data from "./products.json"
import './products.css';

function Products() {
    return (
        <div className="Products">
            <div className="Items">
                {Data.map((items, index)=> {
                    return (

                        <div className="items">
                            <div className="imgcards">  </div>
                            <div className="iteminfo">
                                <h4> {items.name} </h4>
                                <h3> {items.price} </h3>
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