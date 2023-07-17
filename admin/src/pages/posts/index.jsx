import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getPosts,
    loading as postsLoading,
    posts as postsList,
    total as postTotal,
    totalPages as postTotalPages,
    deletePost
} from '../../store/slices/postsSlice'
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
import {IconButton, Pagination, Stack} from "@mui/material";
import {Pencil, Delete} from 'mdi-material-ui'
import {log} from "next/dist/server/typescript/utils";
//Additonal
// import {deletePost} from "../../store/slices/postsSlice";
// import {getPosts} from "../../store/slices/postsSlice";

function Posts(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(postsLoading)
    const posts = useSelector(postsList)
    const total = useSelector(postTotal)
    const totalPages = useSelector(postTotalPages)
console.log("posts" , posts)
    const [page, setPage] = useState(1)

    function onPageChange(e, p) {
        setPage(p)
    }

    const handleDelete = async (e, id) => {
        e.preventDefault()
        console.log(id)
        await dispatch(deletePost({id}))
        await dispatch(getPosts({page}))
    }

    useEffect(() => {
        dispatch(getPosts({page}))
    }, [page])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        Posts
                    </Typography>
                    <Button component={Link} href='/posts/create' sx={{marginLeft: 'auto'}}>
                        Create Post
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
                                            <TableCell>ID</TableCell>
                                            <TableCell>Title</TableCell>
                                            <TableCell>Content</TableCell>
                                            <TableCell className="text-center" width="150">Media</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {posts.map(post => {
                                            return (
                                                <TableRow hover role='checkbox' tabIndex={-1} key={post.id}>
                                                    <TableCell>
                                                        <span>{post.id}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>{post.title}</span>
                                                    </TableCell>

                                                    <TableCell>
                                                        <span>{post.content}</span>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {(post.media !== null && post.media !== 'null') ? (
                                                            <Button tag='a' href={post.media} target="_blank"
                                                                    layout="link"
                                                                    size="small">
                                                                View Image
                                                            </Button>
                                                        ) : null}
                                                    </TableCell>
                                                    <TableCell width="200">
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                push(`/posts/${post.id}`)
                                                            }} sx={{marginLeft: 'auto'}}>
                                                            <Pencil/>
                                                        </IconButton>
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => handleDelete(e, post.id)}
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

export default Posts;