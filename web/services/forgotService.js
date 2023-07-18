import {apiUrl, errorResponse, exceptionResponse, getToken, successResponse} from "./global";
import {useRouter} from 'next/router';
import React, {useState, useEffect, useCallback} from 'react';
import Cookie from "js-cookie";

export const forgotPassword = async ({ email }) => {
    try {
        const response = await fetch(`${apiUrl()}/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        console.log('forgot', data);

        if (response.ok) {
            // Password reset request successful
            return successResponse(data);
        } else {
            // Handle different error scenarios
            if (data?.message) {
                return errorResponse(null, data.message);
            } else if (data?.statusCode === 400) {
                return errorResponse(null, 'Bad Request');
            } else {
                return errorResponse(null, 'Server Error');
            }
        }
    } catch (error) {
        return exceptionResponse();
    }
};

export const submitOtp = async ({ email, otp }) => {
    try {
        const response = await fetch(`${apiUrl()}/auth/submit-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        });

        const data = await response.json();
        console.log('otp', data);

        if (response.ok) {
            // Password reset request successful
            Cookie.set('token', data?.data?.access_token ?? null);
            return successResponse(data);
        } else {
            // Handle different error scenarios
            if (data?.message) {
                return errorResponse(null, data.message);
            } else if (data?.statusCode === 400) {
                return errorResponse(null, 'Bad Request');
            } else {
                return errorResponse(null, 'Server Error');
            }
        }
    } catch (error) {
        return exceptionResponse();
    }
};

export const resetPassword = async ({ password }) => {
    try {
        const response = await fetch(`${apiUrl()}/auth/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify({ password }),
        });

        const data = await response.json();
        console.log('reset', data);

        if (response.ok) {
            // Password reset request successful
            return successResponse(data);
        } else {
            // Handle different error scenarios
            if (data?.message) {
                return errorResponse(null, data.message);
            } else if (data?.statusCode === 400) {
                return errorResponse(null, 'Bad Request');
            } else {
                return errorResponse(null, 'Server Error');
            }
        }
    } catch (error) {
        return exceptionResponse();
    }
};