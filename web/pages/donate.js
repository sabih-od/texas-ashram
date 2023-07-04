import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import donate from "../images/donate3.jpg";
import Image from "next/image";

function Donate(props) {

    // tab change and price work
    const [activeTab, setActiveTab] = useState(0);
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount(amount !== null ? amount.toString() : '');
    };

    const handleCustomAmountChange = (event) => {
        setSelectedAmount(null);
        setCustomAmount(event.target.value);
    };

    const showTab = (tabIndex) => {
        if (selectedAmount !== null) {
            console.log('Selected amount:', selectedAmount);
            // Continue with your logic for the selected amount
        } else if (customAmount !== '') {
            console.log('Custom amount:', customAmount);
            // Continue with your logic for the custom amount
        } else {
            console.log('Please select an amount or enter a custom amount');
            // Handle the case where no amount is selected/entered
        }
        setActiveTab(tabIndex);
    };

    useEffect(() => {
        const tabs = document.querySelectorAll(".donateCard .tab");
        tabs.forEach((tab, index) => {
            tab.style.display = index === activeTab ? 'block' : 'none';
        });
    }, [activeTab]);

    useEffect(() => {
        showTab(0);
    }, []);

    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Donate</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Donate</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Testimonial Section -->*/}
            <section className="donate-section">
                <div className="container">
                    <div className="col-md-6 mx-auto">
                        <div className="donateCard mx-4">
                            <div className="tab">
                                <div className="col-md-10 mx-auto">
                                    <h4 className="title">Support Our Cause</h4>
                                    <p>Help our organization by donating today! All donations go directly to making a
                                        difference for our cause.</p>
                                </div>
                                <figure>
                                    <Image src={donate} className="img-fluid" alt="donate"/>
                                </figure>
                                <button className="btn themeBtn mt-5" onClick={() => showTab(1)}>
                                    Donate Now <i className="fas fa-chevron-right ml-2" />
                                </button>
                            </div>

                            {/* choose price work */}
                            <div className="tab pt-0">
                                <div className="tab-header card-header">
                                    <button className="btn" onClick={() => showTab(0)}>
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <strong className="mx-auto">Choose Amount</strong>
                                </div>
                                <div className="col-md-10 mx-auto mt-4">
                                    <p>
                                        How much would you like to donate? As a contributor to Nazareth, we make sure your
                                        donation goes directly to supporting our cause. Thank you for your generosity!
                                    </p>
                                    <div className="inputBox">
                                        <span>$</span>
                                        <input
                                            type="text"
                                            className="donatePrice"
                                            value={customAmount}
                                            onChange={handleCustomAmountChange}
                                            disabled={selectedAmount !== null}
                                        />
                                    </div>
                                </div>
                                <div className="button-group">
                                    <button
                                        className={`btn themeBtn price ${selectedAmount === 10 ? 'active' : ''}`}
                                        onClick={() => handleAmountClick(10)}
                                    >
                                        <sup>$</sup> 10
                                    </button>
                                    <button
                                        className={`btn themeBtn price ${selectedAmount === 25 ? 'active' : ''}`}
                                        onClick={() => handleAmountClick(25)}
                                    >
                                        <sup>$</sup> 25
                                    </button>
                                    <button
                                        className={`btn themeBtn price ${selectedAmount === 50 ? 'active' : ''}`}
                                        onClick={() => handleAmountClick(50)}
                                    >
                                        <sup>$</sup> 50
                                    </button>
                                    <button
                                        className={`btn themeBtn price ${selectedAmount === 100 ? 'active' : ''}`}
                                        onClick={() => handleAmountClick(100)}
                                    >
                                        <sup>$</sup> 100
                                    </button>
                                    <button
                                        className={`btn themeBtn price ${selectedAmount === 250 ? 'active' : ''}`}
                                        onClick={() => handleAmountClick(250)}
                                    >
                                        <sup>$</sup> 250
                                    </button>
                                    <button
                                        className={`btn themeBtn price ${selectedAmount === null ? 'active' : ''}`}
                                        onClick={() => handleAmountClick(null)}
                                    >
                                        custom Amount
                                    </button>
                                </div>
                                <button className="btn themeBtn mt-5" onClick={() => showTab(2)}>
                                    Continue <i className="fas fa-chevron-right ml-2" />
                                </button>
                            </div>
                            {/* choose price work */}

                            <div className="tab">
                                <div className="mx-3">
                                    <i className="far fa-check-circle fa-6x text-success"/>
                                    <h4 className="mt-3">A great big thank you!</h4>
                                    <p>sdasd, your contribution means a lot and will be put to good use in making a
                                        difference. We’ve sent your donation receipt to asdsad@dfs.com.</p>

                                </div>
                                <div className="bg-light border p-4 mb-5">
                                    <small className="text-dark">Help spread the word by sharing your support with your
                                        friends and followers!</small>
                                </div>
                                <span>Donor Details</span>
                                <div className="border mx-3 p-3 my-4 mytext">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0"><i className="fas fa-user mr-2"/>DONOR NAME</p>
                                        <small>sdasd sdad</small>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0"><i className="fas fa-envelope mr-2"/>EMAIL ADDRESS</p>
                                        <small>asdsad@dfs.com</small>
                                    </div>
                                </div>
                                <span>Donation Details</span>
                                <div className="border mx-3 p-3 mt-4 mytext">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0">PAYMENT STATUS</p>
                                        <small>Pending</small>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0">PAYMENT METHOD</p>
                                        <small>Offline Donation</small>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0">DONATION AMOUNT</p>
                                        <small>$100</small>
                                    </div>
                                </div>
                                <div
                                    className="bg-light d-flex align-items-center justify-content-between mx-3 px-3 pb-3 border mytext">
                                    <p className="mb-0"><b>DONATION TOTAL</b></p>
                                    <p className="mb-0"><b>$100</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- !Testimonial Section -->*/}
        </Layout>
    );
}

export default Donate;