// import React from 'react';
// import Layout from "../components/Layout";

import React, { useState, useEffect, useCallback } from 'react';
import Layout from "../components/Layout";

function Members(props) {
    const [login, setLogin] = useState(0);

    const loginForm = useCallback(() => {
        const loginFormElements = document.querySelectorAll(".loginForm");
        loginFormElements.forEach((ele) => {
            ele.style.display = "none";
        });

        if (login === 0) {
            setLogin(1);
        } else {
            setLogin(0);
        }
    }, [login, setLogin]);

    useEffect(() => {
        const loginFormElements = document.querySelectorAll(".loginForm");
        if (loginFormElements.length > 0) {
            loginFormElements[login].style.display = "block";
        }
    }, [login]);

    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>My account</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">My account</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}


            <section className="pb-0">
                <div className="container">
                    <div className="row mx-4">
                        <div className="col-md-6 pr-5">
                            <div className="loginForm">
                                <h2>LOGIN</h2>
                                <form action="">
                                    <label for="">Username or email address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <input type="text" className="form-control"/>
                                    <br/>
                                    <label for="">Password <span className="text-danger">*</span></label>
                                    <br/>
                                    <input type="text" className="form-control mb-4"/>

                                    <button className="btn themeBtn green w-100">Login</button>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div>
                                            <input type="checkbox" className="mr-2"/>Remember me
                                        </div>
                                        <a href="#" className="btn-link">Lost your Password?</a>
                                    </div>
                                </form>

                            </div>
                            <div className="loginForm">
                                <h2>REGISTER</h2>
                                <form action="">
                                    <label for="">Email address <span className="text-danger">*</span></label>
                                    <br/>
                                    <input type="text" className="form-control"/>

                                    <p className="mt-3">A link to set a new password will be sent to your email
                                        address.</p>
                                    <p>Your personal data will be used to support your experience throughout
                                        this website, to manage access to your account, and for other purposes
                                        described in our privacy policy.</p>

                                    <button className="btn themeBtn green w-100">Register</button>
                                </form>

                            </div>
                        </div>
                        <div className="col-md-6 border-left text-center">
                            <div className="col-md-11 mx-auto">
                                <h2>REGISTER</h2>
                                <p>Registering for this site allows you to access your order status and history. Just
                                    fill in the fields below, and we'll get a new account set up for you in no time. We
                                    will only ask you for information necessary to make the purchase process faster and
                                    easier.</p>
                                <button className="btn themeBtn" onClick={loginForm}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Members;