import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getCMSItems,
    loading as cmsLoading,
    cmsList as cmsListing,
    total as cmsTotal,
    totalPages as cmsTotalPages,
    deleteCMS
} from '../../store/slices/cmsListSlice'
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
import {IconButton, Pagination, Stack} from "@mui/material";
import {Pencil, Delete} from 'mdi-material-ui'

function Announcements(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(cmsLoading)
    const cmsList = useSelector(cmsListing)
    const total = useSelector(cmsTotal)
    const totalPages = useSelector(cmsTotalPages)

    const [page, setPage] = useState(1)

    function onPageChange(e, p) {
        setPage(p)
    }

    const handleDelete = async (e, id) => {
        e.preventDefault()
        await dispatch(deleteCMS({id}))
        await dispatch(getCMSItems({page}))
    }

    useEffect(() => {
        dispatch(getCMSItems({page}))
    }, [page])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        CMS Pages
                    </Typography>
                    <Button component={Link} href='/cmsList/create' sx={{marginLeft: 'auto'}}>
                        Create Page
                    </Button>
                </Stack>
            </Grid>


            <Grid item xs={12}>
                <Card>
                    <Paper sx={{width: '100%', overflow: 'hidden'}}>
                        {loading ? <Typography variant='h5' sx={{my: 3}} textAlign='center'>Loading...</Typography> : (
                            <TableContainer sx={{maxHeight: 440}}>
                                <Table stickyHeader aria-label='sticky table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell width="200">ID</TableCell>
                                            <TableCell width="200">Name</TableCell>
                                            <TableCell align='right'>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cmsList.map(page => {
                                            return (
                                                <TableRow hover role='checkbox' tabIndex={-1} key={page.id}>
                                                    <TableCell>
                                                        <span>{page.id}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>{page.name}</span>
                                                    </TableCell>
                                                    <TableCell align='right'>
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                push(`/cms/${page.id}`)
                                                            }} sx={{marginLeft: 'auto'}}>
                                                            <Pencil/>
                                                        </IconButton>
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => handleDelete(e, page.id)}
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

export default Announcements;