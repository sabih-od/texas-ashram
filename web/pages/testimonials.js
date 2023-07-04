import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import test1 from "../images/test1.jpg";
import test2 from "../images/test2.jpg";

function Testimonials(props) {
    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Testimonials</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Testimonials</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Testimonial Section -->*/}
            <section className="testimonial-section  pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">


                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test1} alt="test 1"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>Attending the Texas Christian Ashram was a life-changing experience for me. The
                                    atmosphere was so welcoming and inclusive, and I felt an immediate connection with
                                    the other attendees. The teachings were inspiring and the activities were fun and
                                    engaging. I left feeling renewed and refreshed, with a stronger connection to God
                                    and my community.</p>
                                <strong>Caleb Jones</strong>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test2} alt="test 2"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>As a parent, it can be challenging to find a spiritual retreat that accommodates the
                                    needs of the entire family. The Texas Christian Ashram was the perfect solution for
                                    us. Our children had a blast participating in age-appropriate activities, while my
                                    spouse and I were able to deepen our faith through the adult programs. We left
                                    feeling closer to each other and closer to God.</p>
                                <strong>Emma Rodriguez</strong>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test1} alt="test 1"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>I had the privilege of attending the Texas Christian Ashram with a group of friends,
                                    and it was an experience I will never forget. The retreat provided a peaceful and
                                    contemplative space to connect with God and reflect on my spiritual journey. The
                                    guest speakers were knowledgeable and inspiring, and the activities were both fun
                                    and thought-provoking. I would highly recommend the Texas Christian Ashram to anyone
                                    seeking a deeper connection with their faith.</p>
                                <strong>William Davis</strong>
                            </div>
                        </div>


                        <div className="col-md-4">


                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test2} alt="test 2"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>Attending the Texas Christian Ashram was a life-changing experience for me. The
                                    atmosphere was so welcoming and inclusive, and I felt an immediate connection with
                                    the other attendees. The teachings were inspiring and the activities were fun and
                                    engaging. I left feeling renewed and refreshed, with a stronger connection to God
                                    and my community.</p>
                                <strong>Caleb Jones</strong>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test1} alt="test 1"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>As a parent, it can be challenging to find a spiritual retreat that accommodates the
                                    needs of the entire family. The Texas Christian Ashram was the perfect solution for
                                    us. Our children had a blast participating in age-appropriate activities, while my
                                    spouse and I were able to deepen our faith through the adult programs. We left
                                    feeling closer to each other and closer to God.</p>
                                <strong>Emma Rodriguez</strong>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test2} alt="test 2"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>I had the privilege of attending the Texas Christian Ashram with a group of friends,
                                    and it was an experience I will never forget. The retreat provided a peaceful and
                                    contemplative space to connect with God and reflect on my spiritual journey. The
                                    guest speakers were knowledgeable and inspiring, and the activities were both fun
                                    and thought-provoking. I would highly recommend the Texas Christian Ashram to anyone
                                    seeking a deeper connection with their faith.</p>
                                <strong>William Davis</strong>
                            </div>
                        </div>


                        <div className="col-md-4">


                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test1} alt="test 1"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>Attending the Texas Christian Ashram was a life-changing experience for me. The
                                    atmosphere was so welcoming and inclusive, and I felt an immediate connection with
                                    the other attendees. The teachings were inspiring and the activities were fun and
                                    engaging. I left feeling renewed and refreshed, with a stronger connection to God
                                    and my community.</p>
                                <strong>Caleb Jones</strong>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test2} alt="test 2"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>As a parent, it can be challenging to find a spiritual retreat that accommodates the
                                    needs of the entire family. The Texas Christian Ashram was the perfect solution for
                                    us. Our children had a blast participating in age-appropriate activities, while my
                                    spouse and I were able to deepen our faith through the adult programs. We left
                                    feeling closer to each other and closer to God.</p>
                                <strong>Emma Rodriguez</strong>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="testimonialCard">
                                <figure>
                                    <Image src={test1} alt="test 1"/>
                                </figure>
                                <ul className="rating">
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                    <li><i className="fas fa-star"/></li>
                                </ul>
                                <p>I had the privilege of attending the Texas Christian Ashram with a group of friends,
                                    and it was an experience I will never forget. The retreat provided a peaceful and
                                    contemplative space to connect with God and reflect on my spiritual journey. The
                                    guest speakers were knowledgeable and inspiring, and the activities were both fun
                                    and thought-provoking. I would highly recommend the Texas Christian Ashram to anyone
                                    seeking a deeper connection with their faith.</p>
                                <strong>William Davis</strong>
                            </div>
                        </div>


                    </div>


                </div>
            </section>
            {/*<!-- !Testimonial Section -->*/}
        </Layout>
    );
}

export default Testimonials;