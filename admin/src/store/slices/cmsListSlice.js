import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {create, destroy, get} from '../../services/cmsService';

export const getCMSItems = createAsyncThunk(
    'cmsList/get',
    async ({page = 1}, thunkAPI) => {
        return await get(page)
    }
)

export const addCMS = createAsyncThunk(
    'cmsList/add',
    async (payload, thunkAPI) => {
        return await create(payload)
    }
)

export const deleteCMS = createAsyncThunk(
    'cmsList/delete',
    async (payload, thunkAPI) => {
        return await destroy(payload)
    }
)

const initialState = {
    success: false,
    loading: false,
    errors: null,
    cmsList: [],
    total: 0,
    totalPages: 0,
};

export const cmsListSlice = createSlice({
    name: 'cmsList',
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
                    ...action.payload.cmsList,
                };
            },
        },
    },
    extraReducers: builder => {

        builder.addCase(getCMSItems.pending, (state, action) => {
            state.loading = true
            state.errors = null
        })
        builder.addCase(getCMSItems.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.cmsList = data?.data ?? []
            state.total = data?.total ?? 0
            state.totalPages = data?.totalPages ?? 0

            state.loading = false
            state.errors = message
        })

        builder.addCase(addCMS.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(addCMS.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            state.success = !message
            state.errors = message
        })

        builder.addCase(deleteCMS.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(deleteCMS.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            // state.success = !message
            // state.errors = message
        })
    }
});

export const {setSuccess, setErrors} = cmsListSlice.actions;
export const cmsList = (state) => state.cmsList.cmsList;
export const loading = (state) => state.cmsList.loading;
export const total = (state) => state.cmsList.total;
export const totalPages = (state) => state.cmsList.totalPages;
export const errors = (state) => state.cmsList.errors;
export const success = (state) => state.cmsList.success;
export default cmsListSlice.reducer;