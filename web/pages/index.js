import Layout from "../components/Layout";
import Image from "next/image";
import React from "react";
import missionImg from "../images/new-html/missionimg.png";
import family1 from "../images/new-html/family1.png";
import family2 from "../images/new-html/family2.png";
import family3 from "../images/new-html/family3.png";
import shape from "../public/Shape.png";
import shape2 from "../images/Shap2.png";
import shape3 from "../images/Shap3.png";
import shape4 from "../images/Shap4.png";
import testImg1 from "../images/new-html/testiimg1.png";
import testImg2 from "../images/new-html/testimg2.png";
import quote from "../images/new-html/quote.png";
import user1 from "../images/new-html/user1.png";
import noPath from "../images/NoPath.png";
import bannerVideo from "../public/banner.mp4";
import {useEffect, useRef} from 'react';
import Link from "next/link";
import ReactPlayer from 'react-player'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import url from 'url';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import PreLoader from "./preLoader";

export default function Home() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                // Handle any errors that may occur during video playback
                console.error('Error playing video:', error);
            });
        }
    }, []);

    return (
        <Layout>
            <PreLoader/>
            <section className="mainSlider">
                <video ref={videoRef} className="video-player" playsInline autoPlay loop muted>
                    <source src={bannerVideo} type="video/mp4"/>
                </video>
                <div className="slideContent slideOne">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h6 data-aos='fade-up'>Welcome to</h6>
                                <h2 data-aos='fade-up' data-aos-delay="150">Texas Christian Ashram</h2>
                                <Link href="/about" className="newthemeBtn" data-aos='fade-up' data-aos-delay="150">
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={shape} className="img-fluid mainImg" alt={shape}/>
            </section>

            <section className="missionSec mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="missionContent">
                                <h2 data-aos='fade-up' className="heading">Our Mission</h2>
                                <p data-aos='fade-up' data-aos-delay="150">For more than 80 years, individuals and
                                    families have attended Christian Ashram
                                    retreats all
                                    around the world to find rest and recreation, encouraging teaching, and meaningful
                                    friendship. Each retreat offers a life-transforming opportunity to focus on JESUS in
                                    the
                                    midst of other people who believe in the hope of God's unshakable kingdom.</p>
                                <p data-aos='fade-up' data-aos-delay="150">We recognize that each person is at a
                                    different place in life. One thing we have in
                                    common,
                                    is that life is tough sometimes. Sometimes we just need to unplug from all of life’s
                                    stressors and proactively focus on Jesus to recharge.</p>
                                {/*<Link data-aos='fade-up' data-aos-delay="200" href="/about#ourMission"
                                      className="newthemeBtn">About Us</Link>*/}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <figure data-aos='zoom-in' data-aos-delay="150" className="missionImg">
                                <Image src={shape2} className="img-fluid" alt={shape2}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>


            <section className="funMain">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <div className="missionContent mb-5 text-center">
                                <h2 className="heading" data-aos='fade-up'>Fun for the Whole Family</h2>
                                <p data-aos='fade-up' data-aos-delay="150">We believe that the families’ needs are based
                                    on age. That is why we offer a variety
                                    of
                                    programs and activities designed to meet the needs of every member of your
                                    family.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="family d-flex justify-content-center">
                                <div className="familyBox" data-aos='fade-right' data-aos-delay="150">
                                    <figure><Image src={family1} className="img-fluid imgContainer" alt={family1}/>
                                    </figure>
                                    <h2>Family Activities:</h2>
                                    <p>Experience Love and Acceptance in a Unique Setting</p>
                                    <Link href="/about#family" className="newthemeBtn borderBtn">Read More</Link>
                                </div>
                                <div className="familyBox" data-aos='fade-right' data-aos-delay="150">
                                    <figure><Image src={shape4} className="img-fluid imgContainer" alt={shape4}/>
                                    </figure>
                                    <h2>Adult Activities:</h2>
                                    <p>Grow in Faith and Fellowship with Other Adults</p>
                                    <Link href="/about#adult" className="newthemeBtn borderBtn">Read More</Link>
                                </div>
                                <div className="familyBox" data-aos='fade-left' data-aos-delay="150">
                                    <figure><Image src={family3} className="img-fluid imgContainer" alt={family3}/>
                                    </figure>
                                    <h2>Youth Activities:</h2>
                                    <p>Game Time, Jesus Time, Down Time… About Time!</p>
                                    <Link href="/about#youth" className="newthemeBtn borderBtn">Read More</Link>
                                </div>
                                <div className="familyBox" data-aos='fade-left' data-aos-delay="150">
                                    <figure><Image src={noPath} className="img-fluid imgContainer" alt={noPath}/>
                                    </figure>
                                    <h2>Children's Activities</h2>
                                    <p>Learn about Jesus in a Fun and Engaging Way</p>
                                    <Link href="/about#children" className="newthemeBtn borderBtn">Read More</Link>
                                </div>
                                <div className="familyBox" data-aos='fade-left' data-aos-delay="150">
                                    <figure><Image src={shape3} className="img-fluid imgContainer" alt={shape3}/>
                                    </figure>
                                    <h2>Young Adults</h2>
                                    <p>Learn about Jesus in a Fun and Engaging Way</p>
                                    <Link href="/about#young" className="newthemeBtn borderBtn">Read More</Link>
                                </div>
                            </div>
                            {/*<Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                loop={true}
                            >
                                <SwiperSlide>
                                    <div className="familyBox" data-aos='fade-right' data-aos-delay="150">
                                        <figure><Image src={family1} className="img-fluid" alt={family1}/></figure>
                                        <h2>Family Activities:</h2>
                                        <p>Experience Love and Acceptance in a Unique Setting</p>
                                        <Link href="/about#family" className="newthemeBtn borderBtn">Read More</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="familyBox" data-aos='fade-up' data-aos-delay="150">
                                        <figure><Image src={family2} className="img-fluid" alt={family2}/></figure>
                                        <h2>Adult Activities::</h2>
                                        <p>Grow in Faith and Fellowship with Other Adults</p>
                                        <Link href="/about#adult" className="newthemeBtn borderBtn">Read More</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="familyBox" data-aos='fade-left' data-aos-delay="150">
                                        <figure><Image src={family3} className="img-fluid" alt={family3}/></figure>
                                        <h2>Youth Activities:</h2>
                                        <p>Discover the Power of Community and Faith</p>
                                        <Link href="/about#youth" className="newthemeBtn borderBtn">Read More</Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="familyBox" data-aos='fade-left' data-aos-delay="150">
                                        <figure><Image src={noPath} className="img-fluid" alt={noPath}/></figure>
                                        <h2>Children's Activities</h2>
                                        <p>Learn about Jesus in a Fun and Engaging Way</p>
                                        <Link href="/about#children" className="newthemeBtn borderBtn">Read More</Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>*/}
                        </div>
                    </div>
                </div>
            </section>


            <section className="serveBg">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-10">
                            <div className="serveContent">
                                <h2 className="heading" data-aos='fade-up'>We Serve The Entire Family</h2>
                                <p data-aos='fade-up' data-aos-delay="150">At the Texas Christian Ashram, there is a
                                    group for everyone in your family!</p>
                                <Link data-aos='fade-up' data-aos-delay="150" href="/about#schedule"
                                      className="newthemeBtn">2024
                                    Schedule</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonialMain">
                <div className="container">
                    <h2 className="heading text-center">Need Prayer?</h2>
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-5">
                            <div className="testiImg">
                                <figure>
                                    <span data-aos='zoom-in' data-aos-delay="150" className="circle1"/>
                                    <Image data-aos='fade-up' data-aos-delay="150" src={testImg1} className="img-fluid"
                                           alt={testImg1}/>
                                    <span data-aos='zoom-in' data-aos-delay="150" className="testiSecnd">
                                        <Image src={testImg2} className="img-fluid" alt={testImg2}/></span>
                                    <span data-aos='zoom-in' data-aos-delay="150" className="circle2"/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-7">
                            <Swiper className='reviewSlider'
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    loop
                            >
                                <SwiperSlide>
                                    <div className="reviewContent">
                                        <figure><Image src={quote} className="img-fluid" alt={quote}/></figure>
                                        <p>It takes a village! If you are going through some tough times, have some
                                            great news to share, and/or need some prayer for others, please submit the
                                            request so we can pray with you!</p>
                                        {/*<span>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                        </span>*/}
                                        {/*<div className="user">
                                            <h4>Emma Rodriguez</h4>
                                            <Image src={user1} className="img-fluid" alt={user1}/>
                                        </div>*/}
                                    </div>
                                </SwiperSlide>
                                {/*<SwiperSlide>
                                    <div className="reviewContent">
                                        <figure><Image src={quote} className="img-fluid" alt={quote}/></figure>
                                        <p>As a parent, it can be challenging to find a spiritual retreat that
                                            accommodates the
                                            needs of
                                            the entire family. The Texas Christian Ashram was the perfect solution
                                            for us. Our
                                            children
                                            had a blast participating in age-appropriate activities, while my spouse
                                            and I were
                                            able to
                                            deepen our faith through the adult programs. We left feeling closer to
                                            each other
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
                                </SwiperSlide>*/}
                            </Swiper>
                            <div className="reviewsSlider swiper">
                                <div className="swiper-wrapper">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}