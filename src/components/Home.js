import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import mug from '../assets/images/mug.jpg';
import beardo from '../assets/images/beardo.jpg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        width: '100vw',
        paddingTop: '20px',
        margin: '0 50px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    imgCol: {
        display: 'flex',
    },
    textCol: {
        display: 'flex',
        flexGrow: '4'
    },
    mugImgs: {
        flexGrow: '1'

    },
    mugShots: {
        position: 'relative',
        display: 'inline-block',
        marginRight: '20px'
    },
    mug: {
        maxWidth: '300px',
        maxHeight: '300px',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',

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
    card: {

        borderRadius: '16px',
        backgroundColor: '#b1a296'

    },
    bioText: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '2',
        alignItems: 'center',
        marginLeft: '1px',
        padding: '25px',
        fontFamily: '"Montserrat", sans- serif',
        color: '#2f4f4f',
        textAlign: 'justify',
        fontSize: '18px'
    },
});


function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div class='justify-content-center'>
                <Row className={classes.row}>
                    <Col className="imgCol">
                        <div className={classes.mugImgs}>
                            <img src={mug} className={classes.mug} alt="me as Jekyll and Hyde" />
                        </div>
                    </Col>

                    <Col className="textCol">
                        <Card className={classes.card}>
                            <div className={classes.bioText}>
                                <p>
                                    Hello World! My name is Pablo and I'm a fledgling
                                    programmer. I have a varied background; food service,
                                    retail, social work, law, and currently I'm a technical
                                    writer for a scientific instrument manufacturing company. I
                                    made a cookie cutter webpage long ago and thought it was
                                    great fun. Somehow it never occurred to me that I could
                                    pursue it professionally. Now I'm a novice full-stack web developer able to make a polished UI blah blah blah
                                </p>

                                <p>
                                    At this point in my learning process, I can build an
                                    interactive site from scratch, that can record user input or
                                    communicate with a server-side API, generate a password, or
                                    make a JavaScript powered game. I love JavaScript and how
                                    powerful it is in making a page fun and dynamic. jQuery is a
                                    handy shorthand I'm familiarizing myself with and using
                                    often. I can use CDNs to customize fonts and include sharp
                                    looking icons, I can fetch data from server-side APIs and
                                    return it to a page. I'm also gaining experience in
                                    JavaScript libraries, like Moment.js, and CSS frameworks;
                                    specifically Bootstrap and Bulma.
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Home