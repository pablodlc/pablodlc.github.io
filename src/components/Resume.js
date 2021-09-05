import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { makeStyles } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ResumePdf from '../assets/images/Pablo_De_La_Cruz_resume.pdf'
import Parchment from '../assets/images/parchment.jpg'

const useStyles = makeStyles({
    resumeDiv: {
        padding: '24px 0'
    },
    resumeCard: {
        width: '100%',
        margin: '0 auto',
    },
    card: {
        padding: '0 48px',
        borderRadius: '16px',
        backgroundImage: `url(${Parchment})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%",
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.8)'
    },
    resumeHeadline: {
        fontFamily: '"Bangers", cursive',
        fontSize: '48px',
        textAlign: 'center',
        color: '#5d5c61',
        textOutline: '1px black',
        textShadow: '0 0 20px #c3d5cf',
        padding: '10px'
    },
    cardTitle: {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
    },

    corbenShadow: {
        fontFamily: '"Corben", serif',
        fontWeight: 'bold',
        textShadow: '0 0 4px rgba(0, 0, 0, 0.8)'
    },
    corben: {
        fontFamily: '"Corben", serif',
        fontWeight: 'bold'
    },
    nobile: {
        fontFamily: '"Noblie", sans-serif'
    },
    bold: {
        fontWeight: 'bold'
    },
    justify: {
        textAlign: 'justify'
    },

})

function Resume() {
    const classes = useStyles();

    return (
        <Container>
            <Router>
                <Row>
                    <div className={classes.resumeHeadline}>
                        <h1>My Resume</h1>
                    </div>
                    <div className={classes.resumeDiv}>
                        <h3 className='text-center'>
                            <a href={ResumePdf} style={{ textDecoration: 'none', color: '#7395ae', fontFamily: '"Montserrat", sans- serif', }} download>Click here to download a .pdf copy of my resume.</a>
                        </h3>
                    </div>
                </Row>

                <Row>
                    <div className={classes.resumeCard}>
                        <Card className={classes.card}>
                            <Card.Body>
                                <Card.Title>
                                    <h1>&#123;</h1>
                                    <div class='text-center'>
                                        <h3 class={classes.corbenShadow}>Pablo De La Cruz</h3>
                                        <h5 class={classes.corben}>Tucson, Az. | Email: <a href='mailto://pablodlc@gmail.com' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#7395ae', fontFamily: '"Nobile", sans-serif', fontSize: '18px' }}>pablodlc@gmail.com</a>  </h5>
                                        <h5 class={classes.corben}>LinkedIn: <a href='https://www.linkedin.com/in/pablodlc' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#7395ae', fontFamily: '"Nobile"', fontSize: '18px' }}>pablodlc</a> | GitHub: <a href='https://github.com/pablodlc' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#7395ae', fontFamily: '"Nobile"', fontSize: '18px' }}>pablodlc</a></h5>
                                    </div>
                                </Card.Title>

                                <Card.Text>
                                    <div className={classes.justify}>
                                        <br />
                                        <h5 className={classes.corbenShadow}>TECHNICAL SKILLS</h5>
                                        <p className={classes.nobile}>
                                            MERN Stack developer familiar with the Agile development process and the MVC paradigm, and able to make Progressive Web Applications.

                                            <br />

                                            <ul>
                                                <li>
                                                    <span className={classes.bold}>Front End:</span> React, HTML5, CSS3, JavaScript ES6+, jQuery and API/AJAX requests, Flexbox, Bootstrap, React Bootstrap, Material-UI, Bulma, Handlebars, DOM manipulation
                                                </li>

                                                <li>
                                                    <span className={classes.bold}>Backend:</span> MySql2, Sequelize (ORM), NoSQL, able to make CLI applications.
                                                </li>

                                                <li>
                                                    <span className={classes.bold}>Software and Resources:</span> Visual Studio Code, Insomnia, Postman, GitHub, Heroku, MongoDB Atlas, Chrome Dev Tools, Google.
                                                </li>
                                            </ul>
                                        </p>
                                        <hr />


                                        <h5 className={classes.corbenShadow}>PROFESSIONAL EXPERIENCE</h5>

                                        <div className={classes.nobile}>
                                            <p>
                                                <div className={classes.bold}>
                                                    Alicat Scientific, Tucson, Az.
                                                    <br />
                                                    Technical Writer (March 2013 to present)
                                                    <br />
                                                </div>

                                                Write technical, instructional documentation primarily for use in Production, such as assembling, calibrating, casing, and inspecting Alicat’s devices.  Liaise with co-workers in all departments and at all levels to gather pertinent information for documentation.

                                                <br />

                                                Key Accomplishments:

                                                <ul>
                                                    <li>	Formerly the Calibration Supervisor, in charge of training and supervising calibration technicians. In order to attend the University of Arizona Coding Boot Camp, I stepped down from this role and resumed working as a Calibrator and was subsequently offered the role of Technical Writer.
                                                    </li>
                                                    <li>
                                                        Calibration: Trainer-level knowledge and experience of calibrating Alicat's mass-flow product line. I have calibrated approximately 20,000 Alicat devices, nearly twice that of the next highest outputting calibrator. One of less than a half-dozen Alicat employees with experience calibrating Alicat's BASIS line. Familiarity with basic pressure and liquid calibration fundamentals and procedures.
                                                    </li>
                                                    <li>
                                                        Quality Inspection: One of the approximately half-dozen onsite employees able to Inspect in the American facility nearing 100 employees; occasionally filling in such role as needed.
                                                    </li>
                                                    <li>
                                                        Head Assembly Calibrator: Head Assemblies are the pre-calibrated sensor/main board packages used in over 90% of Alicat's product line. Before calibration, I worked as the only full-time employee in Head Assembly at that time. I produced over 100 head assemblies daily, keeping units on hand in advance for a projected seven day safety stock.
                                                    </li>
                                                    <li>
                                                        RMA (Service): experience working with the Service department, where repairs and re-calibrations occur.
                                                    </li>
                                                    <li>
                                                        Assembly: able to assemble nearly all Alicat devices at the senior Production employee level. This includes screwing together stainless steel components and fine soldering skills to wire PCBs together, or change tiny components, like resistors, capacitors, and diodes.
                                                    </li>
                                                    <li>
                                                        Non-Job Tract: Non-Jobs are builds that serve as components used in Alicat devices. This includes assembling proprietary valves, coiling bobbins with magnetic wire for use in valves, soldering a wide variety of communication cables, building BB9 communication boxes, and other such parts used as components in the assembly of the product line.
                                                    </li>
                                                    <li>
                                                        Casing: able to case any Alicat device in less time than allotted, typically in half the expected time.
                                                    </li>
                                                </ul>
                                            </p>
                                            <p>
                                                <div className={classes.bold}>
                                                    Law Office of Michael Baldwin, PLC, Tucson, Az.
                                                    <br />
                                                    Paralegal (November 2011 to February 2013)
                                                </div>

                                                Acted as receptionist, file clerk, and paralegal for Michael Baldwin, PLC, a three-person company at the time.  Further duties included writing legal pleadings in bankruptcy cases, handling mailings of all pleadings for persons-of-interest in the various cases, helping the attorney by running errands or meeting clients to obtain documents, and various personal assistant to the attorney duties.
                                                <p />
                                            </p>

                                            <p>
                                                <div className={classes.bold}>
                                                    Arizona Bookstore, Tucson, Az.
                                                    <br />
                                                    Merchandise Manager (August 2008 to November 2011)
                                                </div>
                                                Acted as receptionist, file clerk, and paralegal for Michael Baldwin, PLC, a three-person company at the time.  Further duties included writing legal pleadings in bankruptcy cases, handling mailings of all pleadings for persons-of-interest in the various cases, helping the attorney by running errands or meeting clients to obtain documents, and various personal assistant to the attorney duties.
                                            </p>
                                        </div>
                                        <hr />

                                        <h5 className={classes.corbenShadow}>EDUCATION</h5>
                                        <div className={classes.nobile}>
                                            <p>
                                                <div className={classes.bold}>
                                                    The University of Arizona Continuing & Professional Education, Tucson, Az.
                                                </div>
                                                Full-Stack Web Development Certification
                                            </p>

                                            <p>
                                                <div className={classes.bold}>
                                                    Pima Community College, Tucson, Az.
                                                </div>
                                                General Studies, Theater, Humanities
                                                <br />
                                                No degree obtained
                                            </p>

                                            <p>
                                                <div className={classes.bold}>
                                                    Buena High School, Sierra Vista, Az.
                                                </div>
                                                General Studies, National Art Honors Society, Thespian Society: Honor Bar Member
                                                <br />
                                                High School Diploma
                                            </p>
                                        </div>

                                        <br />

                                        <div class="text-center">
                                            <h6 className={classes.corben}>References available upon request.</h6>
                                        </div>
                                    </div>
                                    <h1>&#125;</h1>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                </Row>

            </Router>
        </Container >
    );
}

export default Resume