import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import event1 from "../images/event1.png";
import event2 from "../images/event2.png";
import event3 from "../images/event3.png";

function Events(props) {
    return (
        <Layout>
            {/*!--Main Heading --*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Events</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Events</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*!--!Main Heading --*/}


            {/*!--Books Section --*/}
            <section className="books-section pb-0">
                <div className="container custom-container ">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event1} className="img-fluid" alt="event 1"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event2} className="img-fluid" alt="event 2"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event3} className="img-fluid" alt="event 3"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event1} className="img-fluid" alt="event 1"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event2} className="img-fluid" alt="event 2"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event3} className="img-fluid" alt="event 3"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event1} className="img-fluid" alt="event 1"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event2} className="img-fluid" alt="event 2"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="eventcard">
                                <figure>
                                    <Image src={event3} className="img-fluid" alt="event 3"/>
                                </figure>
                                <h4 className="">Kingdom Faith Revival Center</h4>
                                <span>23 JUN | 09:00 AM</span>
                                <p>
                                    <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                    12345 Peaceful Valley Road
                                    Sonora, CA 123</p>
                                <a href="#" className="themeBtn">Interested</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*!--!Books Section --*/}
        </Layout>
    );
}

export default Events;