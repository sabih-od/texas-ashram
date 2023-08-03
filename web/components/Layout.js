import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import('./Menu'), {
    ssr: false,
});

function Layout({children}) {
    return (
        <>
            <Header/>
            <Menu/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;
