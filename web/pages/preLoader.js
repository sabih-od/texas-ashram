import {useState, useEffect} from "react";
import Image from "next/image";
import logo from "../images/logo2.png";
import gsap from "gsap";

function PreLoader() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({onComplete: hideLoader});

        function preLoader() {
            tl.to(".preLoader.black > img", {
                scale: 1.1,
                autoAlpha: 0,
            })
                .to(".preLoader.black", {
                    yPercent: -100,
                })
                .to(".preLoader.white", {
                    yPercent: -100,
                })
                .to(".preLoader", {
                    css: {
                        display: "none",
                    },
                });
        }

        function hideLoader() {
            setIsLoading(false);
        }

        let timer = setTimeout(preLoader, 3000);

        return () => {
            clearTimeout(timer);
            tl.kill();
        };
    }, []);

    return (
        <div className={`preLoader ${isLoading ? "black" : "white"}`}>
            <div className="preLoader black">
                <Image src={logo} width={240} alt="Logo"/>
            </div>
            <div className="preLoader white"/>
        </div>
    );
}

export default PreLoader;