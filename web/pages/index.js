import Layout from "../components/Layout";
import Image from "next/image";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import about from "../images/about.jpg";
import mission1 from "../images/mission1.jpg";
import mission2 from "../images/mission2.jpg";
import mission3 from "../images/mission3.jpg";
import mission4 from "../images/mission4.jpg";
import mission5 from "../images/mission5.jpg";
import mission6 from "../images/mission6.jpg";
import mission7 from "../images/mission7.jpg";
import mission8 from "../images/mission8.jpg";
import mission9 from "../images/mission9.jpg";
import mission10 from "../images/mission10.jpg";
import mission11 from "../images/mission11.jpg";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import speaker1 from "../images/speaker1.png";
import speaker2 from "../images/speaker2.png";
import speaker3 from "../images/speaker3.jpg";
import test1 from "../images/test1.jpg";
import test2 from "../images/test2.jpg";
import React from "react";
import PreLoader from "./preLoader";
import Link from "next/link";

export default function Home() {
    return (
        <Layout>

            {/*<PreLoader/>*/}

            {/*// Hero Section Main Slider*/}
            <section className="main-slider p-0" id="mainSlider">
                <div className="swiper-container homeSlider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="slide-inner bg-image">
                                <Image className="slide-inner bg-image" src={slider1} alt="Slider 1"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slide-inner bg-image">
                                <Image className="slide-inner bg-image" src={slider2} alt="Slider 2"/>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-button-next"/>
                    <div className="swiper-button-prev"/>
                    <div className="caption slideOne">
                        <p>Texas Christian</p>
                        <h1>Welcome to<br/>Texas Christian Ashram</h1>
                        <a href="#" className="themeBtn">Read More</a>
                    </div>
                </div>
            </section>

            <div className="bg">
                {/*// !About Section*/}
                <section className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" data-aos="fade-right">
                                {/*<div className="col-md-6" data-aos="">*/}
                                <div className="videoBox">
                                    <Image src={about} alt="About"/>
                                    <a href="https://vimeo.com/95424842" data-fancybox="" className="btn">
                                        <i className="far fa-play"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 px-5" data-aos="fade-left">
                                {/*<div className="col-md-6 px-5" data-aos="">*/}
                                <h6 className="subheading text-primary">Welcome to the</h6>
                                <h1 className="heading">Texas Christian Ashram</h1>
                                <p>For more than 80 years, individuals and families have attended Christian Ashram
                                    retreats all
                                    around the world to find rest and recreation, encouraging teaching, and
                                    meaningful
                                    friendship. Each retreat offers a life-transforming opportunity to focus on
                                    JESUS in
                                    the
                                    midst of other people who believe in the hope of God's unshakable kingdom.</p>
                                <p>We recognize that each person is at a different place in life. One thing we have
                                    in
                                    common,
                                    is that life is tough sometimes. Sometimes we just need to unplug from all of
                                    life’s
                                    stressors and proactively focus on Jesus to recharge. If you are looking for a
                                    place
                                    to have
                                    fun, recharge, learn, and grow in faith, surrounded by a group of fellow
                                    believers,
                                    this is
                                    the place for you and your family.</p>
                                <p>Our retreats are designed to provide a well-rounded experience, with inspiring
                                    teaching,
                                    uplifting worship, and engaging fellowship for all age groups. You'll have the
                                    opportunity
                                    to participate in small group discussions, reflective times of prayer, and fun
                                    recreational
                                    activities.</p>
                                <p>We believe that rest and recreation are important parts of spiritual growth, so
                                    we
                                    also offer
                                    a variety of recreational activities such as hiking, swimming, and games.</p>
                                <a href="" className="themeBtn invert">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*// !About Section*/}

                {/*// Mission Section*/}
                <section className="mission-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 mx-auto text-center">
                                <h6 className="subheading text-primary" data-aos="fade-up">Our Mission</h6>
                                {/*<h6 className="subheading text-primary" data-aos="">Our Mission</h6>*/}
                                <h1 className="heading" data-aos="fade-up">What is a Christian Ashram?</h1>
                                {/*<h1 className="heading" data-aos="">What is a Christian Ashram?</h1>*/}
                                <div data-aos="fade-up">
                                    {/*<div data-aos="">*/}
                                    <p>It is a Christ focused experience held in a retreat setting for the purpose
                                        of
                                        spiritual
                                        growth which makes God more real in daily living. This provides a break from
                                        the
                                        hustle
                                        and bustle of everyday life and a move toward the grace and presence of
                                        Jesus
                                        Christ.
                                    </p>
                                    <p>This is where you can experience a transformative retreat for your soul. Our
                                        organization
                                        has been serving individuals and families for over 80 years, providing a
                                        place
                                        of rest,
                                        recreation, and meaningful fellowship.</p>
                                    <p>What can I expect at a Christian Ashram?</p>
                                </div>
                                <div className="swiper missionSlider my-5 pb-5" data-aos="fade-up">
                                    {/*<div className="swiper missionSlider my-5 pb-5" data-aos="">*/}
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <Image src={mission1} alt="Mission 1"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission2} alt="Mission 2"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission3} alt="Mission 3"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission4} alt="Mission 4"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission5} alt="Mission 5"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission6} alt="Mission 6"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission7} alt="Mission 7"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission8} alt="Mission 8"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission9} alt="Mission 9"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission10} alt="Mission 10"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <Image src={mission11} alt="Mission 11"/>
                                        </div>
                                    </div>
                                    <div className="swiper-button-prev"/>
                                    <div className="swiper-button-next"/>
                                    <div className="swiper-pagination"/>
                                </div>

                                <a href="" className="themeBtn invert mt-4">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*// !Mission Section*/}
            </div>

            {/*// Show-case Section*/}
            <section className="showcase-section">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="img-top" x="0px" y="0px" viewBox="0 0 99 2"
                         enableBackground="new 0 0 99 2" width="100%" height="2vw" preserveAspectRatio="none">
                        <path className="bgwhite"
                              d="M0.3,1.5L0,1.4v0.1C0.1,1.5,0.2,1.5,0.3,1.5C0.3,1.5,0.3,1.5,0.3,1.5z"/>
                        <path className="bgwhite"
                              d="M0,0v1.2v0.1c0.2,0,0.3,0,0.5,0.1L0,1.3v0.1c0.3,0,0.6,0,0.9,0s0.7,0.1,0.8,0.2c0,0,0,0,0.1,0c0-0.1-0.1-0.1-0.1-0.1
                c0.2,0,0.4,0,0.7,0.1c-0.2,0-0.3,0-0.5,0.1c1,0,2,0,2.9,0c0.2,0,0.5-0.1,0.7-0.1c0.3,0,0.6-0.1,0.9,0.1c0.1,0,0.2,0,0.3,0
                c0.3,0,0.6,0,0.9,0c0.5,0,1-0.1,1.6-0.1c0.7,0.1,1.5,0,2.2,0c0.3,0,0.7,0,0.9-0.1h0.1c0,0.1,0,0.1,0,0.2c0.3-0.1,0.6-0.1,0.8-0.1
                c0.2,0.1,0.3,0.1,0.3,0.1c0.3-0.1,0.6-0.1,0.9,0c0.1,0.1,0.2,0,0.4,0c0.4,0.1,0.7,0.1,1.1,0.1c0,0,0,0,0,0.1c-0.2,0-0.4,0-0.6,0.1
                c1.9,0.1,3.9,0.2,5.8,0.1c-0.3-0.1-0.5,0-0.8-0.1c-0.3,0-0.6,0.1-0.9-0.1c0.7,0,1.4-0.1,2-0.1c0.7,0,1.3,0,2-0.1
                c0.2,0,0.4-0.1,0.7,0c0.1,0,0.2,0,0.3,0c0.5,0,1.1-0.1,1.6-0.1c0.9,0,1.8,0,2.7,0s1.8,0,2.7,0c-0.3,0-0.5,0.1-0.8,0.1
                c0.1,0.1,0.3,0.1,0.4,0.1c1.2-0.1,2.4-0.1,3.6-0.1c0.5,0,0.9,0,1.4,0V1.5c-1.2,0-2.4,0-3.6,0c0.7-0.1,1.3-0.1,2-0.2c0.7,0,1.3,0,2,0
                c0.7,0,1.4,0,2,0c0.7,0,1.3-0.1,2,0c0.7,0.1,1.3-0.1,2.1,0.1c-0.5,0.2-0.6,0.2-0.7,0.2c1,0.1,1.9,0.1,2.9,0.1V1.6
                c-0.5,0-1.1,0-1.6-0.1c0.1-0.1,0.2-0.1,0.4-0.1c1,0,2-0.1,3.1-0.1c0.6,0,1.1,0.1,1.7,0c0.4,0,0.7,0,1,0.1c0.3,0,0.7-0.1,1.1-0.1
                c0.3,0,0.6,0.1,0.9,0.1c0.9,0,1.8,0,2.7-0.1c1.1,0,2.3-0.1,3.4-0.1c0.8,0,1.6,0,2.4,0c1,0,2,0,3,0c0.6,0,1.2,0,1.8,0
                c0.5,0,1.1-0.1,1.6-0.1c0.6,0,1.2,0.1,1.8,0.1c0.3,0,0.6,0.1,0.9-0.1h0.2c0.5,0.2,1-0.1,1.5,0.1c0.5-0.1,1,0,1.5-0.1
                c0.3,0,0.7,0.1,1.1,0c0.3,0,0.6-0.1,0.9,0.1h0.1c0.3-0.1,0.7-0.1,1,0h0.1c0.5,0,1,0,1.4,0s0.8,0,1.2,0c0.4,0,0.7-0.1,1.1-0.1
                c0.2,0,0.4,0,0.5,0.1c-1.6,0-3.2,0-4.8,0.1c2.9,0.1,5.8,0,8.7,0c-0.6,0-1.2,0-1.8,0c-0.6,0-1.2,0.1-1.9-0.1c0.1-0.1,0.2-0.1,0.3-0.1
                c0.5,0,0.9-0.1,1.4,0c0.2,0,0.4,0.1,0.7,0.1c0.3,0,0.6-0.1,0.9-0.1c0.9,0,1.8,0,2.6-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0,0.3,0.1,0.4,0.1
                c0.2,0,0.4,0,0.5,0s0.3,0,0.4,0c0.3-0.1,0.7-0.1,1-0.1c0.2,0.1,0.4,0,0.6,0c0.3,0,0.5-0.1,0.8-0.1c0.3,0,0.7,0,1,0
                c0.2,0,0.4,0,0.6,0c0.8,0.1,1.7,0.1,2.5,0c0.2,0,0.4,0,0.7,0s0.6,0,0.9,0.1c0.4,0,0.7,0,1.1,0c0.3,0,0.7-0.1,1,0h0.1
                c0.5,0,0.9-0.1,1.4-0.1c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.5,0V0H0z M14,1.1h0.1H14z M15.8,1.2c-0.5,0-0.9,0-1.4-0.1
                C14.8,1,15.3,1,15.8,1.1C15.8,1.1,15.8,1.1,15.8,1.2z M24,0.6c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0C23.7,0.6,23.9,0.6,24,0.6z
                M18.1,1.7c-0.1,0-0.2,0-0.3,0c0,0,0,0,0-0.1c0.1,0,0.2-0.1,0.4-0.1C18.1,1.7,18.1,1.7,18.1,1.7z M17.5,1.2c0.4-0.1,0.7-0.1,1.2,0
                C18.3,1.2,18,1.2,17.5,1.2z M19.3,1.1c0.3,0.1,0.6,0,0.9,0C19.9,1.2,19.6,1.2,19.3,1.1z M31.7,1.1c-0.1,0-0.2,0.1-0.3,0.1
                c-1,0-2.1,0-3.1,0.1c-1.4,0-2.8,0.1-4.3,0.1c-1,0-2,0-3.1,0c-0.1,0-0.3,0-0.4-0.1c0.4-0.1,0.7-0.1,1-0.2c0.7,0.1,1.3,0,1.9,0
                c0.3,0,0.6,0.1,0.9,0.1c0.1,0,0.2,0,0.4,0c0.5,0,0.9,0,1.4-0.1c0.4,0,0.8,0,1.2,0c0.7,0,1.3,0.1,2,0.1c0.5,0,0.9-0.1,1.4-0.1
                C31,1.1,31.3,1.1,31.7,1.1L31.7,1.1z M40.2,0.9C37.5,1,34.7,1,32,1c0,0,0,0,0-0.1c0,0.1,0.1,0,0.2,0c0.7,0,1.4-0.1,2.2-0.1
                c0.5,0,1.1,0,1.6,0c1.2,0,2.5-0.1,3.7,0C39.9,0.9,40,0.9,40.2,0.9c0.3,0,0.6,0,0.9,0C40.8,0.9,40.5,0.9,40.2,0.9z M44.2,1
                c-0.2,0-0.4,0-0.6-0.1c0,0,0,0,0,0s0,0,0,0C43.8,0.9,44,0.9,44.2,1L44.2,1z M48.5,1c-0.5,0-0.9,0-1.4,0c-0.6,0-1.2-0.1-1.9,0.1
                C45.1,1,45,1,44.8,0.9C46,0.9,47.3,0.9,48.5,1L48.5,1z M47.8,0.4c-0.2,0-0.5,0-0.7,0C47.4,0.4,47.6,0.4,47.8,0.4c0.2,0,0.5,0,0.7,0
                C48.3,0.4,48.1,0.4,47.8,0.4z M54.3,1.3C54.3,1.3,54.3,1.3,54.3,1.3c-0.2,0-0.4,0-0.6,0V1.3C53.9,1.3,54.1,1.3,54.3,1.3
                C54.3,1.3,54.3,1.3,54.3,1.3z M54.4,1c0.4-0.1,0.9-0.1,1.3-0.1C55.3,0.9,54.8,1,54.4,1z M70.2,1.2L70.2,1.2c0.6-0.1,1.2-0.1,1.9-0.1
                C71.5,1.2,70.8,1.2,70.2,1.2z M74.2,1.2C74.3,1.2,74.2,1.2,74.2,1.2C74.2,1.2,74.2,1.2,74.2,1.2C74.2,1.2,74.2,1.2,74.2,1.2h0.1
                C74.3,1.2,74.3,1.2,74.2,1.2z M75.1,1.3C75.1,1.3,75.1,1.3,75.1,1.3c1-0.1,2-0.1,3-0.1C77.1,1.3,76.1,1.3,75.1,1.3z M80.2,1.2
                c0.1,0,0.3,0,0.4,0C80.5,1.2,80.3,1.2,80.2,1.2z M81,1.2C81,1.2,81,1.2,81,1.2C81,1.2,81,1.2,81,1.2c0.3,0,0.5,0,0.8,0
                C81.6,1.2,81.3,1.2,81,1.2z M92.3,1.1C92.3,1.1,92.3,1.1,92.3,1.1c-0.1,0-0.3,0-0.4,0.1V1.1C92,1.1,92.1,1.1,92.3,1.1
                C92.3,1.1,92.3,1.1,92.3,1.1z M93.9,1.1c0.8,0,1.5,0,2.3,0C95.8,1.2,95.3,1.2,93.9,1.1z"/>
                        <path className="bgwhite" d="M48.5,0.4c-0.3,0-0.5,0-0.7,0C48.1,0.4,48.3,0.4,48.5,0.4z"/>
                        <path className="bgwhite" d="M41.1,0.9c-0.3,0-0.6,0-0.9,0C40.5,0.9,40.8,0.9,41.1,0.9z"/>
                        <path className="bgwhite"
                              d="M29.9,1.7c0.2,0,0.3-0.1,0.5-0.1c-1.1,0-2.2,0.1-3.4,0.1C28,1.7,29,1.7,29.9,1.7z"/>
                        <path className="bgwhite" d="M30.4,1.6L30.4,1.6L30.4,1.6L30.4,1.6L30.4,1.6L30.4,1.6z"/>
                        <path className="bgwhite"
                              d="M37.4,1.6c0.3,0,0.6,0,1-0.1C38.1,1.5,37.8,1.5,37.4,1.6C37.4,1.6,37.4,1.6,37.4,1.6z"/>
                        <path className="bgwhite"
                              d="M67.6,1.5c0.3,0,0.6,0,0.9,0C68.2,1.5,67.9,1.5,67.6,1.5L67.6,1.5z"/>
                        <path className="bgwhite"
                              d="M66,1.5C66,1.5,66,1.5,66,1.5c-0.3-0.1-0.6-0.1-1,0C65.3,1.5,65.7,1.5,66,1.5z"/>
                        <path className="bgwhite" d="M72.5,1.5c-1.1,0-2.1,0-3.2,0C70.3,1.6,71.4,1.6,72.5,1.5z"/>
                        <path className="bgwhite"
                              d="M56.6,1.5c0.4,0,0.8,0,1.2,0l0,0C57.4,1.5,57,1.5,56.6,1.5L56.6,1.5z"/>
                        <path className="bgwhite"
                              d="M73.3,1.5C73.3,1.5,73.3,1.5,73.3,1.5c-0.2,0-0.3,0-0.5,0C72.9,1.5,73.1,1.5,73.3,1.5z"/>
                        <path className="bgwhite"
                              d="M64.6,1.5L64.6,1.5c-0.8-0.1-1.6-0.1-2.4,0C63,1.5,63.8,1.5,64.6,1.5z"/>
                        <path className="bgwhite"
                              d="M59.5,1.5C59.5,1.5,59.5,1.5,59.5,1.5c0.4,0,0.7,0,1.1,0l0,0C60.2,1.5,59.8,1.5,59.5,1.5z"/>
                        <path className="bgwhite" d="M100,1.4L100,1.4h-2.8C97.7,1.4,98.9,1.4,100,1.4z"/>
                        <path className="bgwhite"
                              d="M95.1,1.4C95.1,1.4,95.1,1.4,95.1,1.4c0,0-0.1,0-0.3,0C94.9,1.4,95,1.4,95.1,1.4z"/>
                        <path className="bgwhite"
                              d="M90,1.4C90,1.4,90,1.4,90,1.4c-0.1,0-0.3,0-0.5,0C89.7,1.4,89.9,1.4,90,1.4z"/>
                        <path className="bgwhite" d="M87.6,1.5c0.2,0,0.5,0,0.8,0C88.1,1.4,87.8,1.4,87.6,1.5z"/>
                        <path className="bgwhite"
                              d="M74.2,1.5C74.2,1.5,74.2,1.5,74.2,1.5c-0.2,0-0.4,0-0.7,0C73.7,1.5,74,1.5,74.2,1.5z"/>
                        <path className="bgwhite"
                              d="M37,1.6L37,1.6c-0.2-0.1-0.4,0-0.7,0C36.5,1.6,36.8,1.6,37,1.6z"/>
                        <path className="bgwhite" d="M12.3,1.7c-0.1,0-0.1,0-0.2,0C12.2,1.7,12.3,1.7,12.3,1.7z"/>
                        <path className="bgwhite" d="M21.6,1.8c0.6,0,1.1,0,1.7,0V1.7C22.7,1.7,22.1,1.8,21.6,1.8z"/>
                        <path className="bgwhite"
                              d="M25.9,1.7L25.9,1.7c-0.5,0-1.1-0.1-1.6,0C24.8,1.7,25.4,1.7,25.9,1.7z"/>
                        <path className="bgwhite"
                              d="M55.7,1.5L55.7,1.5c0.1,0,0.2,0,0.4,0l0,0C55.9,1.5,55.8,1.5,55.7,1.5z"/>
                        <path className="bgwhite" d="M8.1,1.7c1.1,0,2.2,0,3.4,0.1C10.3,1.6,8.6,1.6,8.1,1.7z"/>
                        <path className="bgwhite" d="M6.6,1.7c0.2,0,0.4-0.1,0.6-0.1C6.9,1.6,6.7,1.6,6.6,1.7z"/>
                        <path className="bgwhite"
                              d="M4.2,1.7c-0.1,0-0.1,0-0.2,0.1c0.7,0,1.3,0,2,0C5.6,1.6,4.4,1.6,4.2,1.7z"/>
                        <path className="bgwhite"
                              d="M48.2,1.6c1.3,0,2.5,0,3.8,0V1.5c-1.3,0-2.5,0-3.8-0.1C48.2,1.5,48.2,1.6,48.2,1.6z"/>
                        <path className="bgwhite" d="M38.8,1.6c0.9,0,1.7,0.1,2.6,0C40.5,1.5,39.7,1.6,38.8,1.6z"/>
                        <path className="bgwhite"
                              d="M54.2,1.5L54.2,1.5c0.3,0,0.6,0,0.8,0l0,0C54.8,1.5,54.5,1.5,54.2,1.5z"/>
                        <path className="bgwhite"
                              d="M45.4,1.6c0.4,0,0.7-0.1,1.1-0.1C46.1,1.5,45.8,1.5,45.4,1.6L45.4,1.6z"/>
                        <path className="bgwhite" d="M47.8,1.5c-0.2,0-0.5,0-0.8,0C47.3,1.6,47.6,1.5,47.8,1.5z"/>
                        <rect className="bgwhite" x="6.4" y="6" width="0" height="0"/>
                    </svg>
                </div>
                <div className="container textContent">
                    <div className="px-4">
                        <h6 className="subheading text-white text-center" data-aos="fade-up">
                            {/*<h6 className="subheading text-white text-center" data-aos="">*/}
                            Catering to the Needs of the Entire
                            Family at Texas Christian Ashram</h6>
                        <h3 className="text-center" data-aos="fade-up">
                            {/*<h3 className="text-center" data-aos="">*/}
                            We believe that spiritual growth is a journey that involves
                            the whole family. That's why we offer a variety of programs and activities designed to
                            meet
                            the
                            needs of every member of your family.</h3>
                        <div className="row" data-aos="fade-up">
                            {/*<div className="row" data-aos="">*/}
                            <div className="col-md-3">
                                <div className="card">
                                    <figure>
                                        <Image src={card1} alt="card 1"/>
                                    </figure>
                                    <div className="card-body">
                                        <h4>Family ActivitiesaFamily Activities: Experience Love and Acceptance in a
                                            Unique
                                            Setting</h4>
                                        <p>We understand that it can be difficult to find a safe and welcoming
                                            environment where
                                            every member of the family can come together and grow in their faith.
                                            That's
                                            why our
                                            programs and activities are designed to cater to the needs of the entire
                                            family.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <figure>
                                        <Image src={card2} alt="card 2"/>
                                    </figure>
                                    <div className="card-body">
                                        <h4>Adult Activities: Grow in Faith and Fellowship with Other Adults</h4>
                                        <p>We believe that faith is a lifelong journey that never stops. That's why
                                            we
                                            offer a
                                            variety of programs and activities designed specifically for adults.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <figure>
                                        <Image src={card3} alt="card 3"/>
                                    </figure>
                                    <div className="card-body">
                                        <h4>Youth Activities: Discover the Power of Community and Faith</h4>
                                        <p>Our youth programs are led by experienced and dedicated leaders who will
                                            guide them
                                            through the week, as they discover the transformative power of Jesus
                                            Christ.
                                            Activities include games, worship, teaching, hang out time, small
                                            groups,
                                            and
                                            worship.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <figure>
                                        <Image src={card4} alt="card 4"/>
                                    </figure>
                                    <div className="card-body">
                                        <h4>Children's Activities: Learn about Jesus in a Fun and Engaging Way</h4>
                                        <p>Our teachers and volunteers are dedicated to creating a safe and
                                            welcoming
                                            environment where children of all ages can come together and experience
                                            the
                                            love of
                                            Jesus. Our staff is background checked and trained on how to keep your
                                            children
                                            safe.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Link href="/contact" className="themeBtn white mx-2">Contact</Link>
                            <a href="" className="themeBtn invert mx-2">Request Information</a>
                        </div>
                    </div>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="img-bottom" x="0px" y="0px"
                         viewBox="0 0 99 2"
                         enableBackground="new 0 0 99 2" width="100%" height="2vw" preserveAspectRatio="none">
                        <path className="bgwhite"
                              d="M0.3,1.5L0,1.4v0.1C0.1,1.5,0.2,1.5,0.3,1.5C0.3,1.5,0.3,1.5,0.3,1.5z"/>
                        <path className="bgwhite" d="M0,0v1.2v0.1c0.2,0,0.3,0,0.5,0.1L0,1.3v0.1c0.3,0,0.6,0,0.9,0s0.7,0.1,0.8,0.2c0,0,0,0,0.1,0c0-0.1-0.1-0.1-0.1-0.1
                c0.2,0,0.4,0,0.7,0.1c-0.2,0-0.3,0-0.5,0.1c1,0,2,0,2.9,0c0.2,0,0.5-0.1,0.7-0.1c0.3,0,0.6-0.1,0.9,0.1c0.1,0,0.2,0,0.3,0
                c0.3,0,0.6,0,0.9,0c0.5,0,1-0.1,1.6-0.1c0.7,0.1,1.5,0,2.2,0c0.3,0,0.7,0,0.9-0.1h0.1c0,0.1,0,0.1,0,0.2c0.3-0.1,0.6-0.1,0.8-0.1
                c0.2,0.1,0.3,0.1,0.3,0.1c0.3-0.1,0.6-0.1,0.9,0c0.1,0.1,0.2,0,0.4,0c0.4,0.1,0.7,0.1,1.1,0.1c0,0,0,0,0,0.1c-0.2,0-0.4,0-0.6,0.1
                c1.9,0.1,3.9,0.2,5.8,0.1c-0.3-0.1-0.5,0-0.8-0.1c-0.3,0-0.6,0.1-0.9-0.1c0.7,0,1.4-0.1,2-0.1c0.7,0,1.3,0,2-0.1
                c0.2,0,0.4-0.1,0.7,0c0.1,0,0.2,0,0.3,0c0.5,0,1.1-0.1,1.6-0.1c0.9,0,1.8,0,2.7,0s1.8,0,2.7,0c-0.3,0-0.5,0.1-0.8,0.1
                c0.1,0.1,0.3,0.1,0.4,0.1c1.2-0.1,2.4-0.1,3.6-0.1c0.5,0,0.9,0,1.4,0V1.5c-1.2,0-2.4,0-3.6,0c0.7-0.1,1.3-0.1,2-0.2c0.7,0,1.3,0,2,0
                c0.7,0,1.4,0,2,0c0.7,0,1.3-0.1,2,0c0.7,0.1,1.3-0.1,2.1,0.1c-0.5,0.2-0.6,0.2-0.7,0.2c1,0.1,1.9,0.1,2.9,0.1V1.6
                c-0.5,0-1.1,0-1.6-0.1c0.1-0.1,0.2-0.1,0.4-0.1c1,0,2-0.1,3.1-0.1c0.6,0,1.1,0.1,1.7,0c0.4,0,0.7,0,1,0.1c0.3,0,0.7-0.1,1.1-0.1
                c0.3,0,0.6,0.1,0.9,0.1c0.9,0,1.8,0,2.7-0.1c1.1,0,2.3-0.1,3.4-0.1c0.8,0,1.6,0,2.4,0c1,0,2,0,3,0c0.6,0,1.2,0,1.8,0
                c0.5,0,1.1-0.1,1.6-0.1c0.6,0,1.2,0.1,1.8,0.1c0.3,0,0.6,0.1,0.9-0.1h0.2c0.5,0.2,1-0.1,1.5,0.1c0.5-0.1,1,0,1.5-0.1
                c0.3,0,0.7,0.1,1.1,0c0.3,0,0.6-0.1,0.9,0.1h0.1c0.3-0.1,0.7-0.1,1,0h0.1c0.5,0,1,0,1.4,0s0.8,0,1.2,0c0.4,0,0.7-0.1,1.1-0.1
                c0.2,0,0.4,0,0.5,0.1c-1.6,0-3.2,0-4.8,0.1c2.9,0.1,5.8,0,8.7,0c-0.6,0-1.2,0-1.8,0c-0.6,0-1.2,0.1-1.9-0.1c0.1-0.1,0.2-0.1,0.3-0.1
                c0.5,0,0.9-0.1,1.4,0c0.2,0,0.4,0.1,0.7,0.1c0.3,0,0.6-0.1,0.9-0.1c0.9,0,1.8,0,2.6-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0,0.3,0.1,0.4,0.1
                c0.2,0,0.4,0,0.5,0s0.3,0,0.4,0c0.3-0.1,0.7-0.1,1-0.1c0.2,0.1,0.4,0,0.6,0c0.3,0,0.5-0.1,0.8-0.1c0.3,0,0.7,0,1,0
                c0.2,0,0.4,0,0.6,0c0.8,0.1,1.7,0.1,2.5,0c0.2,0,0.4,0,0.7,0s0.6,0,0.9,0.1c0.4,0,0.7,0,1.1,0c0.3,0,0.7-0.1,1,0h0.1
                c0.5,0,0.9-0.1,1.4-0.1c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.5,0V0H0z M14,1.1h0.1H14z M15.8,1.2c-0.5,0-0.9,0-1.4-0.1
                C14.8,1,15.3,1,15.8,1.1C15.8,1.1,15.8,1.1,15.8,1.2z M24,0.6c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0C23.7,0.6,23.9,0.6,24,0.6z
                M18.1,1.7c-0.1,0-0.2,0-0.3,0c0,0,0,0,0-0.1c0.1,0,0.2-0.1,0.4-0.1C18.1,1.7,18.1,1.7,18.1,1.7z M17.5,1.2c0.4-0.1,0.7-0.1,1.2,0
                C18.3,1.2,18,1.2,17.5,1.2z M19.3,1.1c0.3,0.1,0.6,0,0.9,0C19.9,1.2,19.6,1.2,19.3,1.1z M31.7,1.1c-0.1,0-0.2,0.1-0.3,0.1
                c-1,0-2.1,0-3.1,0.1c-1.4,0-2.8,0.1-4.3,0.1c-1,0-2,0-3.1,0c-0.1,0-0.3,0-0.4-0.1c0.4-0.1,0.7-0.1,1-0.2c0.7,0.1,1.3,0,1.9,0
                c0.3,0,0.6,0.1,0.9,0.1c0.1,0,0.2,0,0.4,0c0.5,0,0.9,0,1.4-0.1c0.4,0,0.8,0,1.2,0c0.7,0,1.3,0.1,2,0.1c0.5,0,0.9-0.1,1.4-0.1
                C31,1.1,31.3,1.1,31.7,1.1L31.7,1.1z M40.2,0.9C37.5,1,34.7,1,32,1c0,0,0,0,0-0.1c0,0.1,0.1,0,0.2,0c0.7,0,1.4-0.1,2.2-0.1
                c0.5,0,1.1,0,1.6,0c1.2,0,2.5-0.1,3.7,0C39.9,0.9,40,0.9,40.2,0.9c0.3,0,0.6,0,0.9,0C40.8,0.9,40.5,0.9,40.2,0.9z M44.2,1
                c-0.2,0-0.4,0-0.6-0.1c0,0,0,0,0,0s0,0,0,0C43.8,0.9,44,0.9,44.2,1L44.2,1z M48.5,1c-0.5,0-0.9,0-1.4,0c-0.6,0-1.2-0.1-1.9,0.1
                C45.1,1,45,1,44.8,0.9C46,0.9,47.3,0.9,48.5,1L48.5,1z M47.8,0.4c-0.2,0-0.5,0-0.7,0C47.4,0.4,47.6,0.4,47.8,0.4c0.2,0,0.5,0,0.7,0
                C48.3,0.4,48.1,0.4,47.8,0.4z M54.3,1.3C54.3,1.3,54.3,1.3,54.3,1.3c-0.2,0-0.4,0-0.6,0V1.3C53.9,1.3,54.1,1.3,54.3,1.3
                C54.3,1.3,54.3,1.3,54.3,1.3z M54.4,1c0.4-0.1,0.9-0.1,1.3-0.1C55.3,0.9,54.8,1,54.4,1z M70.2,1.2L70.2,1.2c0.6-0.1,1.2-0.1,1.9-0.1
                C71.5,1.2,70.8,1.2,70.2,1.2z M74.2,1.2C74.3,1.2,74.2,1.2,74.2,1.2C74.2,1.2,74.2,1.2,74.2,1.2C74.2,1.2,74.2,1.2,74.2,1.2h0.1
                C74.3,1.2,74.3,1.2,74.2,1.2z M75.1,1.3C75.1,1.3,75.1,1.3,75.1,1.3c1-0.1,2-0.1,3-0.1C77.1,1.3,76.1,1.3,75.1,1.3z M80.2,1.2
                c0.1,0,0.3,0,0.4,0C80.5,1.2,80.3,1.2,80.2,1.2z M81,1.2C81,1.2,81,1.2,81,1.2C81,1.2,81,1.2,81,1.2c0.3,0,0.5,0,0.8,0
                C81.6,1.2,81.3,1.2,81,1.2z M92.3,1.1C92.3,1.1,92.3,1.1,92.3,1.1c-0.1,0-0.3,0-0.4,0.1V1.1C92,1.1,92.1,1.1,92.3,1.1
                C92.3,1.1,92.3,1.1,92.3,1.1z M93.9,1.1c0.8,0,1.5,0,2.3,0C95.8,1.2,95.3,1.2,93.9,1.1z"/>
                        <path className="bgwhite" d="M48.5,0.4c-0.3,0-0.5,0-0.7,0C48.1,0.4,48.3,0.4,48.5,0.4z"/>
                        <path className="bgwhite" d="M41.1,0.9c-0.3,0-0.6,0-0.9,0C40.5,0.9,40.8,0.9,41.1,0.9z"/>
                        <path className="bgwhite"
                              d="M29.9,1.7c0.2,0,0.3-0.1,0.5-0.1c-1.1,0-2.2,0.1-3.4,0.1C28,1.7,29,1.7,29.9,1.7z"/>
                        <path className="bgwhite" d="M30.4,1.6L30.4,1.6L30.4,1.6L30.4,1.6L30.4,1.6L30.4,1.6z"/>
                        <path className="bgwhite"
                              d="M37.4,1.6c0.3,0,0.6,0,1-0.1C38.1,1.5,37.8,1.5,37.4,1.6C37.4,1.6,37.4,1.6,37.4,1.6z"/>
                        <path className="bgwhite"
                              d="M67.6,1.5c0.3,0,0.6,0,0.9,0C68.2,1.5,67.9,1.5,67.6,1.5L67.6,1.5z"/>
                        <path className="bgwhite"
                              d="M66,1.5C66,1.5,66,1.5,66,1.5c-0.3-0.1-0.6-0.1-1,0C65.3,1.5,65.7,1.5,66,1.5z"/>
                        <path className="bgwhite" d="M72.5,1.5c-1.1,0-2.1,0-3.2,0C70.3,1.6,71.4,1.6,72.5,1.5z"/>
                        <path className="bgwhite"
                              d="M56.6,1.5c0.4,0,0.8,0,1.2,0l0,0C57.4,1.5,57,1.5,56.6,1.5L56.6,1.5z"/>
                        <path className="bgwhite"
                              d="M73.3,1.5C73.3,1.5,73.3,1.5,73.3,1.5c-0.2,0-0.3,0-0.5,0C72.9,1.5,73.1,1.5,73.3,1.5z"/>
                        <path className="bgwhite"
                              d="M64.6,1.5L64.6,1.5c-0.8-0.1-1.6-0.1-2.4,0C63,1.5,63.8,1.5,64.6,1.5z"/>
                        <path className="bgwhite"
                              d="M59.5,1.5C59.5,1.5,59.5,1.5,59.5,1.5c0.4,0,0.7,0,1.1,0l0,0C60.2,1.5,59.8,1.5,59.5,1.5z"/>
                        <path className="bgwhite" d="M100,1.4L100,1.4h-2.8C97.7,1.4,98.9,1.4,100,1.4z"/>
                        <path className="bgwhite"
                              d="M95.1,1.4C95.1,1.4,95.1,1.4,95.1,1.4c0,0-0.1,0-0.3,0C94.9,1.4,95,1.4,95.1,1.4z"/>
                        <path className="bgwhite"
                              d="M90,1.4C90,1.4,90,1.4,90,1.4c-0.1,0-0.3,0-0.5,0C89.7,1.4,89.9,1.4,90,1.4z"/>
                        <path className="bgwhite" d="M87.6,1.5c0.2,0,0.5,0,0.8,0C88.1,1.4,87.8,1.4,87.6,1.5z"/>
                        <path className="bgwhite"
                              d="M74.2,1.5C74.2,1.5,74.2,1.5,74.2,1.5c-0.2,0-0.4,0-0.7,0C73.7,1.5,74,1.5,74.2,1.5z"/>
                        <path className="bgwhite"
                              d="M37,1.6L37,1.6c-0.2-0.1-0.4,0-0.7,0C36.5,1.6,36.8,1.6,37,1.6z"/>
                        <path className="bgwhite" d="M12.3,1.7c-0.1,0-0.1,0-0.2,0C12.2,1.7,12.3,1.7,12.3,1.7z"/>
                        <path className="bgwhite" d="M21.6,1.8c0.6,0,1.1,0,1.7,0V1.7C22.7,1.7,22.1,1.8,21.6,1.8z"/>
                        <path className="bgwhite"
                              d="M25.9,1.7L25.9,1.7c-0.5,0-1.1-0.1-1.6,0C24.8,1.7,25.4,1.7,25.9,1.7z"/>
                        <path className="bgwhite"
                              d="M55.7,1.5L55.7,1.5c0.1,0,0.2,0,0.4,0l0,0C55.9,1.5,55.8,1.5,55.7,1.5z"/>
                        <path className="bgwhite" d="M8.1,1.7c1.1,0,2.2,0,3.4,0.1C10.3,1.6,8.6,1.6,8.1,1.7z"/>
                        <path className="bgwhite" d="M6.6,1.7c0.2,0,0.4-0.1,0.6-0.1C6.9,1.6,6.7,1.6,6.6,1.7z"/>
                        <path className="bgwhite"
                              d="M4.2,1.7c-0.1,0-0.1,0-0.2,0.1c0.7,0,1.3,0,2,0C5.6,1.6,4.4,1.6,4.2,1.7z"/>
                        <path className="bgwhite"
                              d="M48.2,1.6c1.3,0,2.5,0,3.8,0V1.5c-1.3,0-2.5,0-3.8-0.1C48.2,1.5,48.2,1.6,48.2,1.6z"/>
                        <path className="bgwhite" d="M38.8,1.6c0.9,0,1.7,0.1,2.6,0C40.5,1.5,39.7,1.6,38.8,1.6z"/>
                        <path className="bgwhite"
                              d="M54.2,1.5L54.2,1.5c0.3,0,0.6,0,0.8,0l0,0C54.8,1.5,54.5,1.5,54.2,1.5z"/>
                        <path className="bgwhite"
                              d="M45.4,1.6c0.4,0,0.7-0.1,1.1-0.1C46.1,1.5,45.8,1.5,45.4,1.6L45.4,1.6z"/>
                        <path className="bgwhite" d="M47.8,1.5c-0.2,0-0.5,0-0.8,0C47.3,1.6,47.6,1.5,47.8,1.5z"/>
                        <rect className="bgwhite" x="6.4" y="6" width="0" height="0"/>
                    </svg>
                </div>
            </section>
            {/*// !Show-case Section*/}


            <div className="bg-img">
                {/*// Speaker Section*/}
                <section className="speaker-section">
                    <div className="container">
                        <h6 className="subheading text-center mt-5" data-aos="fade-up">
                            {/*<h6 className="subheading text-center mt-5" data-aos="">*/}
                            Scottsville Camp & Conference Center
                        </h6>
                        <h1 className="heading text-center mb-4" data-aos="fade-up">Our Speakers</h1>
                        {/*<h1 className="heading text-center mb-4" data-aos="">Our Speakers</h1>*/}
                        <div className="row justify-content-around" data-aos="fade-up">
                            {/*<div className="row justify-content-around" data-aos="">*/}
                            <div className="col-md-5 bg-white p-4">
                                <div className="speakeritem">
                                    <figure>
                                        <Image src={speaker1} alt="speaker 1"/>
                                    </figure>
                                    <div>
                                        <h2>Bob Hayes - Evangelist</h2>
                                        <p>Bob Hayes was born in Houston, Texas, and is the third generation of
                                            Methodist
                                            ministers in his family. Growing up in a Methodist parsonage the call to
                                            ministry
                                            came early, and at age 13, Robert gave his life to Christ. He says that
                                            his
                                            life was
                                            shaped by his father's preaching and his mother's knowledge of the great
                                            hymns of
                                            the faith.</p>
                                        <a href="#" className="themeBtn invert">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mt-5">
                                <div className="speakeritem">
                                    <figure>
                                        <Image src={speaker2} alt="speaker 2"/>
                                    </figure>
                                    <div>
                                        <h2>Brian Shimer - Bible Teacher</h2>
                                        <p>Brian Shimer became involved in the Christian Ashram movement first at
                                            the
                                            California
                                            Winter Ashram in February 1981.</p>
                                        <a href="#" className="themeBtn invert">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="pt-5 pb-0" data-aos="fade-up">
                    {/*<section className="pt-5 pb-0" data-aos="">*/}
                    <div className="container">
                        <div className="row justify-content-around align-items-center">
                            <div className="col-md-5">
                                <div className="speakeritem">
                                    <h2>2023 registration</h2>
                                    <p>Our purpose-built program is designed to provide Christians with a unique
                                        opportunity to
                                        reconnect with God, their families, and provide opportunities to connect
                                        with
                                        other
                                        families that attend. We believe that this spiritual renewal can have a
                                        positive
                                        impact
                                        on families.</p>
                                    <a href="" className="themeBtn">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <Image src={speaker3} alt="speaker 3"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/*// !Speaker Section*/}

                {/*Testimonial Section */}
                <section className="testimonial-section pt-5">
                    <div className="container">
                        <h2 className="heading text-center mb-4" data-aos="fade-up">Testimonials</h2>
                        <div className="swiper testimonialSlider" data-aos="fade-up">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
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
                                        <p>Attending the Texas Christian Ashram was a life-changing experience for
                                            me.
                                            The
                                            atmosphere was so welcoming and inclusive, and I felt an immediate
                                            connection with
                                            the other attendees. The teachings were inspiring and the activities
                                            were
                                            fun and
                                            engaging. I left feeling renewed and refreshed, with a stronger
                                            connection
                                            to God
                                            and my community.</p>
                                        <strong>Caleb Jones</strong>
                                    </div>
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
                                        <p>As a parent, it can be challenging to find a spiritual retreat that
                                            accommodates the
                                            needs of the entire family. The Texas Christian Ashram was the perfect
                                            solution for
                                            us. Our children had a blast participating in age-appropriate
                                            activities,
                                            while my
                                            spouse and I were able to deepen our faith through the adult programs.
                                            We
                                            left
                                            feeling closer to each other and closer to God.</p>
                                        <strong>Emma Rodriguez</strong>
                                    </div>
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
                                        <p>I had the privilege of attending the Texas Christian Ashram with a group
                                            of
                                            friends,
                                            and it was an experience I will never forget. The retreat provided a
                                            peaceful and
                                            contemplative space to connect with God and reflect on my spiritual
                                            journey.
                                            The
                                            guest speakers were knowledgeable and inspiring, and the activities were
                                            both fun
                                            and thought-provoking. I would highly recommend the Texas Christian
                                            Ashram
                                            to anyone
                                            seeking a deeper connection with their faith.</p>
                                        <strong>William Davis</strong>
                                    </div>
                                </div>
                                {/*<div className="swiper-slide">
                                </div>
                                <div className="swiper-slide">
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/*!Testimonial Section */}
            </div>


            {/*Join Now Section */}
            <section className="join-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-9" data-aos="fade-right">
                            {/*<div className="col-md-9" data-aos="">*/}
                            <h2 className="heading">Join us for a life-transforming experience at Texas Christian
                                Ashram</h2>
                        </div>
                        <div className="col-md-3 text-right" data-aos="fade-left">
                            {/*<div className="col-md-3 text-right" data-aos="">*/}
                            <a href="#" className="themeBtn">Get Involved</a>
                        </div>
                    </div>
                </div>
            </section>
            {/*!Join Now Section */}
        </Layout>
    );
}