import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import speaker from "../images/speaker1.png";
import speaker2 from "../images/speaker2.png";

function Speakers(props) {
    return (
        <Layout>
            {/*!--Main Heading --*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Speakers</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">speakers</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*!--!Main Heading --*/}


            {/*<section className="innerPage">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row align-items-center justify-content-center mx-5">*/}
            {/*            <div className="col-md-7 text-center" data-aos="fade-up">*/}
            {/*            /!*<div className="col-md-7 text-center" data-aos="">*!/*/}
            {/*                <h6 className="subheading text-secondary">Texas Christian Ashram</h6>*/}
            {/*                <h1 className="heading mb-0">2021 Speakers</h1>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="pb-0">
                <div className="container">
                    <div className="row mx-4">
                        <div className="col-md-9 px-5">
                            <h6 className="subheading text-secondary">Evangelist</h6>
                            <h1 className="heading">Bob Hayes</h1>
                            <p className="text">Bob Hayes was born in Houston, Texas, and is the third generation of
                                Methodist ministers in his family. Growing up in a Methodist parsonage the call to
                                ministry came early, and at age 13, Robert gave his life to Christ. He says that his
                                life was shaped by his father's preaching and his mother's knowledge of the great hymns
                                of the faith.</p>
                            <p className="text">Bob is married to Deliliah "Dee” Hayes and is the proud father of three
                                grown children: Joya, Robert III, and Ryan. After retiring from his service as a United
                                Methodist bishop he joined the staff of The Woodlands Methodist Church and was recently
                                elected to serve the United Christian Ashram ministry as a member of The Four, the
                                governing staff of the UCA that was set up by E. Stanley Jones when the ministry began.
                                ​</p>
                            <p className="text">Bob completed his undergraduate studies at Huston-Tillotson College in
                                Austin, Texas, majoring in English, and did his seminary graduate work at Perkins School
                                of Theology, SMU, Dallas, Texas. He later completed his D.Min. at Drew University in
                                Madison, New Jersey.</p>
                            <p className="text">Bob is known as one of the best communicators in the faith and we are
                                excited to have him back this summer at the Texas Christian Ashram.</p>
                        </div>
                        <div className="col-md-3 mt-5">
                            <Image src={speaker} className="img-fluid mt-5" alt="speaker" />
                        </div>


                        <div className="col-12">
                            <hr />
                        </div>

                        <div className="col-md-9 px-5 mt-5">
                            <h6 className="subheading text-secondary">Bible Teacher</h6>
                            <h1 className="heading">Brian Shimer</h1>
                            <p className="text">Brian Shimer became involved in the Christian Ashram movement first at
                                the California Winter Ashram in February 1981.</p>
                            <p className="text">The movement began to work on his life through the leadership of Mary
                                Webster, who had traveled with Brother Stanley all over the world. Mary Webster was a
                                marvel and wanted Brian and his fiancé to marry while at camp! "Love is too precious to
                                wait," she said.​</p>
                            <p className="text">Brian and Karen have been married for 39 years and have four grown
                                daughters and five grandchildren. He has taught as a Bible Teacher and Evangelist at
                                Christian Ashrams in the USA and Canada over the last 30 years, serves on the Ashram
                                International Board, and has been director of the California Winter Ashram for two
                                years.</p>
                        </div>
                        <div className="col-md-3 mt-5">
                            <br />
                                <Image src={speaker2} className="img-fluid mt-5" alt="speaker 2" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
);
}

export default Speakers;