import React, {useEffect, useState} from 'react';
import PageTitle from "../../example/components/Typography/PageTitle";
import Layout from "../../example/containers/Layout";
import {
    Button, Pagination,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableFooter,
    TableHeader,
    TableRow
} from "@roketid/windmill-react-ui";
import {
    EditIcon,
    TrashIcon
} from '../../icons'
import {useDispatch, useSelector} from "react-redux";
import {
    getBooks,
    loading as booksLoading,
    books as booksList,
    total as bookTotal
} from '../../store/slices/booksSlice'
import Link from "next/link";
import {useRouter} from "next/navigation";

function Books(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(booksLoading)
    const books = useSelector(booksList)
    const total = useSelector(bookTotal)


    const [page, setPage] = useState(1)

    const resultsPerPage = 15

    function onPageChange(p) {
        setPage(p)
    }

    useEffect(() => {
        dispatch(getBooks({page}))
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
                        {loading ?
                            <TableRow>
                                <TableCell colSpan={5} className="text-center">
                                    Loading...
                                </TableCell>
                            </TableRow> :
                            books.map((book, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <span>{book.id}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span>{book.title}</span>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {(book.file !== null && book.file !== 'null') ? (
                                            <Button tag='a' href={book.file} target="_blank" layout="link" size="small">
                                                View File
                                            </Button>
                                        ) : null}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {(book.image !== null && book.image !== 'null') ? (
                                            <Button tag='a' href={book.image} target="_blank" layout="link"
                                                    size="small">
                                                View Image
                                            </Button>
                                        ) : null}
                                    </TableCell>
                                    <TableCell width="200">
                                        <ButtonWIcon onClick={e => {
                                            e.preventDefault()
                                            push(`/books/${book.id}`)
                                        }} Icon={EditIcon}/>
                                        <ButtonWIcon onClick={e => {
                                            e.preventDefault()
                                            dispatch()
                                        }} Icon={TrashIcon}/>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
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

        </Layout>
    );
}

export default Books;

const ButtonWIcon = ({Icon, ...props}) => {

    return (
        <button type="button"
                {...props}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Icon className="h-5 w-5"/>
        </button>
    )
}