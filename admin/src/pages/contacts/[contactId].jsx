import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {
    getContact,
    contact as contactDetail,
    loading as contactLoading,
    errors as contactErrors,
    success as contactSuccess, updateContact, setErrors, setSuccess
} from "../../store/slices/contactSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact(props) {
    const {push, query} = useRouter()
    const {contactId} = query

    const dispatch = useDispatch()

    const contact = useSelector(contactDetail)
    const loading = useSelector(contactLoading)
    const errors = useSelector(contactErrors)
    const success = useSelector(contactSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [company, setCompany] = useState(null)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (contactId) {
            dispatch(getContact({id: contactId}))
        }
    }, [contactId])

    useEffect(() => {
        if (contact) {
            setTitle(contact.title)
        }
    }, [contact])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Contact updated successfully!')
            setTimeout(() => {
                push('/contacts')
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        if (!fileValidation()) return;

        dispatch(updateContact({
            id: ContactId,
            name, email, phone , company , message
        }))

    }

    // const fileValidation = () => {
    //     let _errors = []
    //     if (name === null) {
    //         _errors.push("name is required!")
    //     }
    //     if (email === null) {
    //         _errors.push("email is required!")
    //     }
    //
    //     if (phone === null) {
    //         _errors.push("Phone is required!")
    //     }
    //
    //     if (company === null) {
    //         _errors.push("Company is required!")
    //     }
    //
    //     if (message === null) {
    //         _errors.push("Message is required!")
    //     }
    //
    //
    //     if (_errors.length > 0) {
    //         dispatch(setErrors(_errors))
    //     }
    //
    //     return _errors.length < 1
    // }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Edit Contact
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
                                <Grid item xs={12} sx={{mt: 5}}>
                                    <TextField fullWidth label='Email' value={email}
                                               onChange={e => setEmail(e.target.value)}/>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <TextField fullWidth label='Phone' value={phone}
                                               onChange={e => setPhone(e.target.value)}/>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <TextField fullWidth label='Company' value={company}
                                               onChange={e => setCompany(e.target.value)}/>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <TextField fullWidth label='Message' value={message}
                                               onChange={e => setMessage(e.target.value)}/>
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

export default Contact;