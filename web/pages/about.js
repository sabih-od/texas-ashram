import React from 'react';
import Layout from "../components/Layout";
import Image from "next/image";
import aboutMain from "../images/missionimg2.jpg";
import AboutImg from "../images/imgpsh_fullsize_anim.png";
import shape3 from "../images/young adult.jpg";
import Link from "next/link";
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import iconImg from "../images/icon/pdf-icon.png";
import familiesImg from "../images/familiesimg.webp";
import famImg from "../images/fam.png";
import famImg2 from "../images/fam2.png";
import famImg3 from "../images/fam3.png";
import speaker from "../images/Executive-Director.png";
import speaker1 from "../images/speaker1.png";
import speaker2 from "../images/speaker2.png";
import andy from "../images/dr.andy.jpg";

function AboutUs(props) {
    return (
        <Layout>
            <div className="innertitle">
                <section className="innerHeading">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </section>
            </div>
            <section className="inner-about-section innerPage">
                <div className="container">
                    <h1 className="heading text-center mt-4 mb-3">Welcome to the Texas Christian Ashram</h1>
                    {/*<h1 className="heading text-center mt-4 mb-3">What we Believe</h1>*/}
                    <div className="row align-items-center mx-5 text-center">
                        <div className="col-12">
                            <figure className="margin-top">
                                <Image src={aboutMain} className="img-fluid" alt="missionImg 2"/>
                            </figure>
                            <div className="py-4 pr-5">
                                <h2 className=" heading text-secondary">What is the Texas Christian Ashram</h2>
                                {/*<h2 className="text-secondary">What is a Christian Ashram?</h2>*/}
                                <p className="text">It is a family Christian experience (like youth camp, but for the
                                    whole family) held in a retreat setting for the sole purpose of providing a
                                    Christian atmosphere for the whole family. Whether you are an infant or a young
                                    adult or a wiser young adult, a full day’s schedule is planned for all ages that is
                                    full of fun, fellowship, and Jesus. The camp is currently hosted at Scottsville Camp
                                    and Conference Center in Marshall, TX. Link:
                                    <Link href="https://www.scottsvillecamp.com" target="_blank" className="text-dark">
                                        https://www.scottsvillecamp.com
                                    </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up">
                            <div className="videoBox">
                                <Image src={AboutImg} alt={AboutImg}/>
                                <a href="https://vimeo.com/95424842" data-fancybox="" className="btn"><i
                                    className="far fa-play"/></a>

                            </div>
                            {/*<div className="my-5">*/}
                            {/*    <h6 className="subheading text-primary">Welcome to the</h6>*/}
                            {/*    <h1 className="heading">Texas Christian Ashram</h1>*/}
                            {/*    <p>For more than 80 years, individuals and families have attended Christian Ashram*/}
                            {/*        retreats all around the world. The purpose of the retreat is to focus on JESUS, find*/}
                            {/*        rest and recreation, listen to encouraging teaching, and find meaningful*/}
                            {/*        friendships.</p>*/}
                            {/*    <p>We recognize that each person is at a different place in life. One thing we have in*/}
                            {/*        common, is that life is tough sometimes. Sometimes we just need to unplug from all*/}
                            {/*        of life’s stressors and proactively focus on Jesus to recharge.</p>*/}
                            {/*    <p>Our sole purpose is to provide a Christian Atmosphere for all ages. We are another*/}
                            {/*        tool in God’s toolbox that He can use to help strengthen the body of Christ and us*/}
                            {/*        as Christ Followers.</p>*/}
                            {/*    <p>Our camp is designed to provide a well-rounded experience, with inspiring teaching,*/}
                            {/*        uplifting worship, and engaging fellowship for all age groups. You'll have the*/}
                            {/*        opportunity to participate in small group discussions, reflective times of prayer,*/}
                            {/*        and fun recreational activities.</p>*/}
                            {/*</div>*/}
                            <div className="my-5">
                                <h6 className="subheading text-primary">Welcome to the</h6>
                                <h1 className="heading">Texas Christian Ashram</h1>
                                <p> For more than 80 years, individuals and families have attended Christian Ashram retreats all around the world.
                                    The purpose of the retreat is to focus on JESUS, find rest and recreation, listen to encouraging teaching, and find meaningful friendships.</p>

                                <p>We recognize that each person is at a different place in life. One thing we have in common, is that life is tough sometimes.
                                    Sometimes we just need to unplug from all of life’s stressors and proactively focus on Jesus to recharge.</p>

                                <p>Our sole purpose is to be another tool in God’s tool box that he can use to help strengthen the body of Christ and us as Christ Followers.</p>

                            </div>
                        </div>


                        {/*<div className="col-md-6 px-5" data-aos="fade-left">
                            <h6 className="subheading text-primary">Welcome to the</h6>
                            <h1 className="heading">Texas Christian Ashram</h1>
                            <p>For more than 80 years, individuals and families have attended Christian Ashram retreats
                                all around the world. The purpose of the retreat is to focus on JESUS, find rest and
                                recreation, listen to encouraging teaching, and find meaningful friendships.</p>
                            <p>We recognize that each person is at a different place in life. One thing we have in
                                common, is that life is tough sometimes. Sometimes we just need to unplug from all of
                                life’s stressors and proactively focus on Jesus to recharge.</p>
                            <p>Our sole purpose is to be another tool in God’s tool box that he can use to help
                                strengthen the body of Christ and us as Christ Followers.</p>
                            <a href="" className="themeBtn invert">Read More</a>
                        </div>*/}
                    </div>
                </div>
            </section>

            {/*<section className="mission-section" id="ourMission">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mx-auto text-center">
                            <h6 className="subheading text-primary" data-aos="fade-up">Our Mission</h6>
                            <h1 className="heading" data-aos="fade-up">What is a Christian Ashram?</h1>
                            <div data-aos="fade-up">
                                <p>It is a Christ focused experience held in a retreat setting for the purpose of
                                    spiritual
                                    growth which makes God more real in daily living. This provides a break from the
                                    hustle
                                    and bustle of everyday life and a move toward the grace and presence of Jesus
                                    Christ.
                                </p>
                                <p>This is where you can experience a transformative retreat for your soul. Our
                                    organization
                                    has been serving individuals and families for over 80 years, providing a place of
                                    rest,
                                    recreation, and meaningful fellowship.</p>
                                <p>What can I expect at a Christian Ashram?</p>
                            </div>

                            <Swiper className='missionSlider my-5 pb-5'
                                    slidesPerView={1}
                                    autoPlay
                                    loop
                            >
                                <SwiperSlide>
                                    <Image src={missionImg1} alt={missionImg1}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg2} alt={missionImg2}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg3} alt={missionImg3}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg4} alt={missionImg4}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg5} alt={missionImg5}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg6} alt={missionImg6}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg7} alt={missionImg7}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg8} alt={missionImg8}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg9} alt={missionImg9}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg10} alt={missionImg10}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={missionImg11} alt={missionImg11}/>
                                </SwiperSlide>
                            </Swiper>
                            <a href="" className="themeBtn invert mt-4">Read More</a>
                        </div>
                    </div>
                </div>
            </section>*/}

            <section className="innerPage">
                <div className="container">
                    <div className="row align-items-center justify-content-center mx-5 mb-5">
                        <div className="col-md-7" data-aos="fade-up">
                            {/*<div className="col-md-7" data-aos="">*/}
                            <h6 className="subheading text-secondary">Texas Christian Ashram</h6>
                            <h1 className="heading">We Serve the Entire Family</h1>
                            <p>At the Texas Christian Ashram, there is a group for everyone in your family!</p>
                        </div>
                        <div className="col-md-1 text-center" data-aos='fade-bottom'>
                            <Link href="/events" className="newthemeBtn">
                                Events
                            </Link>
                            <a href="#" download="">
                                {/*<Image src={iconImg} width="70" alt="iconImg"/>*/}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-0">
                <div className="container">
                    <div className="row mx-4 align-items-end">
                        <div className="col-md-6" id="family">
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
                        <div className="col-md-6" id="adult">
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
                        <div className="col-md-6" id="youth">
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
                        <div className="col-md-6 pt-3" id="children">

                            <Image src={famImg3} className="img-fluid" style={{height:'408px'}} alt="famImg 3"/>

                        </div>
                        <div className="col-md-6 px-5 pt-3">
                            <h1 className="heading">Children's  Activities</h1>

                            {/*<h1 className="heading">Children's Activities</h1>*/}
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
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                        <div className="col-md-6" id="children">
                            <Image src={shape3} className="img-fluid" alt="shape3"/>
                        </div>
                        <div className="col-md-6 px-5" id="young">
                            <h1 className="heading">Young Adults Activities</h1>
                            <p className="mb-0 text">The youth, middle school through high school, have their own
                                leaders to guide them through the week. They will spend some of their time listening to
                                the Bible teacher and/or Evangelist and some of the evening time enjoying the family
                                singing.Our focus in all programs is the life we can experience as part of the Kingdom
                                of God through his son, Jesus Christ. Plenty of practice is provided as children learn
                                how to experience the love of God and how to love God through Biblical studies, worship,
                                arts, music, and recreation.</p>
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
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>

            </section>
            <section className="speakerMain pb-0">
                <div className="container">
                    <h1 className="heading text-center">Speaker</h1>
                    <div className="row align-items-center mx-4">
                        <div className="col-md-9 px-5">

                            {/*<h6 className="subheading text-secondary">Speaker</h6>*/}
                            <h1 className="heading">Dr. Andy Hurst</h1>
                            {/*<p className="text">Andy Hurst was born in Houston, Texas, and is the third generation of*/}
                            {/*    Methodist ministers in his family. Growing up in a Methodist parsonage the call to*/}
                            {/*    ministry came early, and at age 13, Robert gave his life to Christ. He says that his*/}
                            {/*    life was shaped by his father's preaching and his mother's knowledge of the great hymns*/}
                            {/*    of the faith.</p>*/}
                            {/*<p className="text">Bob is married to Deliliah "Dee” Hayes and is the proud father of three*/}
                            {/*    grown children: Joya, Robert III, and Ryan. After retiring from his service as a United*/}
                            {/*    Methodist bishop he joined the staff of The Woodlands Methodist Church and was recently*/}
                            {/*    elected to serve the United Christian Ashram ministry as a member of The Four, the*/}
                            {/*    governing staff of the UCA that was set up by E. Stanley Jones when the ministry began.*/}
                            {/*    ​</p>*/}
                            {/*<p className="text">Bob completed his undergraduate studies at Huston-Tillotson College in*/}
                            {/*    Austin, Texas, majoring in English, and did his seminary graduate work at Perkins School*/}
                            {/*    of Theology, SMU, Dallas, Texas. He later completed his D.Min. at Drew University in*/}
                            {/*    Madison, New Jersey.</p>*/}
                            {/*<p className="text">Bob is known as one of the best communicators in the faith and we are*/}
                            {/*    excited to have him back this summer at the Texas Christian Ashram.</p>*/}
                        </div>
                        <div className="col-md-3">
                            <Image src={andy} className="img-fluid mt-5" alt="andy" />
                        </div>
                    </div>
                    <div className="row mx-4">
                        <div className="col-md-9 px-5">
                            <h6 className="subheading text-secondary">Evangelist</h6>
                            <h1 className="heading">Bob Hayes</h1>
                            <p className="text mt-5">Bob Hayes was born in Houston, Texas, and is the third generation of
                                Methodist ministers in his family. Growing up in a Methodist parsonage the call to
                                ministry came early, and at age 13, Robert gave his life to Christ. He says that his
                                life was shaped by his father's preaching and his mother's knowledge of the great hymns
                                of the faith.</p>
                            <p className="text">Bob is married to Deliliah "Dee” Hayes and is the proud father of three
                                grown children: Joya, Robert III, and Ryan. After retiring from his service as a United
                                Methodist bishop he joined the staff of The Woodlands Methodist Church and was recently
                                elected to serve the United Christian Ashram ministry as a member of The Four, the
                                governing staff of the UCA that was set up by E. Stanley Jones when the ministry began.
                                ​</p>
                            <p className="text">Bob completed his undergraduate studies at Huston-Tillotson College in
                                Austin, Texas, majoring in English, and did his seminary graduate work at Perkins School
                                of Theology, SMU, Dallas, Texas. He later completed his D.Min. at Drew University in
                                Madison, New Jersey.</p>
                            <p className="text">Bob is known as one of the best communicators in the faith and we are
                                excited to have him back this summer at the Texas Christian Ashram.</p>
                        </div>
                        <div className="col-md-3 mt-5">
                            <Image src={speaker1} className="img-fluid mt-5 w-100" alt="speaker"/>
                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>
                    </div>
                </div>

            </section>



            <section className="inner-about-section innerPage">
                <div className="container">
                    <h1 className="heading text-center">Staff</h1>
                    <h2 className="heading text-center mt-4 mb-3">Executive Director</h2>
                    <div className="row mx-4">
                        <div className="col-md-9 px-5">
                            {/*<h6 className="subheading text-secondary">Evangelist</h6>*/}
                            <h1 className="heading">Joseph (J.T.) Adkins</h1>


                            <p className="text">Joseph (J.T.) Adkins is the Executive Director of the Texas Christian Ashram
                                (TCA). He has been involved with TCA since 1983. J.T. met Jesus for the first time at TCA in
                                1996 while a member of the youth program. TCA has been instrumental in his development as a
                                Christian and a leader. He now serves as a board member of the United Christian Ashrams
                                International and the Chair of Marketing and Communications.
                            </p>
                            <p className="text">Ministry for me began in 1999 when I left Louisiana at 19 and joined a dramatic
                                ministry that took me all around the nation and Canada spreading the good news of Jesus Christ.
                                The ministry focused on Youth and family restoration, I was able to see multiple generations restored.
                                Ever since, I have been heavily involved in local church ministry, small group leadership, youth ministry,
                                traveling evangelism, president of a non-profit, and in leadership at the Texas Christian Ashram. My true
                                passion is for the love of Jesus to be made famous and the Ashram is a perfect place for that to happen.
                                This year, I am looking forward to serving you. God Bless You! Jesus is Lord!</p>

                        </div>
                        <div className="col-md-3 mt-5">
                            <Image src={speaker} className="img-fluid mt-5" style={{height:'350px; object-fit:cover'}} alt="speaker"/>
                        </div>

                        <div className="col-md-12 px-5">
                            <h1 className="heading text-center mt-4 mb-3">Assistant Director</h1>
                            <h2 className="heading">Robert Gay</h2>
                            <h2 className="heading">Mindy Florian</h2>

                        </div>
                        <div className="col-12">
                            <hr/>
                        </div>



                        {/*<div className="col-md-9 px-5 mt-5">*/}
                        {/*    <h6 className="subheading text-secondary">Bible Teacher</h6>*/}
                        {/*    <h1 className="heading">Brian Shimer</h1>*/}
                        {/*    <p className="text">Brian Shimer became involved in the Christian Ashram movement first at*/}
                        {/*        the California Winter Ashram in February 1981.</p>*/}
                        {/*    <p className="text">The movement began to work on his life through the leadership of Mary*/}
                        {/*        Webster, who had traveled with Brother Stanley all over the world. Mary Webster was a*/}
                        {/*        marvel and wanted Brian and his fiancé to marry while at camp! "Love is too precious to*/}
                        {/*        wait," she said.​</p>*/}
                        {/*    <p className="text">Brian and Karen have been married for 39 years and have four grown*/}
                        {/*        daughters and five grandchildren. He has taught as a Bible Teacher and Evangelist at*/}
                        {/*        Christian Ashrams in the USA and Canada over the last 30 years, serves on the Ashram*/}
                        {/*        International Board, and has been director of the California Winter Ashram for two*/}
                        {/*        years.</p>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-3 mt-5">*/}
                        {/*    <br/>*/}
                        {/*    <Image src={speaker2} className="img-fluid mt-5" alt="speaker 2"/>*/}
                        {/*</div>*/}


                    </div>
                </div>
            </section>



            <section className="inner-about-section">
                <div className="container">
                    <h6 className="subheading text-secondary text-center">Texas Christian Ashram</h6>
                    <h1 className="heading text-center mt-4 mb-3">Safety</h1>
                    <div className="row mx-4">
                        <div className="col-md-12 px-5">
                            {/*<h6 className="subheading text-secondary">Evangelist</h6>*/}
                            {/*<h1 className="heading">Bob Hayes</h1>*/}
                            <p className="text">Safe sanctuary guidelines are practiced so parents and guardians can be
                                assured their children are safe and secure during scheduled class times. Since the
                                campgrounds are deep and wide, parents and guardians are responsible to supervise their
                                children to ensure everyone’s safety at all other times.</p>
                            <br/>
                            <p className="text">Nurses are present to assist anyone who needs them.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inner-about-section innerPage" id="schedule">
                <div className="container">
                    <h6 className="subheading text-secondary text-center">Texas Christian Ashram</h6>
                    <h1 className="heading text-center mt-4 mb-3">Schedule On It</h1>
                    <div className="row mx-4">
                        <div className="col-md-9 px-5">
                            <h6 className="subheading text-secondary">Evangelist</h6>
                            <h1 className="heading">Bob Hayes</h1>
                            <p className="text mt-5">Bob Hayes was born in Houston, Texas, and is the third generation of
                                Methodist ministers in his family. Growing up in a Methodist parsonage the call to
                                ministry came early, and at age 13, Robert gave his life to Christ. He says that his
                                life was shaped by his father's preaching and his mother's knowledge of the great hymns
                                of the faith.</p>
                            <p className="text">Bob is married to Deliliah "Dee” Hayes and is the proud father of three
                                grown children: Joya, Robert III, and Ryan. After retiring from his service as a United
                                Methodist bishop he joined the staff of The Woodlands Methodist Church and was recently
                                elected to serve the United Christian Ashram ministry as a member of The Four, the
                                governing staff of the UCA that was set up by E. Stanley Jones when the ministry began.
                                ​</p>
                            <p className="text">Bob completed his undergraduate studies at Huston-Tillotson College in
                                Austin, Texas, majoring in English, and did his seminary graduate work at Perkins School
                                of Theology, SMU, Dallas, Texas. He later completed his D.Min. at Drew University in
                                Madison, New Jersey.</p>
                            <p className="text">Bob is known as one of the best communicators in the faith and we are
                                excited to have him back this summer at the Texas Christian Ashram.</p>
                        </div>
                        <div className="col-md-3 mt-5">
                            <Image src={speaker1} className="img-fluid mt-5" alt="speaker"/>
                        </div>


                        {/*<div className="col-12">*/}
                        {/*    <hr/>*/}
                        {/*</div>*/}

                        {/*<div className="col-md-12 px-5 mt-5">*/}
                        {/*    <h6 className="subheading text-secondary">Bible Teacher</h6>*/}
                        {/*    <h1 className="heading">Brian Shimer</h1>*/}
                        {/*    <p className="text">Brian Shimer became involved in the Christian Ashram movement first at*/}
                        {/*        the California Winter Ashram in February 1981.</p>*/}
                        {/*    <p className="text">The movement began to work on his life through the leadership of Mary*/}
                        {/*        Webster, who had traveled with Brother Stanley all over the world. Mary Webster was a*/}
                        {/*        marvel and wanted Brian and his fiancé to marry while at camp! "Love is too precious to*/}
                        {/*        wait," she said.​</p>*/}
                        {/*    <p className="text">Brian and Karen have been married for 39 years and have four grown*/}
                        {/*        daughters and five grandchildren. He has taught as a Bible Teacher and Evangelist at*/}
                        {/*        Christian Ashrams in the USA and Canada over the last 30 years, serves on the Ashram*/}
                        {/*        International Board, and has been director of the California Winter Ashram for two*/}
                        {/*        years.</p>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-3 mt-5">*/}
                        {/*    <br/>*/}
                        {/*    <Image src={speaker2} className="img-fluid mt-5" alt="speaker 2"/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default AboutUs;
