import React, { Component } from 'react';
import Data from "./products.json"
import './products.css';




function Products() {
    return (
        <div className="Products">
            <div className="wrapper">
                <h1 className="heading">Shop <span>now</span></h1>
                <div className="items">
                    <div className="item">
                        {Data.map((products) => {
                            return (
                                <div>
                                    <img className="itemimg" src={products.URL} />
                                    <h4 className="itemcaption"> {products.name} </h4>
                                    <h3> ${products.price}.00 </h3>
                                    <p> {products.description} </p>
                                    <a href="https://www.manduka.com/pages/collections-yoga-mats?cid=1911440360&aid=70625284455&keyword=%2Bmanduka+%2Byoga+%2Bmats&kid=301897786502&gclid=CjwKCAjw8df2BRA3EiwAvfZWaBxj_EOXh6t_5Q_Eqo0UL2Ul4r6wJE0ZwD_s6Nn-5PDDW0Q-8bSO5BoCNx8QAvD_BwE"><button className="shopbtn" >Buy Now</button></a>
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