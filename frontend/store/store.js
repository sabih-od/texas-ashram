import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {authSlice} from "./slices/authSlice";
import {booksSlice} from "./slices/booksSlice";
import {bookSlice} from "./slices/bookSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [booksSlice.name]: booksSlice.reducer,
            [bookSlice.name]: bookSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);