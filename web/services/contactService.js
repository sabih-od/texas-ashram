import {apiUrl, errorResponse, exceptionResponse, getToken, successResponse} from "./global";
// import nodemailer from "nodemailer";

export const create = async ({name, email, phone, company, message}) => {

    try {
        const response = await fetch(`${apiUrl()}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },

            body: JSON.stringify({ name, email, phone, company, message }),
        });

        const data = await response.json();

        if (data?.success === false) {
            return errorResponse(null, data?.message ?? 'Server Error')
        } else if (data?.statusCode === 400) {
            return errorResponse(null, data?.message ?? ['Server Error'])
        }
        return successResponse(data)
    } catch (e) {
        return exceptionResponse()
    }
}