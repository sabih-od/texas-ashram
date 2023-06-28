import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import React from 'react'
import {Windmill} from '@roketid/windmill-react-ui'
import {Provider} from 'react-redux';
import {wrapper} from '../store/store';

function MyApp({Component, ...rest}) {
    // suppress useLayoutEffect warnings when running outside a browser
    if (typeof window === "undefined") React.useLayoutEffect = React.useEffect;

    const { store, props } = wrapper.useWrappedStore(rest);

    const { pageProps } = props;

    return (
        <Provider store={store}>
            <Windmill usePreferences={true}>
                <Component {...pageProps} />
            </Windmill>
        </Provider>
    )
}

export default MyApp
