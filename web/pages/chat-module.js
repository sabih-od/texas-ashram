import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import chat1 from "../images/chat1.png";
import chat2 from "../images/chat2.png";
import chat3 from "../images/chat3.png";

function ChatModule(props) {
    return (
        <Layout>
            {/*<!-- Main Heading -->*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1 className="mb-5">Chat Module</h1>

                </section>
            </div>
            {/*<!-- !Main Heading -->*/}

            <section className="chatPage">
                <div className="container">
                    <div className="chat-card">
                        <div className="chat-header">
                            <h5>Group Chat</h5>
                            <div className="chat-options">
                                <a href="#"><i className="fas fa-search"/></a>
                                <a href="#"><i className="fas fa-user-plus"/></a>
                                <a href="#"><i className="fas fa-ellipsis-h"/></a>
                            </div>
                        </div>
                        <div className="chat-body">
                            <div className="chat-panel">
                                <div className="chatSec">
                                    <div className="row">
                                        <div className="tme-cht">
                                            <div className="chat-bubble chat-bubble--left">
                                                <Image src={chat1} className="img-fluid" alt="chat 1"/>
                                                <div className="mesgHfs">
                                                    <h5>kale Johson</h5>
                                                    <div className="mesg-bx">

                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available.
                                                        </p>

                                                    </div>
                                                    <span>10:56 am</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tme-cht">
                                            <div className="chat-bubble chat-bubble--left">
                                                <Image src={chat2} className="img-fluid" alt="chat 2"/>
                                                <div className="mesgHfs">
                                                    <h5>Evan Scon</h5>
                                                    <div className="mesg-bx">

                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available.
                                                        </p>

                                                    </div>
                                                    <span>10:56 am</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end">
                                        <div className="tme-cht bluebg">
                                            <div className="chat-bubble chat-bubble--left">
                                                <div className="mesgHfs">
                                                    <h5>John Smith</h5>
                                                    <div className="mesg-bx">

                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available.
                                                        </p>

                                                    </div>
                                                    <span>10:56 am</span>
                                                </div>
                                                <Image src={chat3} className="img-fluid" alt="chat 3"/>

                                            </div>
                                        </div>
                                        <div className="tme-cht bluebg">
                                            <div className="chat-bubble chat-bubble--left">
                                                <div className="mesgHfs">
                                                    <h5>Steave Doe</h5>
                                                    <div className="mesg-bx">

                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available.
                                                        </p>

                                                    </div>
                                                    <span>10:56 am</span>
                                                </div>
                                                <Image src={chat3} className="img-fluid" alt="chat 3"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-footer">
                            <input type="text" className="msg-box" placeholder="Write your message..."/>
                            <div className="msg-option">
                                <a href="#"><i className="far fa-grin"/></a>
                                <a href="#" className="paperPlane"><i className="fas fa-link"/>
                                    <input type="file"/></a>
                                <button className="btn sendbtn"><i className="fas fa-paper-plane"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ChatModule;