import {
    apiUrl,
    errorResponse,
    exceptionResponse,
    getToken,
    successResponse,
    urlWithParam
} from "./global";

export const get = async (page = 1, limit = 15) => {
    try {
        const response = await fetch(urlWithParam(`${apiUrl()}/announcements`, {
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