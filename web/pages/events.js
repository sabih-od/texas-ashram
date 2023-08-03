import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import moment from "moment";
import {get, getEventPage} from "../services/eventService";

function Events() {
    const [events, setEvents] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    const [pageCms, setPageCms] = useState(null)

    const formatDate = (date) => moment(date, 'YYYY-MM-DD').format('DD MMM, ');
    const formatTime = (time) => moment(time, 'Th:mm a').format('h:mm a');

    const fetchEvents = async (page = 1) => {
        try {
            const response = await get(page, 100);
            const c_page = parseInt(response.data?.currentPage ?? 1);
            const totalPages = response.data?.totalPages ?? 1;
            setNextPage(c_page < totalPages ? c_page + 1 : null);
            const eventsArray = response.data?.data || [];

            setEvents(c_page < 2 ? eventsArray : [...events, ...eventsArray]);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPage = async () => {
        try {
            const {data} = await getEventPage('web-events-page')
            if (data) {
                setPageCms(data?.data?.content ?? null)
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchEvents();
        fetchPage()
    }, []);
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

            {/* Event content */}

            {/* Monthly Devotional */}
            <section>
                <div className="container text-center imgCenter">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            {pageCms ? (
                                <div dangerouslySetInnerHTML={{__html: pageCms}}/>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <h3 style={{ color: 'black' }}>Typical Schedule for July Event</h3>
                        <table className="table table-bordered">
                            <thead>
                            <tr className="table-header">
                                <th>Start</th>
                                <th>End</th>
                                <th>Event</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(events) && events.length > 0 ? (
                                events.map((event) => (
                                    <tr key={event.id}>
                                        <td>{formatTime(event.start_time)}</td>
                                        <td>{formatTime(event.end_time)}</td>
                                        <td>{event.title}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">Events are not available at this moment.</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        {nextPage ? (
                            <div className="text-center mt-3">
                                <button className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    fetchEvents(nextPage);
                                }}>Load More</button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>

            {/*Event Table End*/}

            {/*!--Books Section --
            <section className="books-section pb-0">
                <div className="container custom-container ">
                    <div className="row">
                        {console.log('events', events)}
                        {Array.isArray(events) && events.length > 0 ? (
                            events.map((event) => (
                                <div className="col-md-4 mb-3" key={event.id}>
                                    <div className="eventcard">
                                        <figure>
                                            <Image src={event1} className="img-fluid" alt="event 1"/>
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
                                        <span>{event.formattedDateTo}{event.start_time} TO {event.formattedDateFrom}{event.end_time}</span>
                                        {event.location ? <p>
                                            <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                            {event.location}</p> : ''}
                                        <a href="#" className="themeBtn">Interested</a>
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
                     Pagination Controls
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
            !--!Books Section --
            */}

        </Layout>
    );
}

export default Events;
