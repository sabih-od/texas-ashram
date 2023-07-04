import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import video from "../images/video1.png";

function SermonsTeaching(props) {
    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Sermons And Teaching</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Sermons And Teaching</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Books Section -->*/}
            <section className="books-section pb-0">
                <div className="container custom-container ">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt="video"/>
                                <a href="../images/video1.png" data-fancybox=""><i className="fab fa-youtube"/></a>

                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt="video"/>
                                <a href="../images/video2.png" data-fancybox=""><i className="fab fa-youtube"/></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt="video"/>
                                <a href="../images/video3.png" data-fancybox=""><i className="fab fa-youtube"/></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt="video"/>
                                <a href="../images/video1.png" data-fancybox=""><i className="fab fa-youtube"/></a>

                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt="video"/>
                                <a href="../images/video2.png" data-fancybox=""><i className="fab fa-youtube"/></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt="video"/>
                                <a href="../images/video3.png" data-fancybox=""><i className="fab fa-youtube"/></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt="video"/>
                                <a href="../images/video1.png" data-fancybox=""><i className="fab fa-youtube"/></a>

                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt=""/>
                                <a href="../images/video2.png" data-fancybox=""><i className="fab fa-youtube"/></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="videoItems">
                                <Image src={video} className="img-fluid" alt=""/>
                                <a href="../images/video3.png" data-fancybox=""><i className="fab fa-youtube"/></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*<!-- !Books Section -->*/}
        </Layout>
    );
}

export default SermonsTeaching;