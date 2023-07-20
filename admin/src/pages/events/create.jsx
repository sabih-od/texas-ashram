import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addEvent,
    loading as EventLoading,
    errors as EventErrors,
    success as EventSuccess,
    setSuccess, setErrors
} from '../../store/slices/eventsSlice'
import {useRouter} from "next/navigation";
import Grid from "@mui/material/Grid";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

function Create(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(EventLoading)
    const errors = useSelector(EventErrors)
    const success = useSelector(EventSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState(null)
    const [date_to, setDate_to] = useState(null)
    const [date_from, setDate_from] = useState(null)
    const [location, setLocation] = useState(null)
    const [image, setImage] = useState(null)


    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Event added successfully!')
            setTimeout(() => {
                push('/events')
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        if (!fileValidation()) return;

        dispatch(addEvent({
            title, description, date_to, date_from, location, image
        }))

    }

    const fileValidation = () => {
        let _errors = []
        // if (title === null) {
        //     _errors.push("Title is required!")
        // }
        // if (description === null) {
        //     _errors.push("Description is required!")
        // }
        //
        // if (date_to === null) {
        //     _errors.push("Date 1 is required!")
        // }
        // if (date_from === null) {
        //     _errors.push("Date 2 is required!")
        // }
        // if (location === null) {
        //     _errors.push("Location is required!")
        // }
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
                    Create Event
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
                                    <TextField fullWidth label='Description' value={description}
                                               onChange={e => setDescription(e.target.value)}/>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <TextField fullWidth label='Date To'
                                               type="text"
                                               onFocus={e => {
                                                   e.target.type = 'datetime-local'
                                               }}
                                               onBlur={e => {
                                                   e.target.type = 'text'
                                               }}
                                               value={date_to}
                                               onChange={e => setDate_to(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} sx={{mt: 5}}>
                                    <TextField fullWidth label='Date From' type="text"
                                               onFocus={e => {
                                                   e.target.type = 'datetime-local'
                                               }}
                                               onBlur={e => {
                                                   e.target.type = 'text'
                                               }}
                                               value={date_from}
                                               onChange={e => setDate_from(e.target.value)}/>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <TextField fullWidth label='Location' value={location}
                                               onChange={e => setLocation(e.target.value)}/>
                                </Grid>


                                <Grid item xs={12} sx={{mt: 5}}>
                                    <Stack direction="row" gap={2}>

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

export default Create;