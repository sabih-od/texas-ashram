import {useRouter} from 'next/router';
import React, {useState} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import {forgotPassword} from '../services/forgotService'

function Forgot(props) {

    const [loading, setLoading] = useState(0);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const handleForgot = async (e) => {
        e.preventDefault()
        setLoading(1);

        try {
            const result = await forgotPassword({email});

            setLoading(0);
            if (result?.data?.success === true) {
                // Handle success
                await router.push('/submitOtp');
            } else {
                // Handle error
                setErrorMessage('Exception Error!')
                // router.back();
            }
        } catch (error) {
            setLoading(0);
            console.error(error);
            setErrorMessage('Exception Error!');
            // router.back();
        }
    };

    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Forget Password</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Forget Password</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            <section className="pb-0">
                <div className="container ">
                    <div className="row">
                        <div className="col-6">
                            {/*Login Work Start*/}
                            <div className="forget-Password">
                                <h2>Forget Password</h2>
                                <p>You are not alone. We’ve all been here at some point</p>
                                <form onSubmit={handleForgot}>
                                    <label htmlFor="user_email">
                                        Username or email address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <br/>
                                    {errorMessage && <div className="error my-2">{errorMessage}</div>}
                                    <button className="btn forgetBtn green w-100" type="submit">
                                        {!loading ? 'Get secure link' : 'Sending...'}
                                    </button>
                                </form>
                            </div>
                            {/*Login Work End*/}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Forgot;