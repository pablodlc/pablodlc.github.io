import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/styles';
import ContactForm from './pageEls/ContactForm.js';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import mug from '../assets/images/mug.jpg';
import beardo from '../assets/images/beardo.jpg';

const useStyles = makeStyles({
    container: {
        padding: '20px 35px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mug: {
        width: '300px',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
    },
    beardo: {
        width: '300px',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
        display: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99
    },
    directionRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'space-evenly',
    },
    columnCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

function Contact() {

    const classes = useStyles();

    return (

        <Container className={classes.container}>
            <Row>
                <div className={classes.directionRow}>
                    <div className={classes.mug}>
                        <img src={mug} alt="Me as Jekyll and Hyde"
                            onMouseOver={e => (e.currentTarget.src = { beardo })}
                        />
                    </div>

                    <h1>Contact Me</h1>

                    <p>
                        Any questions or comments for me or my work?
                        <br />
                        Do you want to pay me to do this for you?
                        <br />
                        Or have you always wanted to be someone's benefactor?
                        <br />
                        Need a friend?
                        <br />
                        Visit my profiles on the links below or send me a message using the form at the bottom of the page!
                    </p>
                </div>
            </Row>

            <Row>
                <div className={classes.directionRow}>
                    <ul className={classes.flexCenter}>
                        <li>
                            <a href="https://github.com/pablodlc" target="blank">
                                <GitHubIcon className={classes.item} fontSize='large' />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/pablodlc" target="blank">
                                <LinkedInIcon className={classes.item} fontSize='large' />
                            </a>
                        </li>

                        <li>
                            <a href="mailto://pablodlc@gmail.com" target="blank">
                                <EmailIcon className={classes.item} fontSize='large' />
                            </a>
                        </li>

                        <li>
                            <i class="fa-brands fa-paypal" href="https://paypal.me/pablodlc"></i>
                        </li>
                    </ul>
                </div>
            </Row>

            <Row>
                <div className={classes.columnCenter}>
                    Contact={ContactForm}
                </div>
            </Row>

        </Container>

    )
}


export default Contact