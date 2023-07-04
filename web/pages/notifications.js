import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import user1 from "../images/user1.png";
import loader from "../images/icon/loader.png";

function Notifications(props) {
    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1 className="mb-5">Notification</h1>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}


            {/*<!-- Books Section -->*/}
            <section className="notification-section pb-0">
                <div className="container custom-container ">
                    <div className="row mx-0">
                        <div className="col-lg-10 col-md-10">
                            <h2>Notifications <sup>(2)</sup></h2>
                        </div>
                        <div className="col-lg-2 text-right p-0 col">
                            <a href="#" className="links">Mark All Read</a>
                        </div>
                    </div>
                    <ul className="notificationlist">
                        <li className="active">
                            <span className="date">Jun 01, 2023</span>
                            <div className="notify-item ">
                                <figure>
                                    <Image src={user1} className="rounded-circle" alt="user 1" />
                                </figure>
                                <div>
                                    <h4 className="h4">John Doe</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <span className="time">09:40 AM</span>
                            </div>
                        </li>
                        <li className="active">
                            <span className="date">Jun 01, 2023</span>
                            <div className="notify-item">
                                <figure>
                                    <Image src={user1} className="rounded-circle" alt="user 1" />
                                </figure>
                                <div>
                                    <h4 className="h4">John Doe</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <span className="time">09:40 AM</span>
                            </div>
                        </li>
                        <li>
                            <span className="date">Jun 01, 2023</span>
                            <div className="notify-item">
                                <figure>
                                    <Image src={user1} className="rounded-circle" alt="user 1" />
                                </figure>
                                <div>
                                    <h4 className="h4">John Doe</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <span className="time">09:40 AM</span>
                            </div>
                        </li>
                        <li>
                            <span className="date">Jun 01, 2023</span>
                            <div className="notify-item">
                                <figure>
                                    <Image src={user1} className="rounded-circle" alt="user 1" />
                                </figure>
                                <div>
                                    <h4 className="h4">John Doe</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <span className="time">09:40 AM</span>
                            </div>
                        </li>
                        <li>
                            <span className="date">Jun 01, 2023</span>
                            <div className="notify-item">
                                <figure>
                                    <Image src={user1} className="rounded-circle" alt="user 1" />
                                </figure>
                                <div>
                                    <h4 className="h4">John Doe</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <span className="time">09:40 AM</span>
                            </div>
                        </li>
                        <li>
                            <span className="date">Jun 01, 2023</span>
                            <div className="notify-item">
                                <figure>
                                    <Image src={user1} className="rounded-circle" alt="user 1" />
                                </figure>
                                <div>
                                    <h4 className="h4">John Doe</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                </div>
                                <span className="time">09:40 AM</span>
                            </div>
                        </li>
                    </ul>

                    <div className="text-center">
                        <span className="loadmore">Load More
                            <Image src={loader} alt="loader" />
                        </span>
                    </div>

                </div>
            </section>
            {/*<!-- !Books Section -->*/}
        </Layout>
);
}

export default Notifications;