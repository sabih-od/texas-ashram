import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {
    getPage,
    page as pageDetail,
    loading as pageLoading,
    errors as pageErrors,
    success as pageSuccess, updatePage, setErrors, setSuccess
} from "../../store/slices/cmsPageSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import DatePickerWrapper from "../../@core/styles/libs/react-datepicker";
import {CustomDateInput} from "./create";

import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";

function Page(props) {
    const {push, query} = useRouter()
    const {id} = query

    const dispatch = useDispatch()

    const page = useSelector(pageDetail)
    const loading = useSelector(pageLoading)
    const errors = useSelector(pageErrors)
    const success = useSelector(pageSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [name, setName] = useState('')
    const [content, setContent] = useState([])
    // const [updContent, setUpdContent] = useState([])

    useEffect(() => {
        if (id) {
            dispatch(getPage({id}))
        }
    }, [id])

    useEffect(() => {
        if (page) {
            setName(page.name)
            // setContent(page.content)
            setContent(JSON.parse(page.content))
        }
    }, [page])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Page updated successfully!')
            setTimeout(() => {
                push('/cms')
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        dispatch(updatePage({
            id,
            name, content: JSON.stringify(content)
        }))

    }

    const updateItem = (e, index) => {
        const _updContent = [...content]
        if (_updContent[index] && _updContent[index].hasOwnProperty('value')) {
            _updContent[index].value = e.target.value
        }
        setContent(_updContent)
    }

    return (
        <DatePickerWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Edit Page
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
                                        <TextField fullWidth label='Name' value={name}
                                                   onChange={e => setName(e.target.value)}/>
                                    </Grid>
                                    {/*<Grid item xs={12} sx={{mt: 5}}>*/}
                                    {/*    <TextField fullWidth label='Content' value={JSON.stringify(content)}*/}
                                    {/*               multiline*/}
                                    {/*               maxRows={4}/>*/}
                                    {/*</Grid>*/}

                                    <Grid item xs={12} mt={5}>
                                        <Typography variant='h6'>Sections</Typography>
                                    </Grid>

                                    {Array.isArray(content) ? content.map((item, ind) => {
                                        const {key, value} = item

                                        return (
                                            <Grid item xs={12} sx={{mt: 5}} key={ind}>
                                                <TextField fullWidth label={key ?? 'Input'} value={value ?? ''}
                                                           onChange={e => updateItem(e, ind)}
                                                />
                                            </Grid>
                                        )
                                    }) : (
                                        <Grid item xs={12} sx={{mt: 5}} textAlign='center'>
                                            <Typography variant='p'>Invalid Array type!</Typography>
                                        </Grid>
                                    )}

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
        </DatePickerWrapper>
    );
}

export default Page;