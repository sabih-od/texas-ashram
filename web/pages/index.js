import Layout from "../components/Layout";
import Image from "next/image";
import React from "react";
import missionImg from "../images/new-html/missionimg.png";
import family1 from "../images/new-html/family1.png";
import family2 from "../images/new-html/family2.png";
import family3 from "../images/new-html/family3.png";
import testImg1 from "../images/new-html/testiimg1.png";
import testImg2 from "../images/new-html/testimg2.png";
import quote from "../images/new-html/quote.png";
import user1 from "../images/new-html/user1.png";
import Link from "next/link";

export default function Home() {
    return (
        <Layout>
            <section className="mainSlider">
                <div className="swiper-container homeSlider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="slide-inner bg-image">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-12">
                                            <div className="slideContent slideOne">
                                                <h6>Welcome to</h6>
                                                <h2>Texas Christian Ashram</h2>
                                                <a href="/" className="themeBtn">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="missionSec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="missionContent">
                                <h2 className="heading">Our Mission</h2>
                                <p>For more than 80 years, individuals and families have attended Christian Ashram
                                    retreats all
                                    around the world to find rest and recreation, encouraging teaching, and meaningful
                                    friendship. Each retreat offers a life-transforming opportunity to focus on JESUS in
                                    the
                                    midst of other people who believe in the hope of God's unshakable kingdom.</p>
                                <p>We recognize that each person is at a different place in life. One thing we have in
                                    common,
                                    is that life is tough sometimes. Sometimes we just need to unplug from all of life’s
                                    stressors and proactively focus on Jesus to recharge.</p>
                                <Link href="/our-mission" className="themeBtn">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <figure className="missionImg">
                                <Image src={missionImg} className="img-fluid" alt={missionImg}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>


            <section className="funMain">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="missionContent mb-5 text-center">
                                <h2 className="heading">Fun for the Whole Family</h2>
                                <p>We believe that the families’ needs are based on age. That is why we offer a variety
                                    of
                                    programs and activities designed to meet the needs of every member of your
                                    family.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="familyBox">
                                <figure><Image src={family1} className="img-fluid" alt={family1}/></figure>
                                <h2>Family Activities:</h2>
                                <p>Experience Love and Acceptance in a Unique Setting</p>
                                <a href="#" className="themeBtn borderBtn">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="familyBox">
                                <figure><Image src={family2} className="img-fluid" alt={family2}/></figure>
                                <h2>Adult Activities::</h2>
                                <p>Grow in Faith and Fellowship with Other Adults</p>
                                <a href="#" className="themeBtn borderBtn">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="familyBox">
                                <figure><Image src={family3} className="img-fluid" alt={family3}/></figure>
                                <h2>Youth Activities:</h2>
                                <p>Discover the Power of Community and Faith</p>
                                <a href="#" className="themeBtn borderBtn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="serveBg">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-8">
                            <div className="serveContent">
                                <h2 className="heading">We Serve The Entire Family</h2>
                                <p>At the Texas Christian Ashram, there is a group for everyone in your family!</p>
                                <a href="/" className="themeBtn">2023 Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="testimonialMain">
                <div className="container">
                    <h2 className="heading text-center">Our Testimonials</h2>
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="testiImg">
                                <figure>
                                    <span className="circle1"/>
                                    <Image src={testImg1} className="img-fluid" alt={testImg1}/>
                                    <span className="testiSecnd">
                                        <Image src={testImg2} className="img-fluid" alt={testImg2}/></span>
                                    <span className="circle2"/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="reviewContent">
                                <figure><Image src={quote} className="img-fluid" alt={quote}/></figure>
                                <p>As a parent, it can be challenging to find a spiritual retreat that accommodates the
                                    needs of
                                    the entire family. The Texas Christian Ashram was the perfect solution for us. Our
                                    children
                                    had a blast participating in age-appropriate activities, while my spouse and I were
                                    able to
                                    deepen our faith through the adult programs. We left feeling closer to each other
                                    and closer
                                    to God.</p>
                                <span>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                </span>
                                <div className="user">
                                    <h4>Emma Rodriguez</h4>
                                    <Image src={user1} className="img-fluid" alt={user1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}