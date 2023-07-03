import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {
    getBook,
    book as bookDetail,
    loading as bookLoading,
    errors as bookErrors,
    success as bookSuccess, updateBook, setErrors, setSuccess
} from "../../store/slices/bookSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Book(props) {
    const {push, query} = useRouter()
    const {bookId} = query

    const dispatch = useDispatch()

    const book = useSelector(bookDetail)
    const loading = useSelector(bookLoading)
    const errors = useSelector(bookErrors)
    const success = useSelector(bookSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)

    useEffect(() => {
        if (bookId) {
            dispatch(getBook({id: bookId}))
        }
    }, [bookId])

    useEffect(() => {
        if (book) {
            setTitle(book.title)
        }
    }, [book])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Book updated successfully!')
            setTimeout(() => {
                push('/books')
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        if (!fileValidation()) return;

        dispatch(updateBook({
            id: bookId,
            title, image, file
        }))

    }

    const fileValidation = () => {
        let _errors = []
        if (file === null) {
            _errors.push("File is required!")
        }
        if (image === null) {
            _errors.push("Image is required!")
        }

        if (_errors.length > 0) {
            dispatch(setErrors(_errors))
        }

        return _errors.length < 1
    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Edit Book
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        {successMsg ? (
                            <Alert severity="success" sx={{mb: 4}}>
                                <AlertTitle>Success</AlertTitle>
                                <Box component='strong' sx={{display: 'block'}}>{successMsg}</Box>
                            </Alert>
                        ) : null}
                        {errors && errors.length > 0 ? (
                            <Alert severity="error" sx={{mb: 4}}>
                                <AlertTitle>Errors</AlertTitle>
                                {errors.map((item, ind) => (
                                    <Box component='strong' sx={{display: 'block'}} key={ind}>{item}</Box>
                                ))}
                            </Alert>
                        ) : null}
                        <form onSubmit={handleSubmit}>
                            <Grid row>
                                <Grid item xs={12}>
                                    <TextField fullWidth label='Title' value={title}
                                               onChange={e => setTitle(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} sx={{mt: 5}}>
                                    <Stack direction="row" gap={2}>
                                        <Button
                                            variant="contained"
                                            component="label"
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                                onChange={e => {
                                                    setFile(e.target?.files[0] ?? null)
                                                }}
                                            />
                                        </Button>
                                        <Button
                                            variant="contained"
                                            component="label"
                                        >
                                            Upload Image
                                            <input
                                                type="file"
                                                hidden
                                                onChange={e => {
                                                    setImage(e.target?.files[0] ?? null)
                                                }}
                                            />
                                        </Button>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <Button type='submit' variant='contained' disabled={loading}>
                                        {loading ? 'Saving' : 'Save'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Book;