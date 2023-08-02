import React, {useState, useEffect} from 'react';
import Layout from "../components/Layout";
import donate from "../images/donate3.jpg";
import Image from "next/image";
import Link from "next/link";

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

    // Stripe Work
    /*const stripePromise = loadStripe('pk_test_0rY5rGJ7GN1xEhCB40mAcWjg');
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const formData = new FormData();
            formData.append('amount', selectedAmount || parseFloat(customAmount));
            const blobData = new Blob([JSON.stringify(Object.fromEntries(formData))], {type: 'application/json'});
            console.log('blobData', blobData, formData);

            const response = await fetch(`${apiUrl()}/donations`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                },
                body: blobData,
            });

            if (!response.ok) {
                throw new Error('Payment request failed');
            }

            const session = await response.json();

            const id = session?.data?.id;
            const price = (selectedAmount || parseFloat(customAmount)) * 100;
            const priceString = price.toFixed(0);

            const result = stripe?.redirectToCheckout({
                lineItems: [
                    {
                        price: priceString,
                        quantity: 1,
                    },
                ],
                sessionId: id,
                mode: 'payment',
                successUrl: window.location.href + 'success=true',
                cancelUrl: window.location.href + '?success=false',
            });
            // const result = await stripe.redirectToCheckout({
            //     lineItems:[{
            //         price: priceString,
            //         quantity: 1,
            //     }],
            //     sessionId: id,
            //     mode: 'payment',
            //     successUrl: `${window.location.origin}/?success=true`,
            //     cancelUrl: `${window.location.origin}/?canceled=true`,
            // });

            if (result.error) {
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.error(error);
        }
    };*/
    /*const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const amount = selectedAmount || parseFloat(customAmount);

            // Create a Stripe Elements card element
            const cardElement = stripe.elements().create('card');

            // Mount the card element to the DOM or a container element

            // Collect card details using Stripe Elements
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                throw new Error(error.message);
            }

            // Create PaymentIntent
            const response = await fetch(`${apiUrl()}/donations`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                },
                body: JSON.stringify({ amount }),
            });

            if (!response.ok) {
                throw new Error('Payment request failed');
            }

            const { clientSecret } = await response.json();

            // Confirm PaymentIntent
            const { error: confirmError } = await stripe.paymentMethod(clientSecret, {
                payment_method: paymentMethod.id,
            });

            if (confirmError) {
                throw new Error(confirmError.message);
            }

            // Payment successful
            console.log('Payment successful');
        } catch (error) {
            console.error(error);
        }
    };*/

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
                                    <h4 className="title">Thank you for your support</h4>
                                    <p>With a completely volunteer staff, all donations go directly to scholarships,
                                        speakers, camp improvements, and supplies. You are making a difference directly
                                        into people’s lives. You are able to donate through Venmo or mail your donation
                                        to Texas Christian Ashram.
                                    </p>
                                    <p style={{fontWeight: 'bold', marginTop: '-20px',
                                        textAlign: 'initial',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex' }} >
                                        Texas Christian Ashram,
                                        <br/>
                                        2402 Nilelake Ct,
                                        <br/>
                                        Friendswood, TX 77546.</p>

                                </div>
                                <figure>
                                    <Image src={donate} className="img-fluid" alt="donate"/>
                                </figure>
                                <Link className="btn themeBtn mt-5" target="_blank"
                                      href="https://venmo.com/code?user_id=3581549681313252556&created=1689180324.903656&printed=1">
                                    Venmo <i className="fas fa-chevron-right ml-2"/>
                                </Link>
                                {/*<button className="btn themeBtn mt-5" onClick={() => showTab(1)}>
                                    Venmo <i className="fas fa-chevron-right ml-2"/>
                                </button>*/}
                            </div>

                            {/* choose price work */}
                            <div className="tab pt-0">
                                <div className="tab-header card-header">
                                    <button className="btn" onClick={() => showTab(0)}>
                                        <i className="fas fa-chevron-left"/>
                                    </button>
                                    <strong className="mx-auto">Choose Amount</strong>
                                </div>
                                <div className="col-md-10 mx-auto mt-4">
                                    <p>
                                        How much would you like to donate? As a contributor to Nazareth, we make sure
                                        your
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
                                {/*<button className="btn themeBtn mt-5" onClick={() => handlePayment()} type="submit">
                                    Continue <i className="fas fa-chevron-right ml-2" />
                                </button>*/}
                                <button className="btn themeBtn mt-5" onClick={() => showTab(2)}>
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
