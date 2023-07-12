import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import Cookie from "js-cookie";
import {apiUrl, getToken} from "../services/global";
import {authUser} from "../services/authService";

// After Sign up And Login Access All Tabs
// Other Wise Redirect To Members Page
// Using To _app.js File
const Authentication = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true)
    const [lastUrl, setLastUrl] = useState(null)

    useEffect(() => {
        if (router.pathname === lastUrl)
            return;
        const checkAuthentication = async () => {
            const token = getToken()
            if (token) {
                const {data} = await authUser(token, apiUrl())
                // alert(data);
                // console.log('data', data);
                // if (!data) {
                //     Cookie.remove('token')
                //     await router.reload()
                // } else if (router.pathname === '/members') {
                //     await router.push('/')
                // }
            } else if (!token && router.pathname !== '/members') {
                await router.push('/members')
            }

            setLastUrl(router.pathname)
            setLoading(false)
        };
        checkAuthentication();

    }, [router]);

    if (loading)
        return <p>Loading...</p>

    return children;
};

export default Authentication;
