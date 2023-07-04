import React, { useEffect } from 'react';
import Head from 'next/head';
import 'jquery';

const Header = () => {
    /*useEffect(() => {
        let jQueryScript;
        let swiperScript;

        const loadScripts = () => {
            return new Promise((resolve, reject) => {
                // Load jQuery
                jQueryScript = document.createElement('script');
                jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
                jQueryScript.defer = true;
                document.head.appendChild(jQueryScript);

                // Wait for jQuery to be ready
                jQueryScript.onload = resolve;
                jQueryScript.onerror = reject;
            })
                .then(() => {
                    // Load other scripts that depend on jQuery
                    swiperScript = document.createElement('script');
                    swiperScript.src =
                        'https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.4.1/swiper-bundle.js';
                    swiperScript.integrity =
                        'sha512-qrfbLhNDyCmccYwfroq1tkgPW5wzwovHO/0yF9uI3PxhW8hK5oMJGIqdGumKwTiVbokU4EnCXn+T38OA0SqGrQ==';
                    swiperScript.crossOrigin = 'anonymous';
                    swiperScript.referrerPolicy = 'no-referrer';
                    swiperScript.defer = true;
                    document.head.appendChild(swiperScript);

                    // Wait for Swiper to be ready
                    return new Promise((resolve, reject) => {
                        swiperScript.onload = resolve;
                        swiperScript.onerror = reject;
                    });
                });
        };

        const initializeScripts = async () => {
            try {
                await loadScripts();
                // Additional initialization logic here
            } catch (error) {
                console.error('Failed to load scripts:', error);
            }
        };

        initializeScripts();

        return () => {
            // Cleanup: remove the dynamically added scripts
            if (jQueryScript) {
                document.head.removeChild(jQueryScript);
            }
            if (swiperScript) {
                document.head.removeChild(swiperScript);
            }
        };
    }, []);*/

    return (
        <React.Fragment>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Texas Christian Ashram</title>
            <Head>
                <link rel="stylesheet" href="/styles/css/all.min.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <link rel="stylesheet" href="/styles/css/custom.min.css" />
                <link rel="stylesheet" href="/styles/css/responsive.css" />
                <script src="https://code.jquery.com/jquery-3.6.0.min.js" />
            </Head>
        </React.Fragment>
    );
};

export default Header;
