import React from 'react';
import Image from "next/image";
import logo from "../images/footerlogo.png";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-3">
                        <a href="#" className="footerLogo">
                            <Image src={logo} className="img-fluid" alt="img" width={300} height={200}/>
                        </a>
                        <p className="logotext">Come join us and experience the transformative power of community and
                            faith, as we journey together toward a deeper relationship with Jesus Christ.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="quickList">
                            <h2>Short Links</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/our-mission">Our Mission</a></li>
                                <li><a href="/families">Families</a></li>
                                <li><a href="/speakers">Speakers</a></li>
                                <li><a href="/contact">Contact us</a></li>
                                <li><a href="/testimonials">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="quickList">
                            <h2>Contact Info</h2>
                            <ul>
                                <li><span>Scottsville Camp & Conference Center</span></li>
                                <li><span>Email: <a
                                    href="mailto:tcaregistrar@gmail.com">tcaregistrar@gmail.com</a></span></li>
                                <li><span>Phone: <a href="tel:(123) 456 7890">(123) 456 7890</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                <p>Copyright © 2022 All Right Reserved</p>
            </div>
        </footer>
    );
}
export default Footer;
