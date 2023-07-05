import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {authSlice} from "./slices/authSlice";
import {booksSlice} from "./slices/booksSlice";
import {bookSlice} from "./slices/bookSlice";
import {contactsSlice} from "./slices/contactsSlice";
import {donationsSlice} from "./slices/donationsSlice";
import {eventsSlice} from "./slices/eventsSlice";
import {announcementsSlice} from "./slices/announcementsSlice";
import {postsSlice} from "./slices/postsSlice"
import {postSlice} from "./slices/postSlice"
import {announcementSlice} from "./slices/announcementSlice";
import {postsSlice} from "./slices/postsSlice"
import {staffMembersSlice} from "./slices/staffMembersSlice"
import {staffMemberSlice} from "./slices/staffMemberSlice"
import {eventSlice} from "./slices/EventSlice"
import {prayersSlice} from "./slices/prayersSlice";
import {sermonsSlice} from "./slices/sermonsSlice"

import {usersSlice} from "./slices/usersSlice";
import {userSlice} from "./slices/userSlice";

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
            [postSlice.name]: postSlice.reducer,
            [announcementsSlice.name]: announcementsSlice.reducer,
            [announcementSlice.name]: announcementSlice.reducer,
            [staffMembersSlice.name]: staffMembersSlice.reducer,
            [staffMemberSlice.name]: staffMemberSlice.reducer,
            [eventSlice.name]: eventSlice.reducer,
            [prayersSlice.name]: prayersSlice.reducer,
            [sermonsSlice.name]: sermonsSlice.reducer,
            [usersSlice.name]: usersSlice.reducer,
            [userSlice.name]: userSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);