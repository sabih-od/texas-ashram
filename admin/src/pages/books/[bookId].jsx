import React, {useEffect, useState} from 'react';
// import Layout from "../../example/containers/Layout";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {
    getBook,
    book as bookDetail,
    loading as bookLoading,
    errors as bookErrors,
    success as bookSuccess, updateBook, setErrors, setSuccess
} from "../../store/slices/bookSlice";
// import PageTitle from "../../example/components/Typography/PageTitle";
// import {Button, Input, Label} from "@roketid/windmill-react-ui";
// import FileInput from "../../example/components/FileInput";

function Book(props) {
    const {push, query} = useRouter()
    const {bookId} = query

    const dispatch = useDispatch()

    const book = useSelector(bookDetail)
    const loading = useSelector(bookLoading)
    const errors = useSelector(bookErrors)
    const success = useSelector(bookSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)

    useEffect(() => {
        if (bookId) {
            dispatch(getBook({id: bookId}))
        }
    }, [bookId])

    useEffect(() => {
        if (book) {
            setTitle(book.title)
        }
    }, [book])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Book updated successfully!')
            setTimeout(() => {
                push('/books')
            }, 1500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        if (!fileValidation()) return;

        dispatch(updateBook({
            id: bookId,
            title, image, file
        }))

    }

    const fileValidation = () => {
        let _errors = []
        if (file === null) {
            _errors.push("File is required!")
        }
        if (image === null) {
            _errors.push("Image is required!")
        }

        if (_errors.length > 0) {
            dispatch(setErrors(_errors))
        }

        return _errors.length < 1
    }

    return (
        <></>
        // <Layout>
        //     <PageTitle>Update Book</PageTitle>
        //
        //     <form onSubmit={handleSubmit} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        //         {successMsg ? (
        //             <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-5" role="alert">
        //                 <p className="font-bold">Success</p>
        //                 <p>{successMsg}</p>
        //             </div>
        //         ) : null}
        //         {errors ? (
        //             <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-5" role="alert">
        //                 <p className="font-bold">Errors</p>
        //                 {errors.map((item, ind) => (
        //                     <p key={ind}>{item}</p>
        //                 ))}
        //             </div>
        //         ) : null}
        //
        //         <Label>
        //             <span>Title</span>
        //             <Input value={title} onChange={e => setTitle(e.target.value)} className="mt-1"/>
        //         </Label>
        //
        //         <FileInput title="Upload File" onFileChange={e => {
        //             setFile(e.target?.files[0] ?? null)
        //         }}/>
        //
        //         <FileInput title="Upload Image" onFileChange={e => {
        //             setImage(e.target?.files[0] ?? null)
        //         }}/>
        //
        //         <Button className="mt-5" type="submit" disabled={loading}>
        //             {loading ? 'Saving' : 'Save'}
        //         </Button>
        //     </form>
        // </Layout>
    );
}

export default Book;