import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div class="contact">




                <div id="error"></div>
                <form id="myForm" onsubmit="validate()">

                    <div id="contact-pic-wrapper"> <img id="contact-pic" src="/img/photo-1515332624078-a1273bf79707.jpeg" alt="good-vibes"/></div>

                    <div class="contact-wrapper">
                        <h2>Talk to me!</h2>
                        <label for="name">Name</label>
                        <input type="text" id="name" class="input-field" required />
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" class="input-field" required />
                        <label for="email">Email</label>
                        <input type="text" id="email" class="input-field" required />
                        <label for="message">Message</label>
                        <textarea id="message" class="input-field" required></textarea>

                        <input type="submit" class="btn" />
                    </div>
                </form>


                <footer class="contact-footer-distributed">
                <img src="img/TheFloralYogi-Logo.png" alt="logo"/>

                    <div class="footer-link">
                        <a href="https://www.facebook.com/thefloralyogi/?ref=bookmarks"><i class="fa fa-facebook" ></i></a>
                        <a href="https://www.instagram.com/thafloralyogi/"><i class="fa fa-instagram" ></i></a>
                        <a href="https://www.pinterest.com/vrochelle1217/"><i class="fa fa-pinterest-p" ></i></a>
                        <p>The Floral Yogi &copy; 2020</p>
                    </div>

                    
                       
              
                </footer>



            </div>


        );
    }
}

export default Contact