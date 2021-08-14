import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function Resume() {

    return (
        <Container>
            <Router>
                <Row>
                    <h1> My Resume</h1>
                </Row>

                <Row>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h1>&#123;</h1>
                            </Card.Title>

                            <Card.Img variant="top" />

                            <Card.Text>
                                <h4>Pablo De La Cruz</h4>
                                <h5>Email: pablodlc@gmail.com | Tucson, Az., 85705</h5>
                                <h5>LinkedIn: pablodlc | GitHub: pablodlc</h5>
                                <br />
                                <h5>TECHNICAL SKILLS</h5>
                                <p>
                                    Languages: HTML5, CSS3, JavaScript ES6+, SQL, NoSQL
                                    <br />
                                    Applications: GitHub, MongoDB, MySQL
                                    <br />
                                    Tools: React, Express.js, Node.js, Handlebars, jQuery, Bootstrap
                                </p>
                                <hr />
                                <br />

                                <h5>PROFESSIONAL EXPERIENCE</h5>

                                <p>
                                    Alicat Scientific, Tucson, Az.
                                    <br />
                                    Technical Writer (March 2013 to present)
                                    <br />
                                    Write technical, instructional documentation primarily for use in Production, such as assembling, calibrating, casing, and inspecting Alicat’s devices.  Liaise with co-workers in all departments and at all levels to gather pertinent information for documentation.
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
                                            Non-Job Tract: Non-Jobs are builds that serve as components used in Alicat devices. This includes assembling proprietary valves, coiling bobbins with magnetic wire for use in valves, soldering a wide variety of communication cables, building BB9 communication boxes, and other such components not featured in the product line.
                                        </li>
                                        <li>
                                            Casing: able to case any Alicat device in less time than allotted, typically in half the expected time.
                                        </li>
                                    </ul>
                                </p>

                                <p>
                                    Law Office of Michael Baldwin, PLC, Tucson, Az.
                                    <br />
                                    Paralegal (November 2011 to February 2013)
                                    <br />
                                    Acted as receptionist, file clerk, and paralegal for Michael Baldwin, PLC, a three-person company at the time.  Further duties included writing legal pleadings in bankruptcy cases, handling mailings of all pleadings for persons-of-interest in the various cases, helping the attorney by running errands or meeting clients to obtain documents, and various personal assistant to the attorney duties.
                                    <p />
                                </p>

                                <p>
                                    Arizona Bookstore, Tucson, Az.
                                    <br />
                                    Merchandise Manager (August 2008 to November 2011)
                                    <br />
                                    Acted as receptionist, file clerk, and paralegal for Michael Baldwin, PLC, a three-person company at the time.  Further duties included writing legal pleadings in bankruptcy cases, handling mailings of all pleadings for persons-of-interest in the various cases, helping the attorney by running errands or meeting clients to obtain documents, and various personal assistant to the attorney duties.
                                </p>
                                <hr />
                                <br />

                                <h5>EDUCATION</h5>

                                <p>
                                    The University of Arizona Continuing & Professional Education, Tucson, Az.
                                    <br />
                                    Full-Stack Web Development Certification (not yet obtained)
                                    <br />
                                    Expected graduation date: 8/19/2021
                                </p>

                                <p>
                                    Pima Community College, Tucson, Az.
                                    <br />
                                    General Studies, Theater, Humanities
                                    <br />
                                    No degree obtained
                                </p>

                                <p>
                                    Buena High School, Sierra Vista, Az.
                                    <br />
                                    General Studies, National Art Honors Society, Thespian Society Honor Bar Member
                                    <br />
                                    High School Diploma
                                </p>
                                <br />

                                <h6>References available upon request.</h6>

                                <br />
                                <h1>&#125;</h1>
                            </Card.Text>

                        </Card.Body>
                    </Card>


                </Row>

            </Router>
        </Container >
    );
}

export default Resume