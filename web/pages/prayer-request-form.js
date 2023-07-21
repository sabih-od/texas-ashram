import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {create} from '../services/prayerRequestService';
import {useRouter} from 'next/router';
import Cookie from "js-cookie";
import Link from "next/link";

function PrayerRequestForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // useEffect(() => {
    //     const loggedIn = Cookie.get('token');
    //     setIsLoggedIn(!loggedIn);
    // }, []);

    const handlePrayerForm = async (e) => {
        e.preventDefault();

        // Perform form validation
        const errors = {};

        if (!name) {
            errors.name = 'Name is required';
        }

        /*if (!email) {
            errors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            errors.email = 'Invalid email format';
        }*/

        /*if (!contact) {
            errors.contact = 'Contact is required';
        }*/

        /*if (!time) {
            errors.time = 'Time is required';
        }

        if (!startDate) {
            errors.startDate = 'Start Date is required';
        }

        if (!endDate) {
            errors.endDate = 'End Date is required';
        }*/

        if (!description) {
            errors.description = 'Description is required';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Check if the user is logged in
        const loggedIn = Cookie.get('token');
        if (!loggedIn) {
            setErrorMessage('Please first logged in then submit the form');
            return;
        }

        // Clear form errors
        setFormErrors({});

        // Submit the form
        setIsFormSubmitted(true);


        // Submit the form data to your API route
        const result = await create(name, email, contact, startDate, endDate, time, description);
        console.log('prayer', result);

        if (result.data.success === true) {
            await router.push('/');
        } else {
            setErrorMessage("Exception Error!");
            router.back();
        }

        /*if (result.data.success === true) {
            // Send the email using the server-side function
            const emailSent = await sendEmail(name, email, contact, startDate, endDate, time, description);

            if (emailSent) {
                // Handle successful form submission
                console.log('Form submitted successfully!');
                await router.push('/');
            } else {
                // Handle email sending failure
                setErrorMessage('Error sending email. Please try again later.');
            }
        } else {
            // Handle form submission failure
            setErrorMessage('Exception Error!');
            router.back();
        }*/
    };

    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Prayer Request Form</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Prayer Request Form
                            </li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Prayer Request Form Section -->*/}
            <section className="request-section pb-0">
                <div className="container custom-container ">
                    <div className="col-md-10 mx-auto">
                        <div className="cards">
                            <h4 className="text-center">Prayer Request Form</h4>

                            {/* Display success message */}
                            {isFormSubmitted && <p className="success">Form submitted successfully!</p>}
                            <form onSubmit={handlePrayerForm}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="">Name</label>
                                        {formErrors.name && <p className="error">{formErrors.name}</p>}
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="">Email</label>
                                        {formErrors.email && <p className="error">{formErrors.email}</p>}
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label htmlFor="">Phone Number</label>
                                        {formErrors.contact && <p className="error">{formErrors.contact}</p>}
                                        <input
                                            type="text"
                                            name="contact"
                                            className="form-control"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                        />
                                    </div>
                                    {/*<div className="col-md-6 mb-4">
                                        <label htmlFor="">Time *</label>
                                        {formErrors.time && <p className="error">{formErrors.time}</p>}
                                        <input
                                            type="time"
                                            name="time"
                                            className="form-control"
                                            value={time}
                                            onChange={handleTimeChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4 my-4">
                                        <div>
                                            <label htmlFor="">Start Date *</label>
                                            {formErrors.startDate && <p className="error">{formErrors.startDate}</p>}
                                            <DatePicker
                                                selected={startDate}
                                                onChange={handleStartDateChange}
                                                className="form-control"
                                            />
                                            <span className="mx-4 mt-5">To</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 my-4">
                                        <div>
                                            <label htmlFor="">End Date *</label>
                                            {formErrors.endDate && <p className="error">{formErrors.endDate}</p>}
                                            <DatePicker
                                                selected={endDate}
                                                onChange={handleEndDateChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>*/}

                                    <div className="col-md-12 mb-4">
                                        <label htmlFor="">Description</label>
                                        {formErrors.description && <p className="error">{formErrors.description}</p>}
                                        <textarea
                                            rows="10"
                                            className="form-control"
                                            name="description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <br/>
                                    <div className="col-md-12 mb-4">
                                        {errorMessage && <p className="error">{errorMessage}</p>}
                                    </div>

                                    <br/>
                                    <div className="col-12">
                                        <button className="btn themeBtn invert" type="submit">
                                            Submit Now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- !Prayer Request Form Section -->*/}
        </Layout>
    );
}

export default PrayerRequestForm;
