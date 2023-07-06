import {apiUrl, errorResponse, exceptionResponse, getToken, successResponse, urlWithParam} from "./global";

export const create = async (name, email, contact, start_date, end_date, time, description) => {
    try {

        const response = await fetch(`${apiUrl()}/prayer-requests`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            // body: form,
            body: JSON.stringify({ name, email, contact, start_date, end_date, time, description }),
        });

        const data = await response.json();
        console.log('data', data);

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

export const get = async (page = 1, limit = 15) => {
    try {
            const response = await fetch(urlWithParam(`${apiUrl()}/prayer-requests/`, {
            page, limit
        }), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        });

        const data = await response.json();

        if (data?.success === false) {
            return errorResponse(null, data?.message ?? 'Server Error')
        }

        return successResponse(data)
    } catch (e) {
        return exceptionResponse()
    }
}