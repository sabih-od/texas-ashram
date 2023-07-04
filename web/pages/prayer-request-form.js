import React from 'react';
import Layout from "../components/Layout";

function PrayerRequestForm(props) {
    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Prayer Request Form</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Prayer Request Form</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Books Section -->*/}
            <section className="request-section pb-0">
                <div className="container custom-container ">
                    <div className="col-md-10 mx-auto">
                        <div className="cards">
                            <h4 className="text-center">Prayer Request Form</h4>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label for="">Name *</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label for="">Email *</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label for="">Contact *</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label for="">Address *</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6 mb-4 d-flex align-items-center">
                                        <div>
                                            <label for="">Start Date *</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <span className="mx-4 mt-5">To</span>
                                        <div>
                                            <label for="">End Date *</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <label for="">Time *</label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="col-md-12 mb-4">
                                        <label for="">Description *</label>
                                        <textarea rows="10" className="form-control"/>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn themeBtn invert">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
            {/*<!-- !Books Section -->*/}
        </Layout>
    );
}

export default PrayerRequestForm;