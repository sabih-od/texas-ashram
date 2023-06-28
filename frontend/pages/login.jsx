import React, {ChangeEvent, useContext, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {Label, Input, Button, WindmillContext} from '@roketid/windmill-react-ui'
import {GithubIcon, TwitterIcon} from 'icons'
import {apiUrl} from '../services/global'

function LoginPage() {
    const {mode} = useContext(WindmillContext)
    const imgSource = mode === 'dark' ? '/assets/img/login-office-dark.jpeg' : '/assets/img/login-office.jpeg'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const login = async (e) => {
        e.preventDefault()
        if (loading) return;
        setLoading(true)
        try {
            setError(null)
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (data?.success === false) {
                setError(data?.message ?? 'Server Error')
                return;
            }
            console.log("data", data)
        } catch (e) {
            console.log("login error", e)
            setError("Exception!")
        } finally {
            setLoading(false)
        }
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

                        <Button disabled={loading} className='mt-4' block onClick={login}>
                            Log in
                        </Button>

                        {error ? <p className="text-center text-red-600 mt-2 text-sm">{error}</p> : null}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LoginPage
