import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import speaker from "../images/icon/speaker.png";
import { get } from "../services/announcementService";

const Announcement = (props) => {
    const [announcements, setAnnouncement] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    useEffect(() => {
        async function fetchAnnouncements() {
            try {
                const response = await get(1, 15);
                const announcementsArray = response.data?.data || [];

                setAnnouncement(announcementsArray);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAnnouncements();
    }, []);

    // Function to handle click on announcement title
    const handleAnnouncementClick = (announcement) => {
        setSelectedAnnouncement(announcement);
        setShowModal(true);
    };

    return (
        <Layout>

                         <div className="innertitle">
                            <section className="innerHeading">
                                 <h1 className="mb-5">Announcements</h1>
                           </section>
                       </div>


            <section className="announcement-section pb-0">
                <div className="container custom-container">
                    <div className="col-md-10 mx-auto">
                        {Array.isArray(announcements) && announcements.length > 0 ? (
                            announcements.map((announcement) => {
                                // Split the date string to get day, month, and year
                                const [day, month, year] = announcement.date.split('-');

                                // Construct a valid Date object
                                const dateObj = new Date(`${year}-${month}-${day}`);

                                // Max characters to display in the description before adding ellipsis
                                const maxChars = 100;
                                const truncatedDescription = announcement.description.length > maxChars
                                    ? `${announcement.description.slice(0, maxChars)}...`
                                    : announcement.description;

                                return (
                                    <div className="card-items mb-4" key={announcement.id}>
                                        <div className="row align-items-center">
                                            <div className="col-md-3">
                                                <figure>
                                                    <Image src={speaker} className="img-fluid" alt="speaker" />
                                                </figure>
                                            </div>
                                            <div className="col-md-9">
                                                <p>{dateObj.toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}</p>
                                                {/* Add onClick event to the announcement title */}
                                                <a href="#" onClick={() => handleAnnouncementClick(announcement)}>
                                                    <h4>{announcement.title}</h4>
                                                </a>
                                                {/* Display truncated description with ellipsis */}
                                                <p>{truncatedDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-md-12">
                                <p>Announcements are not available at this moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Bootstrap Modal */}
            {selectedAnnouncement && (
                <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedAnnouncement.title}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {selectedAnnouncement.description}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};
export default Announcement;