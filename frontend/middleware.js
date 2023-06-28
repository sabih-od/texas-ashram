import {NextResponse} from 'next/server'
import {authUser} from "./services/authService";

export async function middleware(request) {
    // console.log("request", request.nextUrl.pathname)

    if (!request.nextUrl.pathname.startsWith('/_next')) {
        const token = request.cookies.get('token');

        if (token && token.value) {
            const {data} = await authUser(token.value, process.env.NEXT_PUBLIC_API_URL)
            if (!data) {
                const response = NextResponse.redirect(new URL('/login', request.url))
                response.cookies.delete('token')
                return response
            } else if (request.nextUrl.pathname.startsWith('/login')) {
                return NextResponse.redirect(new URL('/', request.url))
            }
        } else if (!token?.value && !request.nextUrl.pathname.startsWith('/login')) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
}