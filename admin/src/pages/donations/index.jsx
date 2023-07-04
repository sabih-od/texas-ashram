import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getDonations,
    loading as donationsLoading,
    donations as donationsList,
    total as donationTotal
} from '../../store/slices/donationsSlice'
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

function Donations(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    // const loading = useSelector(booksLoading)
    // const books = useSelector(booksList)
    // const total = useSelector(bookTotal)

    const loading = useSelector(donationsLoading)
    const donations = useSelector(donationsList)
    const total = useSelector(donationTotal)


    const [page, setPage] = useState(1)

    const resultsPerPage = 15

    function onPageChange(e, p) {
        // setPage(p)
        console.log("p", p)
    }

    useEffect(() => {
        dispatch(getDonations({page}))
    }, [page])

    useEffect(() => {
        console.log("total", total)
    }, [total])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        Donations
                    </Typography>
                    {/*<Button component={Link} href='/donations/create' sx={{marginLeft: 'auto'}}>*/}
                    {/*    Create Donation*/}
                    {/*</Button>*/}
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
                                        <TableCell>amount</TableCell>
                                        {/*<TableCell>Action</TableCell>*/}
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {donations.map(donation => {
                                        return (
                                            <TableRow hover role='checkbox' tabIndex={-1} key={donation.id}>
                                                <TableCell>
                                                    <span>{donation.id}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{donation.amount}</span>
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

export default Donations;