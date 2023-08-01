import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import {get} from "../services/eventService";
import moment from "moment";

function Events(props) {
    const [events, setEvents] = useState([]);

    const formatDate = (date) => moment(date, 'YYYY-MM-DD').format('DD MMM, ')
    const formatTime = (time) => moment(time, 'Th:mm a').format('h:mm a')

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await get(1, 15);
                const eventsArray = response.data?.data || [];
                setEvents(eventsArray);
            } catch (error) {
                console.error(error);
            }
        }

        fetchEvents().then((r) => 'error');
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
            {/*!--!Main Heading --*/}

            {/*Event Table Start*/}
            <h1 style={{textAlign: 'left', fontWeight: 'bold', color: 'black'}}>Monthly Devotional</h1>
            <p style={{textAlign: 'left', color: 'black'}}>On the first Saturday of every month, a group of people join
                a Zoom meeting for a brief Bible Study/Prayer Request meeting. We would love you to join. If you are not
                getting the email notifications about this meeting, please submit a “Contact Us” request so we can add
                you to our notifications. </p>
            <div style={{display: 'flex', justifyContent: 'center', height: '500px'}}>
                <img src="../images/zoom.png" alt="Placeholder Image"/>
            </div>
            <h1 style={{textAlign: 'left', fontWeight: 'bold', color: 'black'}}>Main Campus Event</h1>
            <p style={{textAlign: 'left', color: 'black'}}>The Texas Christian Ashram (TCA) is in the heart of beautiful
                East Texas at Scottsville Camp and Conference Center. Located near Marshall, TX, just 30 minutes from
                the Louisiana board, makes this campsite the perfect location for both Texas and Louisiana residents.
                TCA offers activities and dedicated programs for all ages. The youth enjoy worship and the Word of God
                while playing elaborate games that couple both competition and fun for everyone. The college and career
                program integrates with both the adult and youth programs at different times in order to meet the needs
                of the age group. The adult program incorporates teaching, worship, small group activities, and rest.
                The goal of TCA is to focus on Jesus and each other. Unique to TCA is the Blue Bell ice cream social
                each night where games are played, and ice cream is eaten. </p>
            <style dangerouslySetInnerHTML={{
                __html:
                    `.table {
                      width: 80%;
                      margin: auto;
                      border-collapse: collapse;
                    }
            
                    .table-header th {
                      border: 1px solid black;
                      padding: 8px;
                        text-align: center; /* Center the text inside the table cells */
                    }
            
                    .table td {
                      border: 1px solid black;
                      padding: 8px;
                        text-align: center; /* Center the text inside the table cells */
                    }`
            }}/>

            <section>
                <table className="table">
                    <thead>
                    <h3 style={{ color: 'black' }}>Typical Schedule for July Event</h3>
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
                            <td colSpan="3">Events are not available at this moment.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
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
