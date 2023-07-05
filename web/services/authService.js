import {apiUrl, errorResponse, exceptionResponse, successResponse} from "./global";
import Cookie from "js-cookie";

export const signup = async (first_name, last_name, email, phone, password) => {
    try {
        const response = await fetch(`${apiUrl()}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name, last_name, email, phone, password }),
        });

        const data = await response.json();

        if (data?.success === false) {
            return errorResponse(null, data?.message ?? 'Server Error');
        } else if (data?.data?.role_id !== 2) {
            return errorResponse(null, 'Invalid user role!');
        }

        Cookie.set('token', data?.data?.access_token ?? null);

        return successResponse(data);
    } catch (e) {
        return exceptionResponse();
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${apiUrl()}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await response.json();

        if (data?.success === false) {
            return errorResponse(null, data?.message ?? 'Server Error')
        } else if (data?.data?.role_id === 1) {
            return errorResponse(null, 'Invalid user role!')
        }
        Cookie.set('token', data?.data?.access_token ?? null)
        return successResponse(data)
    } catch (e) {
        return exceptionResponse()
    }
}

export const authUser = async (token, apiUrl = '') => {
    try {
        const response = await fetch(`${apiUrl}/auth/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        console.log('data', data);

        if (data?.success === false) {
            return errorResponse(null, data?.message ?? 'Server Error')
        } else if (data?.data?.role_id !== 1) {
            return errorResponse(null, 'Invalid user role!')
        }

        return successResponse(data)
    } catch (e) {
        return exceptionResponse()
    }
}
