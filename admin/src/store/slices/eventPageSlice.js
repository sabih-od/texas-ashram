import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {update, showByName, create} from '../../services/eventPageService';

export const getPage = createAsyncThunk(
    'event_page/get',
    async (name, thunkAPI) => {
        return await showByName(name)
    }
)

export const createPage = createAsyncThunk(
    'event_page/create',
    async (payload, {getState}) => {
        return await create(payload)
    }
)

export const updatePage = createAsyncThunk(
    'event_page/update',
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
    name: 'event_page',
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
            state.page = data?.data ?? null

            state.loading = false
            state.errors = message
        })

        builder.addCase(createPage.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })

        builder.addCase(createPage.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            state.success = !message
            state.errors = message
        })

        builder.addCase(updatePage.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(updatePage.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            state.success = !message
            state.errors = message
        })
    }
});

export const {setSuccess, setErrors, setEditorContent} = eventPageSlice.actions;
export const page = (state) => state.event_page.page;
export const loading = (state) => state.event_page.loading;
export const errors = (state) => state.event_page.errors;
export const success = (state) => state.event_page.success;
export default eventPageSlice.reducer;