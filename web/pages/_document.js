import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="/styles/css/all.min.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <link rel="stylesheet" href="/styles/css/custom.min.css" />
                <link rel="stylesheet" href="/styles/css/new-html/custom.min.css" />
                <link rel="stylesheet" href="/styles/css/responsive.css" />

                <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
                <link rel='shortcut icon' href='/images/favicon.ico' />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
