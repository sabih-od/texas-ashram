import {useRouter} from 'next/router';
import React, {useState, useEffect, useCallback} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import {signup} from '../services/authService';
import {loginUser} from '../services/authService';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl'

// ** Icons Imports
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Members(props) {

    // Sign Up And Login Tab Changes Work
    const [login, setLogin] = useState(0);

    const loginForm = useCallback(() => {
        const loginFormElements = document.querySelectorAll(".loginForm");
        loginFormElements.forEach((ele) => {
            ele.style.display = "none";
        });

        if (login === 0) {
            setLogin(1);
        } else {
            setLogin(0);
        }
    }, [login, setLogin]);

    useEffect(() => {
        const loginFormElements = document.querySelectorAll(".loginForm");
        if (loginFormElements.length > 0) {
            loginFormElements[login].style.display = "block";
        }
    }, [login]);
    // Sign Up And Login Tab Changes Work

    // signup and login work
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setConfirmShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    // signup and login work

    // remember password work
    const handleRememberPasswordChange = (e) => {
        setRememberPassword(e.target.checked);
    };

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

    const router = useRouter();

    // Sign-up Request Work
    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordMismatchError(true);
            return;
        }

        const result = await signup(first_name, last_name, email, phone, password);

        if (result.data === null) {
            setErrorMessage("Exception Error!");
            router.back();
        } else {
            if (result.data.success === true) {
                await router.push('/');
            }
        }
    }
    // Sign-up Request Work

    // Login Request Work
    const loginHandle = async (e) => {
        e.preventDefault();

        const result = await loginUser(email, password);
        console.log(result)

        if (result.data === null) {
            setErrorMessage("Exception Error!");
            router.back();
        } else {
            if (result.data.success === true) {
                await router.push('/');
            }
        }
    }
    // Login Request Work

    return (
        <Layout>
            {/*<!--Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>My account</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">My account</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            <section className="pb-0">
                <div className="container">
                    <div className="row mx-4">
                        <div className="col-md-6 pr-5">
                            {/*Login Work Start*/}
                            <div className="loginForm">
                                <h2>LOGIN</h2>
                                <form onSubmit={loginHandle}>
                                    <label htmlFor="">Username or email address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 6}}>
                                        <OutlinedInput
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            // className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormControl>
                                    <br/>

                                    <label htmlFor="">Password <span className="text-danger">*</span></label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 6}}>
                                        {/*<InputLabel htmlFor='auth-login-password'>Password</InputLabel>*/}
                                        <OutlinedInput
                                            id="password"
                                            name="password"
                                            // className="form-control mb-4"
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

                                    <button className="btn themeBtn green w-100" type="submit">Login</button>
                                    {errorMessage && <div className="error">{errorMessage}</div>}
                                    <div className="d-flex justify-content-between mt-4">
                                        <label htmlFor="remember" className="remember">
                                            {/*<input type="checkbox" className="mr-2" id="remember"/>*/}
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                id="remember"
                                                checked={rememberPassword}
                                                onChange={handleRememberPasswordChange}
                                            />
                                            <span className="checkmark"/>
                                            Remember me
                                        </label>

                                        <Link href="/forgot" className="btn-link">Lost your Password?</Link>
                                    </div>
                                </form>
                            </div>
                            {/*Login Work End*/}

                            {/*Register Work Start*/}
                            <div className="loginForm">
                                <h2>REGISTER</h2>
                                <form onSubmit={handleSignup}>
                                    <label htmlFor="first_name">First Name <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 3}}>
                                        <OutlinedInput
                                            type="text"
                                            id="first_name"
                                            name="first_name"
                                            // className="form-control"
                                            value={first_name}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </FormControl>
                                    <br/>
                                    <label htmlFor="last_name">Last Name <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 3}}>
                                        <OutlinedInput
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            // className="form-control"
                                            value={last_name}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </FormControl>
                                    <br/>
                                    <label htmlFor="user_email">Username or Email Address <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 3}}>
                                        <OutlinedInput
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            // className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormControl>
                                    <br/>
                                    <label htmlFor="phone">Phone Number <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 3}}>
                                        <OutlinedInput
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            // className="form-control"
                                            value={phone}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </FormControl>
                                    <br/>
                                    <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 6}}>
                                        <OutlinedInput
                                            id="password"
                                            name="password"
                                            // className="form-control mb-4"
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
                                    <label htmlFor="password">Confirm Password <span
                                        className="text-danger">*</span></label>
                                    <br/>
                                    <FormControl fullWidth sx={{mb: 6}}>
                                        <OutlinedInput
                                            id="password"
                                            name="password"
                                            // className="form-control mb-4"
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
                                    {passwordMismatchError && <p className="error">Password does not match</p>}
                                    {errorMessage && <div className="error">{errorMessage}</div>}
                                    <button className="btn themeBtn green w-100" type="submit">Register</button>
                                </form>
                            </div>
                            {/*Register Work End*/}
                        </div>

                        {/*Register And Login Tab Changes Work*/}
                        <div className="col-md-6 border-left text-center">
                            <div className="col-md-11 mx-auto">
                                <h2>REGISTER</h2>
                                <p>Registering for this site allows you to access your order status and history.
                                    Just
                                    fill in the fields below, and we'll get a new account set up for you in no time.
                                    We
                                    will only ask you for information necessary to make the purchase process faster
                                    and
                                    easier.</p>
                                <button className="btn themeBtn" onClick={loginForm}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Members;
