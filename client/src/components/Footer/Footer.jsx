import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    TechKart is a leading e-commerce platform offering high-quality electronic products and gadgets at competitive prices, with 
                    a focus on excellent customer service and staying at the forefront of technology trends.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                        TechKart Private Limited,
                        UFO Business Center, Patliputra
                        Patna, 800013,
                        Bihar, India
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            <a href="tel:766-732-0067">Mobile: 766 732 0067</a>
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            <a href="mailto:techwizard@gmail.com">Email: techwizard@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speaker</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projector</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Ploicy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Consitions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                    We accept all cards
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    )
};

export default Footer;
