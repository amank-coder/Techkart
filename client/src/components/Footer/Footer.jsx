import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
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
                    <span className="text text-t" onClick={()=> navigate(`/category?cat=Headphone`)}>Headphones</span>
                    <span className="text text-t" onClick={()=> navigate(`/category?cat=Smartwatch`)}>Smart Watches</span>
                    <span className="text text-t" onClick={()=> navigate(`/category?cat=speaker`)}>Bluetooth Speaker</span>
                    <span className="text text-t" onClick={()=> navigate(`/category?cat=Earbuds`)}>Wireless Earbuds</span>
                    <span className="text text-t">Home Theatre</span>
                    <span className="text text-t">Projector</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text text-t">Home</span>
                    <span className="text text-t">About</span>
                    <span className="text text-t">Privacy Ploicy</span>
                    <span className="text text-t">Returns</span>
                    <span className="text text-t">Terms & Consitions</span>
                    <span className="text text-t">Contact Us</span>
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
