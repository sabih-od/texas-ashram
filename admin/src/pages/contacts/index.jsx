import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getContacts,
    loading as contactsLoading,
    contacts as contactsList,
    total as contactTotal,
    deleteContact
} from '../../store/slices/contactsSlice'
import Link from "next/link";
import {useRouter} from "next/navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {Pagination, Stack} from "@mui/material";
import {IconButton, Pagination, Stack} from "@mui/material";
import {Delete, Pencil} from "mdi-material-ui";
import {deleteBook, getBooks} from "../../store/slices/booksSlice";

const columns = [
    {id: 'index', label: 'S.No', minWidth: 170},
    {id: 'title', label: 'Title', minWidth: 170},
    // {
    //     id: 'population',
    //     label: 'Population',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toLocaleString('en-US')
    // },
    // {
    //     id: 'size',
    //     label: 'Size\u00a0(km\u00b2)',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toLocaleString('en-US')
    // },
    // {
    //     id: 'density',
    //     label: 'Density',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toFixed(2)
    // }
]

function Contacts(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const handleDelete = async (e, id) => {
        e.preventDefault()
        console.log(id)
        await dispatch(deleteContact({id}))
        // await dispatch(getContacts({page}))
    }

    // const loading = useSelector(booksLoading)
    // const books = useSelector(booksList)
    // const total = useSelector(bookTotal)

    const loading = useSelector(contactsLoading)
    const contacts = useSelector(contactsList)
    const total = useSelector(contactTotal)


    const [page, setPage] = useState(1)

    const resultsPerPage = 15

    function onPageChange(e, p) {
        // setPage(p)
        console.log("p", p)
    }

    useEffect(() => {
        dispatch(getContacts({page}))
    }, [page])

    useEffect(() => {
        console.log("total", total)
    }, [total])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        Contacts
                    </Typography>
                    <Button component={Link} href='/contacts/create' sx={{marginLeft: 'auto'}}>
                        Create Contact
                    </Button>
                </Stack>
            </Grid>


            <Grid item xs={12}>
                <Card>
                    <Paper sx={{width: '100%', overflow: 'hidden'}}>
                        <TableContainer sx={{maxHeight: 440}}>
                            <Table stickyHeader aria-label='sticky table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell className="text-center" width="150">Email</TableCell>
                                        <TableCell className="text-center" width="150">Phone</TableCell>
                                        <TableCell className="text-center" width="150">Company</TableCell>
                                        <TableCell className="text-center" width="150">Message</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {contacts.map(contact => {
                                        return (
                                            <TableRow hover role='checkbox' tabIndex={-1} key={contact.id}>
                                                <TableCell>
                                                    <span>{contact.id}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{contact.name}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{contact.email}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{contact.phone}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{contact.company}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{contact.message}</span>
                                                </TableCell>

                                                <TableCell width="200">
                                                    {/*<ButtonWIcon onClick={e => {*/}
                                                    {/*    e.preventDefault()*/}
                                                    {/*    push(`/books/${book.id}`)*/}
                                                    {/*}} Icon={EditIcon}/>*/}
                                                    {/*<ButtonWIcon onClick={e => {*/}
                                                    {/*    e.preventDefault()*/}
                                                    {/*    dispatch()*/}
                                                    {/*}} Icon={TrashIcon}/>*/}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Pagination sx={{mt: 4}} count={total} onChange={onPageChange} />
                        <TablePagination
                            rowsPerPageOptions={[resultsPerPage]}
                            component='div'
                            count={total}
                            rowsPerPage={-1}
                            page={page}
                            onPageChange={onPageChange}
                            // onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Contacts;