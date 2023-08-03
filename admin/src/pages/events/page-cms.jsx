import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getPage,
    createPage,
    page as EventPage,
    loading as EventLoading,
    errors as EventErrors,
    success as EventSuccess,
    setSuccess, setErrors, updatePage
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

const Editor = dynamic(() => import("../../@core/components/TextEditor"), {ssr: false});

function PageCMS(props) {
    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(EventLoading)
    const errors = useSelector(EventErrors)
    const success = useSelector(EventSuccess)
    const page = useSelector(EventPage)

    const [successMsg, setSuccessMessage] = useState('')
    const [editor, setEditor] = useState(null)

    useEffect(() => {
        dispatch(getPage('web-events-page'))
    }, [])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Page updated successfully!')
            dispatch(setSuccess(false))
            setTimeout(() => {
                setSuccessMessage('')
            }, 1500)
        }
    }, [loading, success])

    useEffect(() => {
        if (page && editor) {
            editor.setData(page.content)
        }
    }, [page, editor])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        if (!page) {
            dispatch(createPage({
                name: 'web-events-page',
                content: editor.getData()
            }))
        } else {
            dispatch(updatePage({
                id: page.id,
                name: page.name,
                content: editor.getData()
            }))
        }
    }

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
                            <Grid container>
                                <Grid item xs={12}>
                                    <Editor onInit={setEditor}/>
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