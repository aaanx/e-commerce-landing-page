import React from "react";
import "./FooterSection.css";
import FacebookIcon from "../../images/facebook-icon-gradient.svg";
import GoogleIcon from "../../images/google-plus-icon-gradient.svg";
import InstagramIcon from "../../images/instagram-icon-gradient.svg";
import TwitterIcon from "../../images/twitter-icon-gradient.svg";

function FooterSection() {
return (
    <div className="footer-section">
        <h5 className="footer-section-title">Big Shop</h5>
        <ul className="footer-section-menu">
            <li className="footer-section-menu-item">Man</li>
            <li className="footer-section-menu-item">
                Woman
            </li>
            <li className="footer-section-menu-item">Kids</li>
            <li className="footer-section-menu-item">Bags</li>
            <li className="footer-section-menu-item">Watches</li>
            <li className="footer-section-menu-item">Toys</li>
        </ul>
        <div className="footer-section-social">
            <img src={FacebookIcon} className="footer-section-social-icon" />
            <img src={GoogleIcon} className="footer-section-social-icon" />
            {/* <img src={InstagramIcon} style={{ border: "1px solid black" }}/> */}
            <img src={TwitterIcon} className="footer-section-social-icon" />
        </div>
        <p className="footer-section-copyright">&copy; Copyright 20017 Big Shop by Victor Themes</p>
    </div>
)
}

export default FooterSection;