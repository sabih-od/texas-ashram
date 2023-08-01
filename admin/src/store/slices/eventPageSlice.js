import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {update, showByName} from '../../services/eventPageService';

export const getPage = createAsyncThunk(
    'event-page/get',
    async (name, thunkAPI) => {
        return await showByName(name)
    }
)

export const createEvent = createAsyncThunk(
    'event-page/create',
    async (payload, thunkAPI) => {
        return await update(payload)
    }
)

export const updateEvent = createAsyncThunk(
    'event-page/update',
    async (payload, thunkAPI) => {
        return await update(payload)
    }
)

const initialState = {
    success: false,
    loading: false,
    errors: null,
    page: null
};

export const eventPageSlice = createSlice({
    name: 'event-page',
    initialState,
    reducers: {
        setSuccess: (state, {payload}) => {
            state.success = payload
        },
        setErrors: (state, {payload}) => {
            state.errors = payload
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.event,
                };
            },
        },
    },
    extraReducers: builder => {

        builder.addCase(getPage.pending, (state, action) => {
            state.loading = true
            state.errors = null
        })
        builder.addCase(getPage.fulfilled, (state, action) => {
            const {data, message} = action.payload
console.log(data);
            state.page = data?.data ?? null

            state.loading = false
            state.errors = message
        })

        builder.addCase(createEvent.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(createEvent.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            state.success = !message
            state.errors = message
        })

        builder.addCase(updateEvent.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(updateEvent.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            state.success = !message
            state.errors = message
        })
    }
});

export const {setSuccess, setErrors} = eventPageSlice.actions;
export const event = (state) => state.event.event;
export const loading = (state) => state.event.loading;
export const errors = (state) => state.event.errors;
export const success = (state) => state.event.success;
export default eventPageSlice.reducer;