import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import missionImg1 from "../images/missionimg1.jpg";
import missionImg2 from "../images/missionimg2.jpg";

function OurMission(props) {
    return (
        <Layout>
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Our Mission</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Our Mission</li>
                        </ol>
                    </nav>
                </section>
            </div>

            <section className="inner-about-section innerPage">
                <div className="container">
                    <h1 className="heading text-center mt-4 mb-3">What we Believe</h1>
                    <div className="row align-items-center mx-5">
                        <div className="col-md-6">
                            <figure className="margin-top">
                                <Image src={missionImg2} className="img-fluid" alt="missionImg 2"/>
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
                        <div className="col-md-6 mt-2" data-aos="fade-right">
                        {/*<div className="col-md-6 mt-2" data-aos="">*/}
                            <figure>
                                <Image src={missionImg1} className="img-fluid" alt="missionImg 1"/>
                            </figure>
                            <div className="pl-5 py-4">
                                <h2 className="text-secondary mb-3">Our Mission</h2>
                                <p className="text mb-1"><strong>Morning Watch</strong> At 7:00 a.m. Sunday thru
                                    Thursday, A
                                    time of reflection, witnessing, and teaching will be held to start the day.</p>
                                <br/>
                                <p className="text mb-1"><strong>Open Heart</strong> Saturday afternoon participants
                                    open their hearts to the group, expressing needs and sharing blessings. This
                                    time lays the groundwork for the closeness and bonding of our time together.</p>
                                <br/>
                                <p className="text mb-1"><strong>Bible Hour</strong> A time for an in-depth Bible
                                    study led by a qualified teacher of the week.</p>
                                <br/>
                                <p className="text mb-1"><strong>Bible Discussion Groups</strong> After the
                                    Bible Hour, your group will meet to discuss and apply what was taught by
                                    the Bible teacher.</p>
                                <br/>
                                <p className="text mb-1"><strong>Prayer Groups
                                    (Confidential)</strong> Groups which allow participants to encourage
                                    each other in faith and pray for each other in love. What is said is
                                    lifted to the Lord and left with Him.</p>
                                <br/>
                                <p className="text mb-1"><strong>Evangelistic Sermons</strong> Stir the
                                    soul and rekindle the fire of our faith. Christian Ashram
                                    evangelists are dynamic, bold and relevant in their
                                    proclamation.</p>
                                <br/>
                                <p className="text mb-1"><strong>Healing and
                                    Wholeness</strong> Wednesday Night all participants are
                                    given the opportunity to receive physical, emotional, mental
                                    and spiritual healing.</p>
                                <br/>
                                <p className="text mb-1"><strong>Overflowing Heart</strong> A
                                    time during the retreat when those who have been blessed
                                    during the Christian Ashram are given the opportunity to
                                    share what God has done in their lives.</p>
                                <br/>
                                <p className="text mb-1"><strong>24-Hour Prayer
                                    Vigil</strong> From the start, participants will
                                    volunteer to pray in one-hour blocks inside the
                                    prayer vigil for the Ashram, its members and
                                    oneself.</p>
                                <br/>
                                <p className="text mb-1"><strong>Work hour "Labor of
                                    Love"</strong> After lunch, we join together in
                                    a time of fun and labor to help beautify the
                                    camp. Lawyer and construction worker shed our
                                    worldly titles to join together in Kingdom
                                    service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default OurMission;