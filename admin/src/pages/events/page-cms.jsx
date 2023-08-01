import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
     getPage,
    loading as EventLoading,
    errors as EventErrors,
    success as EventSuccess,
    setSuccess, setErrors
} from '../../store/slices/eventPageSlice'

import {useRouter} from "next/navigation";
import Grid from "@mui/material/Grid";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";

function PageCMS(props) {
    const Editor = dynamic(() => import("../../@core/components/TextEditor"), {ssr: false});

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(EventLoading)
    const errors = useSelector(EventErrors)
    const success = useSelector(EventSuccess)

    const [successMsg, setSuccessMessage] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        dispatch(getPage('web-events-page'))
        // if (!loading && success) {
        //     setSuccessMessage('Event added successfully!')
        //     setTimeout(() => {
        //         push('/events')
        //     }, 500)
        // }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        // if (!fileValidation()) return;

        dispatch(getPage({
            name : 'web-events-page',
            content: '',
        }))

    }

    const fileValidation = () => {
        let _errors = [];
        if (title.trim() === "") {
            _errors.push("Title is required!");
        }
        // Remove other checks for description, location, and image since they are unrequired now.

        // if (date_to.trim() === "") {
        //     _errors.push("Date To is required!");
        // }
        // if (date_from.trim() === "") {
        //     _errors.push("Date From is required!");
        // }
        if (start_time.trim() === "") {
            _errors.push("Start Time is required!");
        }
        if (end_time.trim() === "") {
            _errors.push("End Time is required!");
        }

        if (_errors.length > 0) {
            dispatch(setErrors(_errors));
        }

        return _errors.length < 1;
    };

    return (

    <Grid container spacing={6}>
        <Grid item xs={12}>
            <Typography variant='h5'>
                Event Page CMS
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
                    ) : ''}
                    {errors && errors.length > 0 ? (
                        <Alert severity="error" sx={{mb: 4}}>
                            <AlertTitle>Errors</AlertTitle>
                            {errors.map((item, ind) => (
                                <Box component='strong' sx={{display: 'block'}} key={ind}>{item}</Box>
                            ))}
                        </Alert>
                    ) : ''}
                    <form onSubmit={handleSubmit}>
                        <Grid row>
                            <Grid item xs={12}>
                                <Editor value={""} onChange={e => {
                                    console.log("change", e)
                                }}/>
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

export default PageCMS;