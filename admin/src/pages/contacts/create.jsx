import React, {useEffect, useState} from 'react';
// import PageTitle from "../../example/components/Typography/PageTitle";
// import {Button, Input, Label, Select, Textarea} from "@roketid/windmill-react-ui";
// import Layout from "../../example/containers/Layout";
// import FileInput from "../../example/components/FileInput";
import {useDispatch, useSelector} from "react-redux";
import {
    addContact,
    loading as ContactLoading,
    errors as ContactErrors,
    success as ContactSuccess,
    setSuccess, setErrors
} from '../../store/slices/contactsSlice'
import {useRouter} from "next/navigation";
import Grid from "@mui/material/Grid";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

function Create(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(ContactLoading)
    const errors = useSelector(ContactErrors)
    const success = useSelector(ContactSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [company, setCompany] = useState(null)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Contact added successfully!')
            setTimeout(() => {
                push('/contacts')
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        if (!fileValidation()) return;

        dispatch(addContact({
            name, email, phone , company , message
        }))

    }

    const fileValidation = () => {
        let _errors = []
        if (name === null) {
            _errors.push("name is required!")
        }
        if (email === null) {
            _errors.push("email is required!")
        }

        if (phone === null) {
            _errors.push("Phone is required!")
        }

        if (company === null) {
            _errors.push("Company is required!")
        }

        if (message === null) {
            _errors.push("Message is required!")
        }

        if (_errors.length > 0) {
            dispatch(setErrors(_errors))
        }
