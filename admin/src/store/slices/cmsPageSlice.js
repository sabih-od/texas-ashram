import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {update, show} from '../../services/cmsService';

export const getPage = createAsyncThunk(
    'page/get',
    async ({id}, thunkAPI) => {
        return await show(id)
    }
)

export const updatePage = createAsyncThunk(
    'page/update',
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

export const pageSlice = createSlice({
    name: 'page',
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
                    ...action.payload.page,
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

export const {setSuccess, setErrors} = pageSlice.actions;
export const page = (state) => state.page.page;
export const loading = (state) => state.page.loading;
export const errors = (state) => state.page.errors;
export const success = (state) => state.page.success;
export default pageSlice.reducer;