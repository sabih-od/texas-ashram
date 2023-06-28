import {apiUrl, errorResponse, exceptionResponse, getToken, successResponse, urlWithParams} from "./global";

export const create = async ({
                                 title,
                                 file,
                                 image
                             }) => {
    try {
        console.log("form", title,
            file,
            image)
        const form = new FormData()
        form.append('title', title)
        form.append('file', file)
        form.append('image', image)

        const response = await fetch(`${apiUrl()}/books`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            },
            body: form,
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

export const get = async (page = 1, limit = 15) => {
    try {
        const response = await fetch(urlWithParams(`${apiUrl()}/books`, {
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