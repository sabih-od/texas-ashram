import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/logo.png";

function PreLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Set the desired delay for the preloader

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`preLoader ${isLoading ? "black" : "white"}`}>
            <Image src={logo} width={240} alt="Logo" />
        </div>
    );
}

export default PreLoader;