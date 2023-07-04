import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import registration from "../images/registeration.jpeg";

function Registration(props) {
    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Registration</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                            <p className="mb-3">To register and pay online, please click here: <a href=""> Online
                                Registration</a></p>
                            <p className="mb-3">To print the registration form and mail it with a registration fee
                                check, please click here: <a href="">2023 Registration Form</a>​</p>
                            <p className="mb-3">To fill out your family’s health forms in advance to save time at
                                check-in, please click here: <a href="">Printable Health Form</a></p>
                            <p className="mb-3">Important Note: You will need one Health Form for every person in your
                                family. There are two forms on each page. Please bring with you to the Ashram.</p>
                            <p className="mb-3">If you have any questions, please contact Stephanie at <a
                                href="mailto:tcaregistrar@gmail.com">tcaregistrar@gmail.com</a> .</p>
                            {/*<!-- <br> -->*/}
                            <strong><a href="">Scottsville Conference Center</a></strong>
                        </div>
                        <div className="col-md-4 ">
                            <Image src={registration} className="img-fluid" alt="registration" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
);
}

export default Registration;