import React from 'react';
import Layout from "../components/Layout";
import Link from "next/link";

function Contact(props) {
    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Contact us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            <section className="contact-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 px-5 border-right py-4">
                            <span className="heading-2">INFORMATION QUESTIONS</span>
                            <h4>FREQUENTLY ASKED QUESTIONS</h4>
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <button className="btn" data-toggle="collapse" data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                            What is Lorem Ipsum?
                                        </button>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s with the release
                                                of Letraset sheets containing Lorem Ipsum passages, and more recently
                                                with desktop publishing software like Aldus PageMaker including versions
                                                of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <button className="btn collapsed" data-toggle="collapse"
                                                data-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            What is Lorem Ipsum?
                                        </button>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s with the release
                                                of Letraset sheets containing Lorem Ipsum passages, and more recently
                                                with desktop publishing software like Aldus PageMaker including versions
                                                of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <button className="btn collapsed" data-toggle="collapse"
                                                data-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                            What is Lorem Ipsum?
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                         data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five
                                                centuries, but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s with the release
                                                of Letraset sheets containing Lorem Ipsum passages, and more recently
                                                with desktop publishing software like Aldus PageMaker including versions
                                                of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 px-5 py-4">
                            <span className="heading-2">INFORMATION ABOUT US</span>
                            <h4>CONTACT US FOR ANY QUESTIONS</h4>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label for="">Your Name</label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label for="">Your Email</label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label for="">Phone Number</label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <label for="">Company</label>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <label for="">Your Message</label>
                                            <textarea className="form-control" rows="10"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn submitbtn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429173.550001418!2d-97.01244183566176!3d32.8209280746799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1663164790184!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{border: '0'}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </Layout>
    );
}

export default Contact;