import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getEvents,
    loading as eventsLoading,
    events as eventsList,
    total as eventTotal
} from '../../store/slices/eventsSlice'
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

function Events(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    // const loading = useSelector(booksLoading)
    // const books = useSelector(booksList)
    // const total = useSelector(bookTotal)

    const loading = useSelector(eventsLoading)
    const events = useSelector(eventsList)
    const total = useSelector(eventTotal)


    const [page, setPage] = useState(1)

    const resultsPerPage = 15

    function onPageChange(e, p) {
        // setPage(p)
        console.log("p", p)
    }

    useEffect(() => {
        dispatch(getEvents({page}))
    }, [page])

    useEffect(() => {
        console.log("total", total)
    }, [total])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        Events
                    </Typography>
                    <Button component={Link} href='/events/create' sx={{marginLeft: 'auto'}}>
                        Create Events
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
                                        <TableCell>Title</TableCell>
                                        <TableCell className="text-center" width="150">Description</TableCell>
                                        <TableCell className="text-center" width="150">Date To</TableCell>
                                        <TableCell className="text-center" width="150">Date From</TableCell>
                                        <TableCell className="text-center" width="150">Location</TableCell>
                                        <TableCell className="text-center" width="150">Image</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {events.map(event => {
                                        return (
                                            <TableRow hover role='checkbox' tabIndex={-1} key={event.id}>
                                                <TableCell>
                                                    <span>{event.id}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{event.title}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{event.description}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{event.date_to}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{event.date_from}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{event.location}</span>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {(event.image !== null && event.image !== 'null') ? (
                                                        <Button tag='a' href={event.image} target="_blank" layout="link"
                                                                size="small">
                                                            View Image
                                                        </Button>
                                                    ) : null}
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

export default Events;