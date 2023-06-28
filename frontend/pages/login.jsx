import React, {useEffect, useState} from 'react'

import {Label, Input, Button} from '@roketid/windmill-react-ui'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, errors, loading as loginLoading, isAuth} from '../store/slices/authSlice'

function LoginPage() {
    const router = useRouter()
    const dispatch = useDispatch()

    const errorsMessages = useSelector(errors)
    const loading = useSelector(loginLoading)
    const isAuthenticated = useSelector(isAuth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (isAuthenticated)
            router.reload()
    }, [isAuthenticated])

    const loginHandle = async (e) => {
        e.preventDefault()
        if (loading) return;
        await dispatch(loginUser({email, password}))
    }

    return (
        <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
            <div
                className='flex-1 h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
                <main className='flex items-center justify-center p-6 sm:p-12'>
                    <div className='w-full'>
                        <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                            Login
                        </h1>
                        <Label>
                            <span>Email</span>
                            <Input
                                className='mt-1'
                                type='email'
                                placeholder='john@doe.com'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Label>

                        <Label className='mt-4'>
                            <span>Password</span>
                            <Input
                                className='mt-1'
                                type='password'
                                placeholder='***************'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Label>

                        <Button disabled={loading} className='mt-4' block onClick={loginHandle}>
                            Log in
                        </Button>

                        {errorsMessages ? <p className="text-center text-red-600 mt-2 text-sm">{
                            Array.isArray(errorsMessages) ? errorsMessages.map((item, ind) => (
                                <span key={ind}>
                                    {item} <br/>
                                </span>
                            )) : errorsMessages
                        }</p> : null}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LoginPage
