import React, {useState} from 'react';
import PageTitle from "../../example/components/Typography/PageTitle";
import {Button, Input, Label, Select, Textarea} from "@roketid/windmill-react-ui";
import Layout from "../../example/containers/Layout";
import FileInput from "../../example/components/FileInput";
import {useDispatch, useSelector} from "react-redux";
import {addBook, loading as BookLoading} from '../../store/slices/bookSlice'

function Create(props) {

    const dispatch = useDispatch()

    const loading = useSelector(BookLoading)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return
        dispatch(addBook({
            title, image, file
        }))

    }

    return (
        <Layout>
            <PageTitle>Add Book</PageTitle>

            <form onSubmit={handleSubmit} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
                    <span>Title</span>
                    <Input value={title} onChange={e => setTitle(e.target.value)} className="mt-1"/>
                </Label>

                <FileInput title="Upload File" onFileChange={e => {
                    setFile(e.target?.files[0] ?? null)
                }}/>

                <FileInput title="Upload Image" onFileChange={e => {
                    setImage(e.target?.files[0] ?? null)
                }}/>

                <Button className="mt-5" type="submit" disabled={loading}>
                    {loading ? 'Saving' : 'Save'}
                </Button>
            </form>
        </Layout>
    );
}

export default Create;