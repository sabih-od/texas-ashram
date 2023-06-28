import React, {useEffect, useState} from 'react';
import PageTitle from "../../example/components/Typography/PageTitle";
import Layout from "../../example/containers/Layout";
import {
    Avatar,
    Badge, Button, Pagination,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableFooter,
    TableHeader,
    TableRow
} from "@roketid/windmill-react-ui";
import response from "../../utils/demo/tableData";
import {useDispatch, useSelector} from "react-redux";
import {
    getBooks,
    loading as booksLoading,
    books as booksList,
    total as bookTotal
} from '../../store/slices/bookSlice'
import Link from "next/link";

function Books(props) {

    const dispatch = useDispatch()

    const loading = useSelector(booksLoading)
    const books = useSelector(booksList)
    const total = useSelector(bookTotal)


    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    const resultsPerPage = 15

    function onPageChange(p) {
        setPage(p)
    }

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    // useEffect(() => {
    //     console.log("books react", books)
    // }, [books])

    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
    }, [page])

    return (
        <Layout>
            <div className="flex items-center">
                <div className="flex-none">
                    <PageTitle>Books</PageTitle>
                </div>
                <div className="flex-initial ml-auto">
                    <Link href="/books/create">
                        <Button>Add Book</Button>
                    </Link>
                </div>
            </div>

            {loading ?
                <h1 className="text-center mb-3">Loading...</h1> :
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <tr>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell className="text-center" width="150">File</TableCell>
                                <TableCell className="text-center" width="150">Image</TableCell>
                                <TableCell>Action</TableCell>
                            </tr>
                        </TableHeader>
                        <TableBody>
                            {books.map((book, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <span>{book.id}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span>{book.title}</span>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Button tag='a' href={book.file} target="_blank" layout="link" size="small">
                                            View File
                                        </Button>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Button tag='a' href={book.image} target="_blank" layout="link" size="small">
                                            View Image
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TableFooter>
                        <Pagination
                            totalResults={total}
                            resultsPerPage={resultsPerPage}
                            label="Table navigation"
                            onChange={onPageChange}
                        />
                    </TableFooter>
                </TableContainer>
            }
        </Layout>
    );
}

export default Books;