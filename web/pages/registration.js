import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import registration from "../images/registeration.jpeg";
import Link from "next/link";
import speaker from "../images/speaker1.png";
import fun from "../images/funning.jpg";
import qrCode from "../images/QR-Code.png";
import speaker2 from "../images/speaker2.png";

function Registration(props) {
    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Registration</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Registration</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}


            <section className="registrationpage innerPage">
                <div className="container">
                    <div className="col-md-9 row mx-auto align-items-center ">
                        <div className="col-md-8 px-5">
                            <p className="mb-3">To register and pay online, please click here: <Link href="/"> Online
                                Registration</Link></p>
                            <p className="mb-3">To print the registration form and mail it with a registration fee
                                check, please click here: <Link href="/">2023 Registration Form</Link>​</p>
                            <p className="mb-3">To fill out your family’s health forms in advance to save time at
                                check-in, please click here: <a href="">Printable Health Form</a></p>
                            <p className="mb-3">Important Note: You will need one Health Form for every person in your
                                family. There are two forms on each page. Please bring with you to the Ashram.</p>
                            <p className="mb-3">If you have any questions, please email us at <a
                                href="mailto:registration@texaschristianashram.org">registration@texaschristianashram.org</a> .
                            </p>
                            {/*href="mailto:tcaregistrar@gmail.com">tcaregistrar@gmail.com</a> .</p>*/}
                            {/*<!-- <br> -->*/}
                            {/*<strong><a href="">Scottsville Conference Center</a></strong>*/}
                        </div>
                        <div className="col-md-4 ">
                            <Image src={registration} className="img-fluid" alt="registration"/>
                        </div>
                    </div>
                </div>
            </section>

            {/*<div className="col-12">*/}
            {/*    <hr/>*/}
            {/*</div>*/}

            <section className="inner-about-section innerPage">
                <div className="container">
                    <h6 className="subheading text-secondary text-center">Texas Christian Ashram</h6>
                    <h1 className="heading text-center mt-4 mb-3">Upcoming Events</h1>
                    <div className="row mx-5">
                        <div className="col-md-3 mx-4">
                            <Image src={fun} className="img funny" alt="fun"/>
                        </div>
                        <div className="col-md-7 px-5">
                            {/*<h1 className="heading">Bob Hayes</h1>*/}
                            <p className="text">a) First Saturday of every month @8am – Morning Devotional and
                                Prayer</p>
                            <p className="text">b) July 13-18, 2024 – Summer Event</p>
                            <p>Permalink: <Link className="text-dark" target="_blank"
                                                href="https://forms.zohopublic.com/texaschristianashram/form/2024TexasChristianAshram/formperma/FSYLFpHhvePWUe2-4hPnIMp6BNC8hhpnB6yh4AxHROU">
                                https://forms.zohopublic.com/texaschristianashram/form/2024TexasChristianAshram/formperma/FSYLFpHhvePWUe2-4hPnIMp6BNC8hhpnB6yh4AxHROU
                            </Link>
                            </p>
                            <p>Shortened URL: <Link className="text-dark" target="_blank"
                                                    href="https://zfrmz.com/I95iNc1vYkc60D7920VB">https://zfrmz.com/I95iNc1vYkc60D7920VB </Link>
                            </p>
                            <h6 className="subheading text-secondary">QR CODE:</h6>
                        </div>
                        <div className="col-md-6 text-right mx-5">
                            <Image src={qrCode} className="img-fluid qr-code" alt="qrCode"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
        ;
}

export default Registration;