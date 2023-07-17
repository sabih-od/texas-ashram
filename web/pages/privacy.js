import React from 'react';
import Layout from "../components/Layout";
import Link from "next/link";

function PrivacyPolicy(props) {
    return (
        <Layout>
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Privacy Policy</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                        </ol>
                    </nav>
                </section>
            </div>
            <section className="inner-about-section innerPage">
                <div className="container">
                    <h1 className="heading text-center mt-4 mb-3">Privacy Policy for Texas Christian Ashram</h1>
                    <div className="row align-items-center mx-5">
                        <div className="col-12">
                            <div className="py-4 pr-5">
                                <p className="text">This Privacy Policy ("Policy") describes how Texas Christian Ashram
                                    ("we," "us," or "our") collects, uses, and protects the personal information you
                                    provide or that is generated when you visit the Texas Christian Ashram website
                                    ("Website"). Please read this Policy carefully to understand our practices regarding
                                    your personal information.</p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Information We Collect</h2>
                                <h4 className="text-dark">Personal Information</h4>
                                <p className="text">When you visit the Website, we may collect certain personal
                                    information from you, such as your name, email address, phone number, and other
                                    contact details. We may also collect demographic information and preferences that
                                    you voluntarily provide through forms or surveys on the Website.</p>
                                <h4 className="text-dark">Usage Information</h4>
                                <p className="text">We may automatically collect information about how you interact with
                                    the Website, including your IP address, browser type, referring/exit pages,
                                    date/time stamps, and clickstream data. This information helps us analyze trends,
                                    administer the Website, track users' movements, and gather demographic information
                                    for aggregate use.</p>
                                <h4 className="text-dark">Cookies and Similar Technologies</h4>
                                <p className="text">We use cookies, web beacons, and similar technologies to enhance
                                    your experience on the Website. These technologies allow us to recognize your
                                    device, customize your browsing experience, and collect information about how you
                                    use the Website. You may modify your browser settings to refuse cookies or alert you
                                    when cookies are being sent, but this may affect certain functionality of the
                                    Website.</p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Use of Information</h2>
                                <h4 className="text-dark">Providing and Improving the Website</h4>
                                <p className="text">We use the collected information to operate, maintain, and enhance
                                    the functionality of the Website. This includes personalizing your user experience,
                                    providing customer support, and improving the overall quality and features of the
                                    Website.
                                </p>
                                <h4 className="text-dark">Communication</h4>
                                <p className="text">If you provide us with your contact information, we may use it to
                                    communicate with you, respond to your inquiries, and provide important updates about
                                    Texas Christian Ashram activities and events. You can opt out of receiving
                                    promotional emails by following the unsubscribe instructions included in the emails.
                                </p>
                                <h4 className="text-dark">Aggregate Data</h4>
                                <p className="text">We may aggregate and anonymize the collected information to create
                                    statistical or demographic data for various purposes, such as analyzing website
                                    usage trends, conducting research, and improving our services. This aggregated data
                                    does not personally identify you.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Information Sharing</h2>
                                <p className="text">We do not sell, trade, or rent your personal information to third
                                    parties. However, we may share your information with trusted third-party service
                                    providers who assist us in operating the Website and delivering our services. These
                                    service providers are bound by confidentiality obligations and are only permitted to
                                    use your information for the purposes specified by us.<br/>
                                    We may also disclose your information if required by law, in response to a valid
                                    legal request, or to protect our rights, property, or safety, as well as the rights,
                                    property, or safety of others.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Data Security</h2>
                                <p className="text">We take reasonable measures to protect the security and
                                    confidentiality of your personal information. However, please be aware that no
                                    method of transmission or storage is 100% secure. We cannot guarantee the absolute
                                    security of your information.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Third-Party Links</h2>
                                <p className="text">The Website may contain links to third-party websites or services
                                    that are not owned or controlled by us. This Privacy Policy applies solely to the
                                    Website. We are not responsible for the privacy practices of these third-party
                                    websites or services. We encourage you to review the privacy policies of those third
                                    parties before providing any personal information.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Children's Privacy</h2>
                                <p className="text">The Website is not intended for use by individuals under the age of
                                    18. We do not knowingly collect personal information from children. If we become
                                    aware that we have inadvertently collected personal information from a child, we
                                    will promptly delete such information from our records.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Changes to the Privacy Policy</h2>
                                <p className="text">We may update this Privacy Policy from time to time. Any changes
                                    will be posted on the Website, and the revised Policy will indicate the date it was
                                    last updated. By continuing to use the Website after the changes take effect, you
                                    acknowledge and agree to the updated Privacy Policy.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Contact Us</h2>
                                <p className="text">If you have any questions, concerns, or requests regarding this
                                    Privacy Policy or the handling of your personal information, please contact us. We
                                    will make reasonable efforts to address your inquiry in a timely manner.<br/>
                                    <b>By visiting the Texas Christian Ashram website, you acknowledge that you have
                                        read, understood, and agreed to the terms and practices described in this
                                        Privacy Policy.</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default PrivacyPolicy;