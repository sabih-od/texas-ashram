import React, {useState} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import {useRouter} from "next/router";
import {submitOtp} from "../services/forgotService";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SubmitOtp(props) {

    const [loading, setLoading] = useState(0);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    // hide and show otp work
    const handleClickShowOtp = () => {
        setShowOtp(!showOtp);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // hide and show confirm otp work

    const handleOtp = async (e) => {
        e.preventDefault();
        setLoading(1);

        try {
            const result = submitOtp({email, otp});

            setLoading(0);
            if (result?.data?.success === true) {
                await router.push('/resetPassword');
            } else {
                setErrorMessage('Exception Error!')
                // router.back('/');
            }
        } catch (error) {
            setLoading(0);
            console.error(error);
            setErrorMessage('Exception Error!');
            // router.back();
        }
    }

    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Submit Otp</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Submit Otp</li>
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
                                <h2>Submit OTP</h2>
                                <p>Please verify.. Your OTP via send your email</p>
                                <form onSubmit={handleOtp}>
                                    <label htmlFor="user_email">
                                        Username or email address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 3}}>
                                        <OutlinedInput
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </FormControl>
                                    <br/>
                                    <label htmlFor="user_email">
                                        Your OTP
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 6}}>
                                        <OutlinedInput
                                            id="password"
                                            name="password"
                                            placeholder="Enter your OTP digits"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            type={showOtp ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        edge='end'
                                                        onClick={handleClickShowOtp}
                                                        onMouseDown={handleMouseDownPassword}
                                                        aria-label='toggle password visibility'
                                                    >
                                                        {showOtp ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    {/*<input
                                        className="form-control"
                                        type="password"
                                        name="otp"
                                        id="otp"
                                        placeholder="Enter your OTP digits"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />*/}
                                    <br/>
                                    {errorMessage && <div className="error">{errorMessage}</div>}
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

export default SubmitOtp;