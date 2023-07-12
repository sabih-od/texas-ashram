import React from 'react';
import Head from 'next/head';
import Logo from "../images/logo.png";

const Header = () => {
    return (
        <React.Fragment>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <Head>
                <link rel="icon" href={Logo} />
                <link rel="stylesheet" href="/styles/css/all.min.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <link rel="stylesheet" href="/styles/css/custom.min.css" />
                <link rel="stylesheet" href="/styles/css/new-html/custom.min.css" />
                <link rel="stylesheet" href="/styles/css/responsive.css" />
                <title>Texas Christian Ashram</title>
            </Head>
        </React.Fragment>
    );
};

export default Header;
