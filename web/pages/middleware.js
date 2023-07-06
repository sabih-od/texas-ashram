import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from "js-cookie";

// After Sign up And Login Access All Tabs
// Other Wise Redirect To Members Page
// Using To _app.js File
const Middleware = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const cookie = Cookies.get('token');

        if (!cookie) {
            router.push('/members');
        }
    }, [router]);

    return children;
};

export default Middleware;
