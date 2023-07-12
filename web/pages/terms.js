import React from 'react';
import Layout from "../components/Layout";
import Link from "next/link";

function TermsAndCondition(props) {
    return (
        <Layout>
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Terms And Conditions</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Terms And Conditions</li>
                        </ol>
                    </nav>
                </section>
            </div>
            <section className="inner-about-section innerPage">
                <div className="container">
                    <h1 className="heading text-center mt-4 mb-3">Terms and Conditions for Texas Christian Ashram</h1>
                    <div className="row align-items-center mx-5">
                        <div className="col-12">
                            <div className="py-4 pr-5">
                                {/*<h2 className="text-secondary">What is a Christian Ashram?</h2>*/}
                                <p className="text">These terms and conditions ("Terms") govern your use of the Texas
                                    Christian Ashram website ("Website") and the services provided by Texas Christian
                                    Ashram ("we," "us," or "our"). By accessing or using the Website, you agree to be
                                    bound by these Terms. If you do not agree to these Terms, you may not use the
                                    Website.</p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Website Usage</h2>
                                <p className="text">These terms and conditions ("Terms") govern your use of the Texas
                                    Christian Ashram website ("Website") and the services provided by Texas Christian
                                    Ashram ("we," "us," or "our"). By accessing or using the Website, you agree to be
                                    bound by these Terms. If you do not agree to these Terms, you may not use the
                                    Website.</p>
                                <h4 className="text-dark">Eligibility</h4>
                                <p className="text">You must be at least 18 years old to use the Website. By using the
                                    Website, you represent and warrant that you are at least 18 years old.</p>
                                <h4 className="text-dark">Use of Content</h4>
                                <p className="text">All content on the Website, including text, graphics, images, logos,
                                    and videos, is the intellectual property of Texas Christian Ashram and is protected
                                    by applicable intellectual property laws. You may not modify, reproduce, distribute,
                                    or create derivative works based on any content from the Website without our prior
                                    written consent.</p>
                                <h4 className="text-dark">Prohibited Activities</h4>
                                <h5 className="text-dark">You agree not to engage in any of the following activities
                                    while using the Website:</h5>
                                <p className="text">
                                    <span>a) Violating any applicable laws or regulations;</span><br/>
                                    <span>b) Impersonating any person or entity;</span><br/>
                                    <span>c) Interfering with or disrupting the Website's functionality;</span><br/>
                                    <span>d) Uploading or transmitting any viruses, malware, or other harmful code;</span><br/>
                                    <span>e) Collecting or harvesting any personally identifiable information from other users
                                    of the Website;</span><br/>
                                    <span>f) Using the Website for any illegal or unauthorized purpose;</span><br/>
                                    <span>g) Posting or transmitting any content that is unlawful, defamatory, or infringing
                                    upon the rights of others.</span>
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Third-Party Links</h2>
                                <p className="text">The Website may contain links to third-party websites or services
                                    that are not owned or controlled by us. We are not responsible for the content,
                                    privacy practices, or availability of those third-party websites or services. We
                                    encourage you to review the terms and policies of those third parties before
                                    interacting with them.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Limitation of Liability</h2>
                                <p className="text">To the maximum extent permitted by law, we shall not be liable for
                                    any direct, indirect, incidental, consequential, or punitive damages arising out of
                                    or in connection with your use of the Website. We make no warranties or
                                    representations, express or implied, regarding the accuracy, completeness, or
                                    reliability of the content on the Website.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Indemnification</h2>
                                <p className="text">You agree to indemnify and hold harmless Texas Christian Ashram, its
                                    affiliates, and their respective directors, officers, employees, and agents from and
                                    against any claims, liabilities, damages, losses, costs, or expenses, including
                                    reasonable attorneys' fees, arising out of or in connection with your use of the
                                    Website or any violation of these Terms.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Governing Law</h2>
                                <p className="text">These Terms shall be governed by and construed in accordance with
                                    the laws of the state of Texas, without regard to its conflict of laws principles.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Severability</h2>
                                <p className="text">If any provision of these Terms is found to be invalid, illegal, or
                                    unenforceable, the remaining provisions shall continue in full force and effect.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Changes to the Terms</h2>
                                <p className="text">We reserve the right to modify or update these Terms at any time
                                    without prior notice. The updated Terms will be posted on the Website, and your
                                    continued use of the Website after any such changes constitutes your acceptance of
                                    the modified Terms.
                                </p>
                            </div>
                            <div className="py-4 pr-5">
                                <h2 className="text-secondary">Contact Us</h2>
                                <p className="text">If you have any questions or concerns regarding these Terms, please
                                    contact us.<br/>
                                    By using the Texas Christian Ashram website, you acknowledge that you have read,
                                    understood, and agreed to these Terms and Conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default TermsAndCondition;