import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import Cookies from "js-cookie";
import {useRouter} from 'next/router';

const Menu = () => {

    // Logout Work Into Token
    const router = useRouter();
    const handleLogout = () => {
        clearSessionData();

        router.push('/members');
    };

    const clearSessionData = () => {
        localStorage.clear();
        Cookies.remove('token');
    };

    // Show And Hide Work On Members Tab
    const token = Cookies.get('token');

    return (
        <div>
            <header className="">
                <div className="main-navigate">
                    <div className="an-navbar">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg p-0">
                                <a className="navbar-brand" href="/">
                                    <Image src={Logo} className="img-fluid" alt="img" width={300} height={200}/>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link active" href="/">Home <span
                                                className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/our-mission">Our Mission</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/families">Families</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/speakers">Speakers</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/registration">Registration</Link>
                                        </li>
                                        {!token ? (
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/members">Members</Link>
                                            </li>
                                        ) : null}
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/announcement">Announcement</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/books">Books</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/chat-module">Chat</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/events">Events</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/notifications">Notification</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/request-prayer">Requested Prayers</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                More
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item"
                                                      href="/prayer-request-form">Prayer Request Form</Link>
                                                <Link className="dropdown-item" href="/sermons-teaching">Sermons
                                                    Teaching</Link>
                                                <Link className="dropdown-item"
                                                      href="/testimonials">Testimonial</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link themeBtn" href="/donate">Donate</Link>
                                        </li>
                                        {token ? <li className="nav-item ms-2">
                                            <button className="logoutBtn" onClick={handleLogout}>Logout</button>
                                        </li> : null}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Menu;