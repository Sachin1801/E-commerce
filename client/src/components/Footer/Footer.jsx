import React from "react";
import "./Footer.scss";
import{FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Explore and elevate your tech experience with our wide range of electronic gadgets, 
                    including headphones, smartwatches, and Bluetooth speakers. Shop now for the latest in cutting-edge 
                    technology.</div>
                </div>
                <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    < FaLocationArrow />
                    <div className="text">
                        A1 261 2nd Floor Janakpuri, New Delhi - 110018
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone - +91 8287307141
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email : sachinadlakha7@gmail.com
                    </div>
                </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        2023 CREATED BY SACHIN ADLAKHA.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer> 
    );
};

export default Footer;
