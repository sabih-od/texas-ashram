import {apiUrl, errorResponse, exceptionResponse, getToken, successResponse, urlWithParams} from "../services/global";
import {useRouter} from 'next/router';
import React, {useState, useEffect, useCallback} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import {authUser, signup} from '../services/authService';
import {loginUser} from '../services/authService';
import * as toastr from "../../admin/src/store/slices/announcementSlice";
import Cookies from "js-cookie";

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

    // signup and login work
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // const handleClickShowPassword = () => {
    //     setShowPassword(!showPassword);
    // };
    //
    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    const router = useRouter();

    // Sign-up Request
    const handleSignup = async (e) => {
        e.preventDefault();

        // Call the signup function with the input values
        const result = await signup(first_name, last_name, email, phone, password);

        if (result.data.success === true) {
            await router.push('/');
            toastr.success('Signup successful!', 'Success');
        } else {
            setErrorMessage(result.error);
            router.back();
            toastr.errors('Error occurred during signup', 'Error');
        }
    }

    // Login Request
    const loginHandle = async (e) => {
        e.preventDefault();

        const result = await loginUser(email, password);

        if (result.data.success === true) {
            await router.push('/');
            toastr.success('Login successful!', 'Success');
        } else {
            setErrorMessage(result.error);
            router.back();
            toastr.errors('Error occurred during login', 'Error');
        }
    }


    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>My account</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
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
                            {errorMessage && <div>{errorMessage}</div>}
                            <div className="loginForm">
                                <h2>LOGIN</h2>
                                <form onSubmit={loginHandle}>
                                    <label htmlFor="">Username or email address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <input type="email" id="user_email" name="user_email" className="form-control"
                                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <br/>
                                    <label htmlFor="">Password <span className="text-danger">*</span></label>
                                    <br/>
                                    <input type="password" id="password" name="password" className="form-control mb-4"
                                           value={password} onChange={(e) => setPassword(e.target.value)}/>

                                    <button className="btn themeBtn green w-100" type="submit">Login</button>
                                    <div className="d-flex justify-content-between mt-4">
                                        <label htmlFor="remember" className="remember">
                                            <input type="checkbox" className="mr-2" id="remember"/>
                                            <span className="checkmark"/>
                                            Remember me
                                        </label>

                                        <a href="#" className="btn-link">Lost your Password?</a>
                                    </div>
                                </form>
                            </div>

                            {errorMessage && <div>{errorMessage}</div>}
                            <div className="loginForm">
                                <h2>REGISTER</h2>
                                <form onSubmit={handleSignup}>
                                    <label htmlFor="first_name">First Name <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <input type="text" id="first_name" name="first_name" className="form-control"
                                           value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
                                    <br/>
                                    <label htmlFor="last_name">Last Name <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <input type="text" id="last_name" name="last_name" className="form-control"
                                           value={last_name} onChange={(e) => setLastName(e.target.value)}/>
                                    <br/>
                                    <label htmlFor="user_email">Username or Email Address <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <input type="email" id="user_email" name="user_email" className="form-control"
                                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <br/>
                                    <label htmlFor="phone">Phone Number <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <input type="number" id="phone" name="phone" className="form-control"
                                           value={phone} onChange={(e) => setPhoneNumber(e.target.value)}/>

                                    <br/>
                                    <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                    <br/>
                                    <input type="password" id="password" name="password" className="form-control mb-4"
                                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    {/*<label htmlFor="password">Password <span
                                            className="text-danger">*</span></label>
                                        <br/>
                                        <input type="password" id="password" name="password"
                                               className="form-control mb-4" value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>*/}
                                    <button className="btn themeBtn green w-100" type="submit">Register</button>
                                </form>
                                {/*<form action="">
                                    <label htmlFor="">First Name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <input type="text" name="first_name" className="form-control"/>
                                    <br/>
                                    <label htmlFor="">Last Name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <input type="text" name="last_name" className="form-control"/>
                                    <br/>
                                    <label htmlFor="">Username or email address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <input type="email" name="user_email" className="form-control"/>
                                    <br/>
                                    <label htmlFor="">Phone Number <span className="text-danger">*</span></label>
                                    <br/>
                                    <input type="number" name="phone" className="form-control"/>
                                    <br/>
                                    <label htmlFor="">Password <span className="text-danger">*</span></label>
                                    <br/>
                                    <input type="password" name="password" className="form-control mb-4"/>
                                    <label htmlFor="">Confirm Password <span className="text-danger">*</span></label>
                                    <br/>
                                    <input type="password" name="password_confirmation" className="form-control mb-4"/>

                                    <button className="btn themeBtn green w-100">Login</button>
                                </form>*/}

                            </div>
                        </div>
                        <div className="col-md-6 border-left text-center">
                            <div className="col-md-11 mx-auto">
                                <h2>REGISTER</h2>
                                <p>Registering for this site allows you to access your order status and history.
                                    Just
                                    fill in the fields below, and we'll get a new account set up for you in no time.
                                    We
                                    will only ask you for information necessary to make the purchase process faster
                                    and
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