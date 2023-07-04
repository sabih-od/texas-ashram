import React from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import book1 from "../images/books/book1.png";
import book2 from "../images/books/book2.png";
import book3 from "../images/books/book3.png";

function Books(props) {
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
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book1} className="img-fluid" alt="book 1" />
                                </figure>
                                <h4>The Weight Of Glory</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book2} className="img-fluid" alt="book 2" />
                                </figure>
                                <h4>Fire In His Bones</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book3} className="img-fluid" alt="book 3" />
                                </figure>
                                <h4>Listening For The Voice</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book1} className="img-fluid" alt="book 1" />
                                </figure>
                                <h4>The Weight Of Glory</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book2} className="img-fluid" alt="book 2" />
                                </figure>
                                <h4>Fire In His Bones</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book3} className="img-fluid" alt="book 3" />
                                </figure>
                                <h4>Listening For The Voice</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book1} className="img-fluid" alt="book 1" />
                                </figure>
                                <h4>The Weight Of Glory</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book2} className="img-fluid" alt="book 2" />
                                </figure>
                                <h4>Fire In His Bones</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <figure>
                                    <Image src={book3} className="img-fluid" alt="book 3" />
                                </figure>
                                <h4>Listening For The Voice</h4>
                                <a href="#" className="themeBtn grey">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- !Books Section -->*/}
        </Layout>
);
}

export default Books;