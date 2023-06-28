import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {create, get} from '../../services/bookService';

export const getBooks = createAsyncThunk(
    'book/get',
    async (payload, thunkAPI) => {
        return await get()
    }
)

export const addBook = createAsyncThunk(
    'book/add',
    async (payload, thunkAPI) => {
        return await create(payload)
    }
)

const initialState = {
    loading: false,
    errors: null,
    books: [],
    total: 0,
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.book,
                };
            },
        },
    },
    extraReducers: builder => {

        builder.addCase(getBooks.pending, (state, action) => {
            state.loading = true
            state.errors = null
        })
        builder.addCase(getBooks.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.books = data?.data ?? []
            state.total = data?.total ?? 0

            state.loading = false
            state.errors = message
        })

        builder.addCase(addBook.pending, (state, action) => {
            state.loading = true
            state.errors = null
        })
        builder.addCase(addBook.fulfilled, (state, action) => {
            const {data, message} = action.payload

            console.log("save data", data)

            state.loading = false
            state.errors = message
        })
    }
});

// export const {logoutAuth} = bookSlice.actions;
export const books = (state) => state.book.books;
export const loading = (state) => state.book.loading;
export const total = (state) => state.book.total;
export const errors = (state) => state.book.errors;
export default bookSlice.reducer;