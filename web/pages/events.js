import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import {get} from "../services/eventService";
import {format, parse} from "date-fns";

function Events(props) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await get(1, 15);
                const eventsArray = response.data?.data || [];
                console.log(response.data?.data)
                const formattedEvents = eventsArray.map((event) => {
                    const parsedDateTo = parse(event.date_to, 'dd-MM-yyyy', new Date());
                    const parsedDateFrom = parse(event.date_from, 'dd-MM-yyyy', new Date());

                    const formattedStartDate = format(new Date(parsedDateTo), 'dd MMM,');
                    const formattedEndDate = format(new Date(parsedDateFrom), 'dd MMM,');

                    return {
                        ...event,
                        formattedDateFrom: formattedStartDate,
                        formattedDateTo: formattedEndDate,
                    };
                });

                setEvents(formattedEvents);
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


            {/*!--Books Section --*/}
            <section className="books-section pb-0">
                <div className="container custom-container ">
                    <div className="row">
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
                                        <span>{event.formattedDateTo}{event.start_time} TO {event.formattedDateFrom}{event.end_time}</span>
                                        <p>
                                            <i className="fas fa-map-marker-alt text-primary mr-2"/>
                                            {event.location}</p>
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
            </section>
            {/*!--!Books Section --*/}
        </Layout>
    );
}

export default Events;
