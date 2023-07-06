import React from 'react';
import Image from "next/image";
import iconImg from "../images/icon/pdf-icon.png";
import familiesImg from "../images/familiesimg.webp";
import famImg from "../images/fam.png";
import famImg2 from "../images/fam2.png";
import famImg3 from "../images/fam3.png";
import Layout from "../components/Layout";

function Families(props) {
    return (
        <Layout >
            {/*!--Main Heading --*/}
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>Families</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">families</li>
                        </ol>
                    </nav>
                </section>
            </div>
            {/*!--Main Heading --*/}

            <section className="innerPage">
                <div className="container">
                    <div className="row align-items-center justify-content-center mx-5 mb-5">
                        <div className="col-md-7" data-aos="fade-up">
                        {/*<div className="col-md-7" data-aos="">*/}
                            <h6 className="subheading text-secondary">Texas Christian Ashram</h6>
                            <h1 className="heading">We Serve the Entire Family</h1>
                            <p>At the Texas Christian Ashram, there is a group for everyone in your family!</p>
                        </div>
                        <div className="col-md-1 text-center">
                            <a href="#" download="">
                                <Image src={iconImg} width="70" alt="iconImg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-0">
                <div className="container">
                    <div className="row mx-4 align-items-end">
                        <div className="col-md-6">
                            <Image src={familiesImg} className="img-fluid" alt="familiesIm g"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Family Activities</h1>
                            <p className="text">The Ashram is unique because it is a family camp. People come to
                                experience the love and acceptance they may not feel in the world. Perfect? No, we are
                                just people. But we are people who love God and seek to be more like Him. And, we love
                                each other. We have many opportunities to be with our own family as well as the big
                                Ashram family. </p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>We eat together (it seems we’re always eating!), sing together, work together, and pray
                                together. It is a time for families to enjoy each other and longtime friends to catch
                                up. It is a time to cry and laugh, to share and encourage, to be quiet and listen, and
                                to grow and increase our faith and walk with God. </p>
                            <p>The Prayer Vigil is open 24 hours during the entire week. It is a special place and
                                provides the foundation for God to work on behalf of His people. It is open to
                                everyone. </p>
                            <p>The work hour goes on all day! All ages help with the sewing and embroidering of blankets
                                and bibs, picking up trash, and singing in the choir or providing special music. Special
                                projects are provided as well.</p>
                            <p>And we couldn’t do without the volunteers that make things happen! We encourage every
                                adult over the age of 18 to volunteer one hour with one of the children or youth
                                programs. Sowing that one hour will bless those you help out and it will bless you even
                                more.</p>
                            <p>Oh, and don’t forget ice cream time! </p>
                            <p>Come and experience the renewal and refreshing that a few short days will bring to your
                                heart.</p>
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <Image src={famImg} className="img-fluid" alt="famIm g"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Adult Activities</h1>
                            <p className="text">While the children and youth are enjoying their age-specific activities,
                                adults have many opportunities to grow in their faith and in fellowship with others. New
                                speakers are selected each year to provide preaching and teaching that will inspire and
                                encourage us to be more like Jesus and more loving towards each other.</p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>The mornings include sessions with the Bible teacher and the Evangelist while also having
                                an opportunity to participate in discussion groups. Prayer groups convene in the
                                afternoon. These small groups are special times for many since relationships are built
                                as hearts open up to share needs. The evenings are filled with music, testimonies, and
                                more of the Word of God. </p>
                            <p>Many people describe the whole Ashram experience as truly experiencing the Kingdom of God
                                here on earth. Come and experience it for yourself!</p>
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <Image src={famImg2} className="img-fluid" alt="famImg 2"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Youth Activities</h1>
                            <p className="text">The youth, middle school through high school, have their own leaders to
                                guide them through the week. They will spend some of their time listening to the Bible
                                teacher and/or Evangelist and some of the evening time enjoying the family singing. </p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>During their special times together they will hear how to follow Jesus in a peer
                                pressured world. Kingdom principles are presented and opportunities for responding to
                                the Word are given through the discussion and prayer groups, afternoon games and fun,
                                and evening sessions. </p>
                            <p>High school-aged kids have their own “Gazebo” time after hours that allow them to open
                                their hearts, worship Jesus, and pray together. This program produces life changing
                                experiences and great memories of friends growing up together.</p>
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <Image src={famImg3} className="img-fluid" alt="famImg 3"/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h1 className="heading">Children's Activities</h1>
                            <p className="mb-0 text">Children of all ages are welcomed into the age appropriate programs
                                with teachers and volunteers that seek to share the love of Jesus. As a family camp, we
                                have infant and toddler, pre-school, and elementary programs. We want to come alongside
                                parents and guardians to support their efforts in introducing their children to Jesus
                                and His Kingdom. And to make sure they are well-cared for during the week!</p>
                        </div>
                        <div className="col-md-11 mx-auto mt-5 font_7">
                            <p>Our focus in all programs is the life we can experience as part of the Kingdom of God
                                through his son, Jesus Christ. Plenty of practice is provided as children learn how to
                                experience the love of God and how to love God through Biblical studies, worship, arts,
                                music, and recreation. </p>
                            <br/>
                            <p>Activities are provided during the mornings, afternoon prayer group time, and evening
                                sessions. We all enjoy singing and sharing together in the evening before children
                                are dismissed for their evening activities. Parents and guardians are encouraged to
                                spend time with their children during family times to talk about what they are
                                learning throughout the day. </p>
                            <p>Safe sanctuary guidelines are practiced so parents and guardians can be assured their
                                children are safe and secure during scheduled className times. Since the campgrounds
                                are deep and wide, parents and guardians are responsible to supervise their children
                                to ensure everyone’s safety at all other times.</p>
                            <p>Many adults that continue to come back year after year remember the fun and
                                fellowship they experienced here as children in this program.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Families;