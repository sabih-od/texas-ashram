import React, {useState} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import {useRouter} from "next/router";
import {resetPassword} from "../services/forgotService";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";

function ResetPassword(props) {

    const [loading, setLoading] = useState(0);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setConfirmShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    // hide and show password work
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickConfirmShowPassword = () => {
        setConfirmShowPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // hide and show confirm password work

    const handleReset = async (e) => {
        e.preventDefault();
        setLoading(1);

        if (password !== confirmPassword) {
            setPasswordMismatchError(true);
            return;
        }

        const result = await resetPassword({password});

        if (result?.data?.success === true) {
            await router.push('/');
        } else {
            setErrorMessage('Exception Error!')
            router.back();
        }
    }

    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Reset Password</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Reset Password</li>
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
                                <h2>Reset Password</h2>
                                <p>You are not alone. We’ve all been here at some point</p>
                                <form onSubmit={handleReset}>
                                    <label htmlFor="user_email">
                                        Password
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 3}}>
                                        <OutlinedInput
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        edge='end'
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        aria-label='toggle password visibility'
                                                    >
                                                        {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <br/>
                                    <label htmlFor="user_email">
                                        Confirm Password
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 6}}>
                                        <OutlinedInput
                                            id="password"
                                            name="password"
                                            placeholder="Re-Enter your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        edge='end'
                                                        onClick={handleClickConfirmShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        aria-label='toggle password visibility'
                                                    >
                                                        {showConfirmPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <br/>
                                    {passwordMismatchError && <p className="error">Passwords does not match</p>}
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

export default ResetPassword;