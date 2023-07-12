import '../public/styles/css/all.min.css';
import '../public/styles/css/custom.min.css';
import '../public/styles/css/responsive.css';
import '../public/styles/css/new-html/custom.min.css';
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from 'react-modal';
import Script from 'next/script';
import Authentication from "../middleware/authentication";

// Request Prayer Work For Error Handling
Modal.setAppElement('#__next');

function MyApp({Component, pageProps}) {

    // Animation Timing work
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
        });
    }, []);

    return (
        <>

            {/*<DynamicJSFiles/>*/}
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"/>
            {/*<Script src="/styles/js/all.min.js" />*/}
            {/*<Script src="/styles/js/aos.js" />*/}
            <Script src="/styles/js/gsap.js" />
            {/*<Script src="/styles/js/scrollTrigger.js" />*/}
            <Script type="module" src="/styles/js/custom.min.js" />
            {/*<Authentication>*/}
                <Component {...pageProps} />
            {/*</Authentication>*/}
        </>
    );
}

export default MyApp;
