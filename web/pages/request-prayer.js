import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {get} from "../services/prayerRequestService";
import {apiUrl, getToken} from "../services/global";
import Modal from 'react-modal';
import {format} from 'date-fns';

function RequestPrayer(props) {

    // Prayer Retrieve Work Start
    const [prayers, setPrayers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPrayer, setSelectedPrayer] = useState(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await get(1, 15);
                const prayersArray = response.data?.data || [];

                const formattedEvents = await Promise.all(prayersArray.map(async (prayer) => {
                    const parsedDateTo = new Date(prayer.start_date);
                    const parsedDateFrom = new Date(prayer.end_date);
                    const formattedDateTo = format(parsedDateTo, 'MMM dd, yyyy');
                    const formattedDateFrom = format(parsedDateFrom, 'MMM dd, yyyy');

                    const userResponse = await fetch(`${apiUrl()}/users/${prayer.user_id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${getToken()}`
                        }
                    });

                    const userData = await userResponse.json();

                    return {
                        ...prayer,
                        formattedDateTo,
                        formattedDateFrom,
                        user: userData.data
                    };
                }));
                setPrayers(formattedEvents);
            } catch (error) {
                console.error(error);
            }
        }

        fetchEvents().catch((error) => console.error(error));
    }, []);
    // Prayer Retrieve Work End

    // Modal Open Work Start
    const openModal = async (prayerId) => {
        const selectedPrayer = prayers.find((prayer) => prayer.id === prayerId);
        setSelectedPrayer(selectedPrayer);
        setIsModalOpen(true);
    };
    // Modal Open Work End

    // Show Entries Work Start
    const options = [10, 20, 30, 40, 50, 100];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = (event) => {
        setSelectedOption(parseInt(event.target.value));
    };
    // Show Entries Work End

    // Searching Work Start
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const filteredPrayers = prayers.filter((prayer) =>
            prayer.name.toLowerCase().includes(value.toLowerCase())
        );
        console.log('Filtered Prayers:', filteredPrayers);

        setSearchResults(filteredPrayers);
    };
    const displayedPrayers = searchResults.length > 0 ? searchResults : prayers;
    // Searching Work End

    // Pagination Work Start
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = prayers.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // Pagination Work Start

    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Requested Prayers</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Requested Prayers</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            <section className="pb-0">
                <div className="container">
                    <div className="recentTable shadow">
                        <div className="showOne">

                            {/* Entries Show Work */}
                            <div>
                                <label>Show</label>
                                <select className="form-control" value={selectedOption} onChange={handleOptionChange}>
                                    {options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <label>entries</label>
                            </div>
                            {/* Entries Show Work */}

                            {/* Searching Work */}
                            <div>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                    <button className="themeBtn invert">
                                        <i className="fas fa-search"/>
                                    </button>
                                </form>
                            </div>
                            {/* Searching Work */}

                        </div>
                        <table className="table table-responsive-lg">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="text-left">Pray For</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Requester</th>
                                <th scope="col">Contact Info</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {displayedPrayers.length > 0 ? (
                                displayedPrayers.map((prayer) => (
                                    <tr key={prayer.id}>
                                        <td>
                                            <div className="d-flex align-items-center">{prayer.name}</div>
                                        </td>
                                        <td>{prayer.formattedDateTo}</td>
                                        <td>{prayer.formattedDateFrom}</td>
                                        {/*<td>{prayer.start_date}</td>
                                        <td>{prayer.end_date}</td>*/}

                                        {/* User Data Retrieve */}
                                        <td>{prayer.user ? `${prayer.user.first_name} ${prayer.user.last_name}` : 'N/A'}</td>
                                        <td>{prayer.user ? prayer.user.phone : 'N/A'}</td>
                                        {/* User Data Retrieve */}

                                        <td>
                                            <a href="#" onClick={() => openModal(prayer.id)} className="themeBtn">
                                                Details
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td>
                                        <p>Prayer requests are not available at this moment.</p>
                                    </td>
                                </tr>
                            )}
                            </tbody>

                        </table>
                        {/* Pagination Work Start */}
                        <div className="showingNavigation">
                            <span>
                              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, prayers.length)} of {prayers.length} Entries
                            </span>
                            <div className="pagination">
                                {/* Render pagination links */}
                                {Array.from({length: Math.ceil(prayers.length / itemsPerPage)}).map((_, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={currentPage === index + 1 ? 'active' : ''}
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </a>
                                ))}
                            </div>
                        </div>
                        {/* Pagination Work End */}
                    </div>
                </div>
            </section>

            {/* Modal Work Start */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="customModal"
            >
                {selectedPrayer && (
                    <div>
                        <h2>Prayer Details</h2>
                        <p><span className="text-dark">Description:</span> `{selectedPrayer.description}`</p>
                        {/* Display other prayer details as needed */}
                    </div>
                )}
            </Modal>
            {/* Modal Work End */}

        </Layout>
    );
}

export default RequestPrayer;
