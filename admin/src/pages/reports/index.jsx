import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getReports,
    loading as reportLoading,
    reports as reportList,
    total as reportTotal,
    totalPages as reportTotalPages,
    deleteReport,
    acceptReport
} from '../../store/slices/reportsSlice'
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
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {Alert, IconButton, Pagination, Stack} from "@mui/material";
import {Delete} from 'mdi-material-ui'
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

function Reports(props) {

    const dispatch = useDispatch()

    const loading = useSelector(reportLoading)
    const reports = useSelector(reportList)
    const total = useSelector(reportTotal)
    const totalPages = useSelector(reportTotalPages)

    const [success, setSuccess] = useState(null)
    const [page, setPage] = useState(1)

    function onPageChange(e, p) {
        setPage(p)
    }

    const handleDelete = async (e, id) => {
        e.preventDefault()
        await dispatch(deleteReport({id}))
        await dispatch(getReports({page}))
        showSuccess("User deleted successfully.")
    }

    const handleAccept = async (e, id) => {
        e.preventDefault()
        await dispatch(acceptReport({id}))
        await dispatch(getReports({page}))
        showSuccess("User blocked successfully.")
    }

    const showSuccess = (msg) => {
        setSuccess(msg)
        setTimeout(() => {
            setSuccess(null)
        }, 1500)
    }

    useEffect(() => {
        dispatch(getReports({page}))
    }, [page])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        Reports
                    </Typography>
                    <Button component={Link} href='/reports/create' sx={{marginLeft: 'auto'}}>
                        Create Report
                    </Button>
                </Stack>
            </Grid>


            <Grid item xs={12}>
                <Card>
                    <Paper sx={{width: '100%', overflow: 'hidden'}}>
                        {success ? (
                            <Alert severity="success">{success}</Alert>
                        ) : null}
                        {loading ? <Typography variant='h5' sx={{my: 3}} textAlign='center'>Loading...</Typography> : (
                            <TableContainer sx={{maxHeight: 440}}>
                                <Table stickyHeader aria-label='sticky table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Reported User</TableCell>
                                            <TableCell>Reported By</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {reports.map(report => {
                                            return (
                                                <TableRow hover role='checkbox' tabIndex={-1} key={report.id}>
                                                    <TableCell>
                                                        <span>{report.id}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>{`${report.reportedUser.first_name} ${report.reportedUser.last_name} (${report.reportedUser.email})`}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>{report.user_id}</span>
                                                    </TableCell>
                                                    <TableCell width="200">
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => handleAccept(e, report.id)}
                                                            sx={{marginLeft: 'auto'}}>
                                                            <BlockOutlinedIcon/>
                                                        </IconButton>
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => handleDelete(e, report.id)}
                                                            sx={{marginLeft: 'auto'}}>
                                                            <Delete/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}

                        <Stack direction='row' sx={{my: 4, display: (loading ? 'none' : '')}} justifyContent='center'>
                            <Pagination count={totalPages} onChange={onPageChange}/>
                        </Stack>
                    </Paper>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Reports;