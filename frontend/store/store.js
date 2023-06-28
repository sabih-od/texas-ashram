import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {authSlice} from "./slices/authSlice";
import {bookSlice} from "./slices/bookSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [bookSlice.name]: bookSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);