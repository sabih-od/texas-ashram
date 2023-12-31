import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import {get} from "../services/bookServices";

function Books(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await get(1, 15);
                const booksArray = response.data?.data || [];
                console.log(response.data?.data)

                setBooks(booksArray);
            } catch (error) {
                console.error(error);
            }

        }

        fetchBooks().then((r) => 'error');
    }, []);


    // let response;
    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Books</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Books</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Books Section -->*/}
            <section className="books-section pb-0">
                <div className="container">
                    <div className="row">
                        {Array.isArray(books) && books.length > 0 ? (
                            books.map((book) => (
                                <div className="col-md-4" key={book.id}>
                                    <div className="card">
                                        <figure>
                                            {book.image ? (
                                                <Image
                                                    src={book.image}
                                                    className="img-fluid"
                                                    alt={book.title}
                                                    width={300}
                                                    height={400}
                                                />
                                            ) : (
                                                <Image
                                                    src="../images/books/book1.png"
                                                    className="img-fluid"
                                                    alt="book 1"
                                                    width={300}
                                                    height={400}
                                                />
                                            )}
                                        </figure>
                                        <h4>{book.title}</h4>
                                        { !book.url && !book.file ? '' :
                                            <Link href={ book.url ? book.url : book.file ? book.file : '#' } target="_blank" className="themeBtn grey">
                                                Read More
                                            </Link>
                                        }
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-md-12">
                                <p>Books are not available at this moment.</p>
                            </div>
                        )}
                    </div>

                </div>
            </section>
            {/*<!-- !Books Section -->*/}
        </Layout>
    );
}

export default Books;