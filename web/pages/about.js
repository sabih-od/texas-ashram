import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import aboutMain from "../images/missionimg2.jpg";
import AboutImg from "../images/imgpsh_fullsize_anim.png";
import missionImg1 from "../images/mission1.jpg";
import missionImg2 from "../images/mission2.jpg";
import missionImg3 from "../images/mission3.jpg";
import missionImg4 from "../images/mission4.jpg";
import missionImg5 from "../images/mission5.jpg";
import missionImg6 from "../images/mission6.jpg";
import missionImg7 from "../images/mission7.jpg";
import missionImg8 from "../images/mission8.jpg";
import missionImg9 from "../images/mission9.jpg";
import missionImg10 from "../images/mission10.jpg";
import missionImg11 from "../images/mission11.jpg";
import Link from "next/link";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import iconImg from "../images/icon/pdf-icon.png";
import familiesImg from "../images/familiesimg.webp";
import famImg from "../images/fam.png";
import famImg2 from "../images/fam2.png";
import famImg3 from "../images/fam3.png";

function AboutUs(props) {
    return (
        <Layout>
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </section>
            </div>
            <section className="inner-about-section innerPage">
                <div className="container">
                    <h1 className="heading text-center mt-4 mb-3">What we Believe</h1>
                    <div className="row align-items-center mx-5 text-center">
                        <div className="col-12">
                            <figure className="margin-top">
                                <Image src={aboutMain} className="img-fluid" alt="missionImg 2"/>
                            </figure>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">What is a Christian Ashram?</h2>
                                <p className="text">It is a disciplined Christian experience held in a retreat setting
                                    for
                                    the purpose of deeper spiritual growth which makes God more real in daily living.
                                    This provides a break from the hustle and bustle of everyday life and a move toward
                                    the grace and presence of Jesus Christ.
                                    What can I expect at a Christian Ashram?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="videoBox">
                                <Image src={AboutImg} alt={AboutImg}/>
                                <a href="https://vimeo.com/95424842" data-fancybox="" className="btn"><i
                                    className="far fa-play"/></a>
                            </div>
                        </div>
                        <div className="col-md-6 px-5" data-aos="fade-left">
                            <h6 className="subheading text-primary">Welcome to the</h6>
                            <h1 className="heading">Texas Christian Ashram</h1>
                            <p>For more than 80 years, individuals and families have attended Christian Ashram retreats
                                all
                                around the world to find rest and recreation, encouraging teaching, and meaningful
                                friendship. Each retreat offers a life-transforming opportunity to focus on JESUS in the
                                midst of other people who believe in the hope of God's unshakable kingdom.</p>
                            <p>We recognize that each person is at a different place in life. One thing we have in
                                common,
                                is that life is tough sometimes. Sometimes we just need to unplug from all of life’s
                                stressors and proactively focus on Jesus to recharge. If you are looking for a place to
                                have
                                fun, recharge, learn, and grow in faith, surrounded by a group of fellow believers, this
                                is
                                the place for you and your family.</p>
                            <p>Our retreats are designed to provide a well-rounded experience, with inspiring teaching,
                                uplifting worship, and engaging fellowship for all age groups. You'll have the
                                opportunity
                                to participate in small group discussions, reflective times of prayer, and fun
                                recreational
                                activities.</p>
                            <p>We believe that rest and recreation are important parts of spiritual growth, so we also
                                offer
                                a variety of recreational activities such as hiking, swimming, and games.</p>
                            <a href="" className="themeBtn invert">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mx-auto text-center">
                            <h6 className="subheading text-primary" data-aos="fade-up">Our Mission</h6>
                            <h1 className="heading" data-aos="fade-up">What is a Christian Ashram?</h1>
                            <div data-aos="fade-up">
                                <p>It is a Christ focused experience held in a retreat setting for the purpose of
                                    spiritual
                                    growth which makes God more real in daily living. This provides a break from the
                                    hustle
                                    and bustle of everyday life and a move toward the grace and presence of Jesus
                                    Christ.
                                </p>
                                <p>This is where you can experience a transformative retreat for your soul. Our
                                    organization
                                    has been serving individuals and families for over 80 years, providing a place of
                                    rest,
                                    recreation, and meaningful fellowship.</p>
                                <p>What can I expect at a Christian Ashram?</p>
                            </div>

                            <Swiper className='missionSlider my-5 pb-5'
                                slidesPerView={1}
                                autoPlay
                                loop
                            >
                                    <SwiperSlide>
                                        <Image src={missionImg1} alt={missionImg1} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg2} alt={missionImg2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg3} alt={missionImg3} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg4} alt={missionImg4} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg5} alt={missionImg5} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg6} alt={missionImg6} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg7} alt={missionImg7} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg8} alt={missionImg8} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg9} alt={missionImg9} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg10} alt={missionImg10} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={missionImg11} alt={missionImg11} />
                                    </SwiperSlide>
                            </Swiper>
                            <a href="" className="themeBtn invert mt-4">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="innerPage">
                <div className="container">
                    <div className="row align-items-center justify-content-center mx-5 mb-5">
                        <div className="col-md-7" data-aos="fade-up">
                            {/*<div className="col-md-7" data-aos="">*/}
                            <h6 className="subheading text-secondary">Texas Christian Ashram</h6>
                            <h1 className="heading">We Serve the Entire Family</h1>
                            <p>At the Texas Christian Ashram, there is a group for everyone in your family!</p>
                        </div>
                        <div className="col-md-1 text-center">
                            <a href="#" download="">
                                <Image src={iconImg} width="70" alt="iconImg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-0">
                <div className="container">
                    <div className="row mx-4 align-items-end">
                        <div className="col-md-6">
                            <Image src={familiesImg} className="img-fluid" alt="familiesIm g"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Family Activities</h1>
                            <p className="text">The Ashram is unique because it is a family camp. People come to
                                experience the love and acceptance they may not feel in the world. Perfect? No, we are
                                just people. But we are people who love God and seek to be more like Him. And, we love
                                each other. We have many opportunities to be with our own family as well as the big
                                Ashram family. </p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>We eat together (it seems we’re always eating!), sing together, work together, and pray
                                together. It is a time for families to enjoy each other and longtime friends to catch
                                up. It is a time to cry and laugh, to share and encourage, to be quiet and listen, and
                                to grow and increase our faith and walk with God. </p>
                            <p>The Prayer Vigil is open 24 hours during the entire week. It is a special place and
                                provides the foundation for God to work on behalf of His people. It is open to
                                everyone. </p>
                            <p>The work hour goes on all day! All ages help with the sewing and embroidering of blankets
                                and bibs, picking up trash, and singing in the choir or providing special music. Special
                                projects are provided as well.</p>
                            <p>And we couldn’t do without the volunteers that make things happen! We encourage every
                                adult over the age of 18 to volunteer one hour with one of the children or youth
                                programs. Sowing that one hour will bless those you help out and it will bless you even
                                more.</p>
                            <p>Oh, and don’t forget ice cream time! </p>
                            <p>Come and experience the renewal and refreshing that a few short days will bring to your
                                heart.</p>
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <Image src={famImg} className="img-fluid" alt="famIm g"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Adult Activities</h1>
                            <p className="text">While the children and youth are enjoying their age-specific activities,
                                adults have many opportunities to grow in their faith and in fellowship with others. New
                                speakers are selected each year to provide preaching and teaching that will inspire and
                                encourage us to be more like Jesus and more loving towards each other.</p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>The mornings include sessions with the Bible teacher and the Evangelist while also having
                                an opportunity to participate in discussion groups. Prayer groups convene in the
                                afternoon. These small groups are special times for many since relationships are built
                                as hearts open up to share needs. The evenings are filled with music, testimonies, and
                                more of the Word of God. </p>
                            <p>Many people describe the whole Ashram experience as truly experiencing the Kingdom of God
                                here on earth. Come and experience it for yourself!</p>
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <Image src={famImg2} className="img-fluid" alt="famImg 2"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Youth Activities</h1>
                            <p className="text">The youth, middle school through high school, have their own leaders to
                                guide them through the week. They will spend some of their time listening to the Bible
                                teacher and/or Evangelist and some of the evening time enjoying the family singing. </p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>During their special times together they will hear how to follow Jesus in a peer
                                pressured world. Kingdom principles are presented and opportunities for responding to
                                the Word are given through the discussion and prayer groups, afternoon games and fun,
                                and evening sessions. </p>
                            <p>High school-aged kids have their own “Gazebo” time after hours that allow them to open
                                their hearts, worship Jesus, and pray together. This program produces life changing
                                experiences and great memories of friends growing up together.</p>
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <Image src={famImg3} className="img-fluid" alt="famImg 3"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Children's Activities</h1>
                            <p className="mb-0 text">Children of all ages are welcomed into the age appropriate programs
                                with teachers and volunteers that seek to share the love of Jesus. As a family camp, we
                                have infant and toddler, pre-school, and elementary programs. We want to come alongside
                                parents and guardians to support their efforts in introducing their children to Jesus
                                and His Kingdom. And to make sure they are well-cared for during the week!</p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>Our focus in all programs is the life we can experience as part of the Kingdom of God
                                through his son, Jesus Christ. Plenty of practice is provided as children learn how to
                                experience the love of God and how to love God through Biblical studies, worship, arts,
                                music, and recreation. </p>
                            <br/>
                            <p>Activities are provided during the mornings, afternoon prayer group time, and evening
                                sessions. We all enjoy singing and sharing together in the evening before children
                                are dismissed for their evening activities. Parents and guardians are encouraged to
                                spend time with their children during family times to talk about what they are
                                learning throughout the day. </p>
                            <p>Safe sanctuary guidelines are practiced so parents and guardians can be assured their
                                children are safe and secure during scheduled className times. Since the campgrounds
                                are deep and wide, parents and guardians are responsible to supervise their children
                                to ensure everyone’s safety at all other times.</p>
                            <p>Many adults that continue to come back year after year remember the fun and
                                fellowship they experienced here as children in this program.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AboutUs;