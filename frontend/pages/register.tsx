import React, {useContext} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {GithubIcon, TwitterIcon} from 'icons'
import {Input, Label, Button, WindmillContext} from '@roketid/windmill-react-ui'

function CrateAccount() {
    const {mode} = useContext(WindmillContext)
    const imgSource = mode === 'dark' ? '/assets/img/create-account-office-dark.jpeg' : '/assets/img/create-account-office.jpeg'

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div
                className="flex-1 h-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex justify-center overflow-y-auto md:flex-row">
                    <main className="w-full p-6 sm:p-12">
                        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Create account
                        </h1>
                        <Label className="mt-4">
                            <span>First name</span>
                            <Input className="mt-1" placeholder="John" type="text"/>
                        </Label>
                        <Label className="mt-4">
                            <span>Last name</span>
                            <Input className="mt-1" placeholder="Doe" type="text"/>
                        </Label>
                        <Label>
                            <span>Email</span>
                            <Input className="mt-1" type="email" placeholder="johndoe@example.com"/>
                        </Label>
                        <Label>
                            <span>Phone</span>
                            <Input className="mt-1" type="text" placeholder="12345678"/>
                        </Label>
                        <Label className="mt-4">
                            <span>Password</span>
                            <Input className="mt-1" placeholder="***************" type="password"/>
                        </Label>
                        <Label className="mt-4">
                            <span>Confirm password</span>
                            <Input className="mt-1" placeholder="***************" type="password"/>
                        </Label>

                        {/*<Label className="mt-6" check>*/}
                        {/*  <Input type="checkbox" />*/}
                        {/*  <span className="ml-2">*/}
                        {/*    I agree to the <span className="underline">privacy policy</span>*/}
                        {/*  </span>*/}
                        {/*</Label>*/}

                        <Link
                            href='/'
                            passHref={true}
                        >
                            <Button block className="mt-4">
                                Create account
                            </Button>
                        </Link>

                        <p className="mt-4">
                            <Link href="/login">
                                <a
                                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                >
                                    Already have an account? Login
                                </a>
                            </Link>
                        </p>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default CrateAccount
