import React from "react";
import Image from "next/image";
import Logo from "../images/new-html/logo.png";
import Link from "next/link";
import Cookie from "js-cookie";
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import PreLoader from "../pages/preLoader";
// import {initializeCustomScripts} from '../public/styles/js/custom.min';

const Menu = () => {

    // Logout Work Into Token
    const router = useRouter();
    const handleLogout = () => {
        clearSessionData();
        router.push('/members').then((r) => 'error');
        router.reload();
    };

    const clearSessionData = () => {
        localStorage.clear();
        Cookie.remove('token');
    };

    // Show And Hide Work On Members Tab
    const token = Cookie.get('token');

    // sidebar work start
    // useEffect(() => {
    //     initializeCustomScripts();
    // }, []);
    // sidebar work end

    return (
        <div>
            <header className="fixed">
                <div className="main-navigate">
                    <div className="an-navbar">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col col-md-4">
                                    <Link href="/" className="logo">
                                        <Image src={Logo} className="img-fluid" alt={Logo}/>
                                    </Link>
                                </div>
                                <div className="col col-md-8">
                                    <div className="d-flex">
                                        <Link href="/donate" className="themeBtn">donate</Link>
                                        {token && (
                                            <button type="submit" onClick={handleLogout} className="nav-link logoutBtn">
                                                Logout
                                            </button>
                                        )}
                                        <div className="HomeMenu">
                                            <button id="btn_close_sidebar" className="menu-toggler" type="button"
                                                    data-target="#overlayNavigation">
                                                <div className="d-inline-flex navbar-icon">
                                                    <span/>
                                                    <span/>
                                                    <span/>
                                                </div>
                                            </button>
                                            <nav className="navbar navbar-expand-lg top-nav">

                                            </nav>
                                            <div className="container">
                                                <div className="row justify-content-end">
                                                    <div className="col-md-12 text-end">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="navigation-menu" id="overlayNavigation">
                                            <div className="navigation-bg one"/>
                                            <div className="navigation-bg two"/>
                                            <div className="container-fluid h-100">
                                                <div className="row h-100 justify-content-left">
                                                    <div className="col-md-12 navigation-wrapper">
                                                        <div className="nav-inner">
                                                            <ul className="list-inline">
                                                                <li className="active mt-3">
                                                                    <Link href="/" className="nav-link">HOME</Link>
                                                                </li>
                                                                {/*<li className="">
                                                                    <Link href="/our-mission" className="nav-link">Our
                                                                        Mission</Link>
                                                                </li>*/}
                                                                <li className="">
                                                                    <Link href="/about" className="nav-link">
                                                                        About Us
                                                                    </Link>
                                                                </li>
                                                                <li className="">
                                                                    <Link href="/families"
                                                                          className="nav-link">Families</Link>
                                                                </li>
                                                                <li className="">
                                                                    <Link href="/speakers"
                                                                          className="nav-link"> Speakers</Link>
                                                                </li>
                                                                <li className="">
                                                                    <Link href="/registration" className="nav-link">
                                                                        Registration</Link>
                                                                </li>
                                                                {!token && (
                                                                    <li className="">
                                                                        <Link href="/members"
                                                                              className="nav-link"> Members </Link>
                                                                    </li>
                                                                )}
                                                                <li className="">
                                                                    <Link href="/contact"
                                                                          className="nav-link">Contact Us </Link>
                                                                </li>
                                                                <li className="">
                                                                    <Link href="/announcement"
                                                                          className="nav-link">Announcement</Link>
                                                                </li>
                                                                <li className="">
                                                                    <Link href="/books"
                                                                          className="nav-link">Books</Link>
                                                                </li>
                                                                {/*<li className="">*/}
                                                                {/*    <Link href="/chat-module"*/}
                                                                {/*          className="nav-link">Chat</Link>*/}
                                                                {/*</li>*/}
                                                                <li className="">
                                                                    <Link href="/events"
                                                                          className="nav-link">Events</Link>
                                                                </li>
                                                                {/*<li className="">*/}
                                                                {/*    <Link href="/notifications"*/}
                                                                {/*          className="nav-link">Notifications</Link>*/}
                                                                {/*</li>*/}
                                                                <li className="">
                                                                    <Link href="/request-prayer"
                                                                          className="nav-link">Requested Prayer</Link>
                                                                </li>
                                                                <li className="">
                                                                    <Link href="/sermons-teaching"
                                                                          className="nav-link">Sermons Teaching</Link>
                                                                </li>
                                                                {/*<li className="">
                                                                    <Link href="/testimonials"
                                                                          className="nav-link">Testimonials</Link>
                                                                </li>*/}
                                                                <li className="">
                                                                    <Link href="/prayer-request-form"
                                                                          className="nav-link">Prayer Request
                                                                        Form</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Menu;
