import React from 'react';
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <>
            <Header />
            <Menu />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
