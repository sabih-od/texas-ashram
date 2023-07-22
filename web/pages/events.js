import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import {get} from "../services/eventService";
import {format, parse, parseISO} from "date-fns";
import moment from "moment";

function Events(props) {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const formatDate = (date) => moment(date, 'YYYY-MM-DD').format('DD MMM, ')
    const formatTime = (time) => moment(time, 'Th:mm a').format('h:mm a')

    useEffect(() => {
        async function fetchEvents(page, perPage) {
            try {
                const response = await get(page, perPage);
                const eventsArray = response.data?.data || [];
                console.log('eventsArray', eventsArray);

                setEvents(eventsArray);
                setTotalPages(response.data?.totalPages || 1);
            } catch (error) {
                console.error(error);
            }
        }

        fetchEvents(currentPage, 15).then((r) => 'error'); // Fetch the events for the first page with 15 items per page
    }, [currentPage]);

    return (
        <Layout>
            {/*!--Main Heading --*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Events</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Events</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*!--!Main Heading --*/}


            {/*!--Books Section --*/}
            <section className="books-section pb-0">
                <div className="container custom-container ">
                    <div className="row">
                        {/*{console.log('events', events)}*/}
                        {Array.isArray(events) && events.length > 0 ? (
                            events.map((event) => (
                                <div className="col-md-4 mb-3" key={event.id}>
                                    <div className="eventcard">
                                        <figure>
                                            {/*<Image src={event1} className="img-fluid" alt="event 1"/>*/}
                                            {(event.image !== null && event.image !== 'null') ? (
                                                <Image
                                                    src={event.image}
                                                    className="img-fluid"
                                                    alt={event.title}
                                                    width={300}
                                                    height={400}
                                                />
                                            ) : null}
                                        </figure>
                                        <h4 className="">{event.title}</h4>
                                        <span>{formatDate(event.date_to)}{formatTime(event.start_time)} TO {formatDate(event.date_from)}{formatTime(event.end_time)}</span>
                                        {/*<span>{event.formattedDateTo}{event.start_time} TO {event.formattedDateFrom}{event.end_time}</span>*/}
                                        {event.location ? <p>
                                            <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                            {event.location}</p> : ''}
                                        {/*<a href="#" className="themeBtn">Interested</a>*/}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-md-12">
                                <p>Events are not available at this moment.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="pagination">
                    {/* Pagination Controls */}
                    {currentPage > 1 && (
                        <button className="pagination-button" onClick={() => setCurrentPage((prev) => prev - 1)}>
                            Previous
                        </button>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`pagination-button ${page === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button className="pagination-button" onClick={() => setCurrentPage((prev) => prev + 1)}>
                            Next
                        </button>
                    )}
                </div>
            </section>
            {/*!--!Books Section --*/}
        </Layout>
    );
}

export default Events;
