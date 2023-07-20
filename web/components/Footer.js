import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "../images/new-html/footerlogo.png";
import whatsAap from "../images/new-html/whatsap.png";
import email from "../images/new-html/email.png";
import loc from "../images/new-html/loc.png";
import Cookie from "js-cookie";

const Footer = () => {

    // Show And Hide Work On Members Tab
    const token = Cookie.get('token');

    return (
        <footer>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <Link href="/" className="footerLogo">
                            <Image src={logo} className="img-fluid" alt={logo}/>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <div className="quickList">
                            <h2>Quick Links</h2>
                            <div className="d-flex">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/families">Families</Link></li>
                                    <li><Link href="/speakers">Speakers</Link></li>
                                    <li><Link href="/registration">Registration</Link></li>
                                </ul>
                                <ul>
                                    {!token && (
                                        <li className="">
                                            <Link href="/members"> Members </Link>
                                        </li>
                                    )}
                                    <li><Link href="/contact">Contact Us</Link></li>
                                    <li><Link href="/donate">Donation</Link></li>
                                    <li><Link href="/terms">Terms & Conditions</Link></li>
                                    <li><Link href="/privacy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="quickList">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="calFoter">
                            <a href="tel:(817) 917-5663">
                                <figure><Image src={whatsAap} className="img-fluid" alt={whatsAap}/></figure>
                                <span>(817) 917-5663</span>
                            </a>
                            <a href="mailto:tcaregistrar@gmail.com">
                                <figure><Image src={email} className="img-fluid" alt={email}/></figure>
                                <span>tcaregistrar@gmail.com</span>
                            </a>
                            <a>
                                <figure><Image src={loc} className="img-fluid" alt={loc}/></figure>
                                <span>Scottsville Camp & Conference Center</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row copyRight">
                    <div className="col-md-12">
                        <p>Copyright © 2023 Texas Christian Ashram. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
