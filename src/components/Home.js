import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import mug from '../assets/images/mug.jpg';

import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    flexRow: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px'
    },
    imgCol: {
        display: 'flex',
        justifyContent: 'center',
    },
    mugImgs: {
        display: 'flex',
        padding: '0 10px'
    },
    mug: {
        display: 'flex',
        maxWidth: '300px',
        maxHeight: '300px',
        borderRadius: '50%',
        marginBottom: '12px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
    },
    card: {
        borderRadius: '16px',
        backgroundColor: '#b1a296',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
    },
    bioText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '25px 25px 12px 25px',
        fontFamily: '"Montserrat", sans- serif',
        color: '#2f4f4f',
        textAlign: 'justify',
        fontSize: '18px'
    },
});


function Home() {
    const classes = useStyles();

    return (
        <Container id="homeContainer">

            <Row>

                <Col lg="5" md="9" className={classes.imgCol} id="imgCol">

                    <div className="align-self-start p-1">
                        <div className={classes.mugImgs} id="homeMug">
                            <img src={mug} className={classes.mug} alt="me as Jekyll and Hyde" />
                        </div>
                    </div>
                </Col>

                <Col lg="5" md="9" className={classes.cardCol} id="cardCol">

                    <Card className={classes.card}>
                        <div className={classes.bioText}>
                            <p>
                                Hello World! My name is Pablo and I'm a fledgling
                                programmer. I have a varied background; food service,
                                retail, social work, law, and currently I'm a technical
                                writer for a scientific instrument manufacturing company. Long ago I made a cookie-cutter website and thought it was great fun. Somehow it didn't occur to me until recently to pursue it professionally.
                            </p>

                            <p>
                                I'm full-stack web developer able to make a polished, responsive webpage with HTML and CSS, powered by JavaScript, or a React app like this one. I can create relational databases with Sequelize or NoSql and make command-line applications for managing databases or automating an output, like a README generator.
                            </p>

                            <p>
                                When I'm AFK, my favorite pastime is pool and I play a decent game of 9-ball. I love spending time with my girlfriend, my mom, family, and friends. I'm always up for a board game night and have spent my entire life waiting for that next Zelda game.
                            </p>
                        </div>
                    </Card>

                </Col>


            </Row >
        </Container >
    )
}

export default Home