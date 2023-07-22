import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import {get} from "../services/eventService";
import {format, parse, parseISO} from "date-fns";
import moment from "moment";

function Events(props) {
    const [events, setEvents] = useState([]);
    // console.log('events', events);
    const formatDate = (date) => moment(date, 'YYYY-MM-DD').format('DD MMM, ')
    const formatTime = (time) => moment(time, 'Th:mm a').format('h:mm a')
    // console.log('formatTime', formatTime);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await get(1, 15);
                const eventsArray = response.data?.data || [];
                console.log('eventsArray', eventsArray);

                /*const formattedEvents = eventsArray.map((event) => {
                    const parsedDateTo = parse(event.date_to, 'yyyy-MM-dd', new Date());
                    const parsedDateFrom = parse(event.date_from, 'yyyy-MM-dd', new Date());

                    const formattedStartDate = format('2000-01-01' + parsedDateTo, 'dd MMM,');
                    const formattedEndDate = format('2000-01-01' + parsedDateFrom, 'dd MMM,');

                    // const formattedStartTime = formatTime(event.start_time, 'h:mm a,');
                    // console.log('formattedStartTime', formattedStartTime)

                    // const parsedStartTime = new Date(event.start_time);
                    // const parsedEndTime = new Date(event.end_time);
                    // const parsedStartTime = parseISO(event.start_time);
                    // const parsedEndTime = parseISO(event.end_time);

                    // const formattedStartTime = format(new Date(parsedStartTime), 'h:mm a,');
                    // const formattedEndTime = format(new Date(parsedEndTime), 'h:mm a,');


                    // const formattedEndTime = format(parsedEndTime, 'h:mm a,');

                    return {
                        ...event,
                        formattedDateFrom: formattedStartDate,
                        formattedDateTo: formattedEndDate,
                        // formattedStartT: formattedStartTime,
                        // formattedEndT: formattedEndTime,
                    };
                });*/

                setEvents(eventsArray);
                // console.log('setEvents(eventsArray)', setEvents(eventsArray));
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
            </section>
            {/*!--!Books Section --*/}
        </Layout>
    );
}

export default Events;
