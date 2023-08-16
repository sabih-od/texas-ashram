// import {initNav} from '../utils/nav-script';
import {initNav} from '../public/styles/js/nav-script';
import React, {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from 'react-modal';
import Script from 'next/script';
import {useRouter} from "next/router";

// Request Prayer Work For Error Handling
// Modal.setAppElement('#__next');

function MyApp({Component, pageProps}) {

    const router = useRouter()

    const [routePath, setRoutePath] = useState(null)
    const [isJquery, setIsJquery] = useState(false)
    const [isScrollTrigger, setIsScrollTrigger] = useState(false)
    // const [isSwiper, setIsSwiper] = useState(false)

    // Animation Timing work
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (routePath !== router.pathname && isJquery && isScrollTrigger) {
                setRoutePath(router.pathname)
                initNav();
            }
        }, 1000);
    }, [router, routePath, isJquery, isScrollTrigger])

    return (
        <>

            {/*<DynamicJSFiles/>*/}
            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                onLoad={() => {
                    setIsJquery(true)
                }}
            />
            {isJquery ? (
                <>
                    <Script src="https://unpkg.com/swiper/swiper-bundle.min.js"/>
                    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"/>
                    <Script
                        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"
                        onLoad={() => {
                            setIsScrollTrigger(true)
                        }}
                    />
                    {/*<Script src="/styles/js/all.min.js" />*/}
                    {/*<Script src="/styles/js/aos.js" />*/}
                    <Script src="/styles/js/gsap.js"/>
                    <Script type="module" src="/styles/js/nav-script.js"/>
                    {/*<Script src="/styles/js/scrollTrigger.js" />*/}
                </>
            ) : null}
            {/*<Authentication>*/}
            <Component {...pageProps} />
            {/*</Authentication>*/}
        </>
    );
}

export default MyApp;