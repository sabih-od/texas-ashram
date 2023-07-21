import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import {get} from "../services/sermonService";

function SermonsTeaching(props) {

    const [sermons, setSermons] = useState([]);

    useEffect(() => {
        async function fetchSermons() {
            try {
                const response = await get(1, 15);
                const sermonsArray = response.data?.data || [];
                console.log(response.data?.data)

                setSermons(sermonsArray);
            } catch (error) {
                console.error(error);
            }

        }

        fetchSermons().then((r) => 'error');
    }, []);

    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Messages</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Messages</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Books Section -->*/}
            <section className="books-section pb-0">
                <div className="container custom-container ">
                    <div className="row">

                        {Array.isArray(sermons) && sermons.length > 0 ? (
                            sermons.map((sermon) => (
                                <div className="col-md-4 mb-4" key={sermon.id}>
                                    <div className="videoItems">
                                        {/*<Image src={sermon.image} className="img-fluid" alt="video"/>*/}
                                        <Image
                                            src={sermon.image ?? '#'}
                                            className="img-fluid"
                                            alt={sermon.title}
                                            width={300}
                                            height={400}
                                        />
                                        <a href={sermon.url} target="_blank" data-fancybox=""><i className="fab fa-youtube"/></a>

                                    </div>
                                    <h4 className="mt-5">{sermon.title}</h4>
                                    <p>{sermon.description}</p>
                                </div>
                            ))
                        ) : (
                            <div className="col-md-12">
                                <p>Sermons are not available at this moment.</p>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            {/*<!-- !Books Section -->*/}
        </Layout>
    );
}

export default SermonsTeaching;
