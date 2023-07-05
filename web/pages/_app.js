import '../public/styles/css/all.min.css';
import '../public/styles/css/custom.min.css';
import '../public/styles/css/responsive.css';
import React, {useEffect} from "react";
import dynamic from "next/dynamic";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Middleware from "./middleware";

const DynamicJSFiles = dynamic(
    () =>
        Promise.all([
            import("../public/styles/js/all.min.js"),
            import("../public/styles/js/custom.min.js"),
            import("../public/styles/js/aos.js"),
            import("../public/styles/js/gsap.js"),
            import("../public/styles/js/scrollTrigger.js"),
        ]).then((values) => {
            return () => values.forEach((value) => value.default());
        }),
    {ssr: false}
);

function MyApp({Component, pageProps}) {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Specify the duration in milliseconds (default: 1000)
            delay: 200, // Specify the delay in milliseconds (default: 0)
        });
    }, []);

    return (
        <>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <DynamicJSFiles/>
            <Middleware>
                <Component {...pageProps} />
            </Middleware>
        </>
    );
}

export default MyApp;
