import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {authSlice} from "./slices/authSlice";
import {booksSlice} from "./slices/booksSlice";
import {bookSlice} from "./slices/bookSlice";
import {announcementsSlice} from "./slices/announcementsSlice";
import {contactsSlice} from "./slices/contactsSlice";
import {donationsSlice} from "./slices/donationsSlice";
import {eventsSlice} from "./slices/eventsSlice";
import {postsSlice} from "./slices/postsSlice"
import {announcementSlice} from "./slices/announcementSlice";
import {usersSlice} from "./slices/usersSlice";
import {userSlice} from "./slices/userSlice";
import {cmsListSlice} from "./slices/cmsListSlice";
import {pageSlice} from "./slices/cmsPageSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [booksSlice.name]: booksSlice.reducer,
            [bookSlice.name]: bookSlice.reducer,
            [contactsSlice.name]: contactsSlice.reducer,
            [donationsSlice.name]: donationsSlice.reducer,
            [eventsSlice.name]: eventsSlice.reducer,
            [postsSlice.name]: postsSlice.reducer,
            [announcementsSlice.name]: announcementsSlice.reducer,
            [announcementSlice.name]: announcementSlice.reducer,
            [usersSlice.name]: usersSlice.reducer,
            [userSlice.name]: userSlice.reducer,
            [cmsListSlice.name]: cmsListSlice.reducer,
            [pageSlice.name]: pageSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);