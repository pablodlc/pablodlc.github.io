import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/styles';
import ContactForm from './pageEls/ContactForm.js';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import Mug from '../assets/images/mug.jpg';
import beardo from '../assets/images/beardo.jpg';

const useStyles = makeStyles({
    flexCenter: {
        display: 'flex',
        alignItems: 'space-evenly',
    },
    imgCol: {
        display: 'flex',
        justifyContent: 'center',
    },
    cardCol: {
        display: 'flex',
        justifyContent: 'center'
    },
    mug: {
        display: 'flex',
        maxWidth: '300px', maxHeight: '300px',
        borderRadius: '50%',
        marginBottom: '12px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
    },
    card: {
        padding: '12px 24px 0 24px',
        borderRadius: '16px',
        backgroundColor: '#b1a296',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: '36px',
        fontFamily: '"Bangers", cursive',
        color: '#7395ae',
        textAlign: 'center',
        padding: '17px 0 0',
        textShadow: '0 0 8px rgba(0, 0, 0, 0.8)'
    },
    monts: {
        fontFamily: '"Montserrat", sans- serif',
        color: '#2f4f4f',
        fontSize: '20px'
    },

});

function Contact() {

    const ContForm = ContactForm;
    const classes = useStyles();

    return (

        <Container>
            <Row>

                <Col lg="5" md="9" className={classes.imgCol} id="imgCol">
                    <div >
                        <img src={Mug} className={classes.mug} alt="Me as Jekyll and Hyde" />
                    </div>
                </Col>

                <Col lg="5" md="9" className={classes.cardCol} id="cardCol">
                    <Card className={classes.card}>
                        <Card.Title>
                            <h1 className={classes.h1}>Contact Me</h1>
                        </Card.Title>

                        <div className={classes.monts}>
                            <p>
                                Any questions questions for me or comments about my work?
                                <br />
                                Do you want to pay me to do this for you?
                                <br />
                                Need a friend?
                                <br />
                                Visit my profiles and say hi using the links below!
                            </p>
                        </div>
                        <div className='text-center'>

                            <a href="https://github.com/pablodlc" target="blank">
                                <GitHubIcon className={classes.item} fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                            </a>

                            <a href="https://www.linkedin.com/in/pablodlc" target="blank">
                                <LinkedInIcon className={classes.item} fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                            </a>

                            <a href="mailto://pablodlc@gmail.com" target="blank">
                                <EmailIcon className={classes.item} fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                            </a>

                        </div>
                    </Card>
                </Col>
            </Row>



        </Container>

    )
}


export default Contact