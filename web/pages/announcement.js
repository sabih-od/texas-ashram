import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import speaker from "../images/icon/speaker.png";

function Announcement(props) {
    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1 className="mb-5">Announcement</h1>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}


            {/*<!-- Books Section -->*/}
            <section className="announcement-section pb-0">
                <div className="container custom-container ">
                    <div className="col-md-10 mx-auto">
                        <div className="card-items mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <figure>
                                        <Image src={speaker} className="img-fluid" alt="speaker" />
                                    </figure>
                                </div>
                                <div className="col-md-9">
                                    <span>Jun 01, 2023</span>
                                    <a href="">
                                        <h4>Event Announcement</h4>
                                    </a>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English.</p>
                                </div>
                            </div>

                        </div>
                        <div className="card-items mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <figure>
                                        <Image src={speaker} className="img-fluid" alt="speaker" />
                                    </figure>
                                </div>
                                <div className="col-md-9">
                                    <span>Jun 01, 2023</span>
                                    <a href="">
                                        <h4>Event Announcement</h4>
                                    </a>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English.</p>
                                </div>
                            </div>

                        </div>
                        <div className="card-items mb-4">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <figure>
                                        <Image src={speaker} className="img-fluid" alt="speaker" />
                                    </figure>
                                </div>
                                <div className="col-md-9">
                                    <span>Jun 01, 2023</span>
                                    <a href="">
                                        <h4>Event Announcement</h4>
                                    </a>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/*<!-- !Books Section -->*/}
        </Layout>
);
}

export default Announcement;