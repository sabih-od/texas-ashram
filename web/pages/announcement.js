import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import speaker from "../images/icon/speaker.png";
import { get } from "../services/announcementService";
import { parse, format } from "date-fns";

function Announcement(props) {
    const [announcements, setAnnouncement] = useState([]);

    useEffect(() => {
        async function fetchAnnouncements() {
            try {
                const response = await get(1, 15);
                const announcementsArray = response.data?.data || [];

                // const formattedAnnouncements = announcementsArray.map((announcement) => {
                //     const parsedDate = parse(announcement.date, 'dd-MM-yyyy', new Date());
                //     const formattedDate = format(parsedDate, 'MMM dd, yyyy');
                //     return {
                //         ...announcement,
                //         formattedDate: formattedDate,
                //     };
                // });

                setAnnouncement(announcementsArray);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAnnouncements().then((r) => 'error');
    }, []);

    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1 className="mb-5">Announcements</h1>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            {/*<!-- Announcements Section -->*/}
            <section className="announcement-section pb-0">
                <div className="container custom-container">
                    <div className="col-md-10 mx-auto">
                        {Array.isArray(announcements) && announcements.length > 0 ? (
                            announcements.map((announcement) => (
                                <div className="card-items mb-4" key={announcement.id}>
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <figure>
                                                <Image src={speaker} className="img-fluid" alt="speaker" />
                                            </figure>
                                        </div>
                                        <div className="col-md-9">
                                            <span>{announcement.date}</span>
                                            <a href="">
                                                <h4>{announcement.title}</h4>
                                            </a>
                                            <p>{announcement.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-md-12">
                                <p>Announcements are not available at this moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/*<!-- !Announcements Section -->*/}
        </Layout>
    );
}

export default Announcement;
