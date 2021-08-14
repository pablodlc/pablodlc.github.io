import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import mml from '../assets/gifs/mml.gif';
import trivia from '../assets/gifs/trivia-with-a-twist.gif';
import bt from '../assets/gifs/budget-tracker.gif';
import socnet from '../assets/gifs/soc-net.gif';
import weather from '../assets/gifs/weather-dashboard.gif';
import ramones from '../assets/images/Ramones.jpg';

const useStyles = makeStyles({
    container: {
        margin: '0',
        padding: '20px 35px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%'
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',

    },
    welcomeCard: {
        borderRadius: '16px',
        backgroundColor: '#b1a296',
        padding: '15px 24px 0px',
        marginBottom: '24px',
        color: '#7395ae',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
    },
    welcomeTitleDiv: {
        textAlign: 'center'
    },
    welcomeTitle: {
        fontFamily: '"Bangers", cursive',
        fontSize: '48px',
        textShadow: '0 0 8px rgba(0, 0, 0, 0.8)'
    },
    portText: {
        display: 'flex',

        fontFamily: '"Montserrat", sans- serif',
        color: '#2f4f4f',
        textAlign: 'justify',
        fontSize: '18px'
    },
    portCards: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',

        maxWidth: '400px'
    },
    cardFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '16px',
        backgroundColor: '#b1a296',
        padding: '24px',
        marginBottom: '24px',
        color: '#5d5c61',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
    },
    portItemTitle: {
        fontFamily: '"Bangers", cursive',
        fontSize: '40px',
        textShadow: '0 0 8px rgba(0, 0, 0, 0.8)',
        textAlign: 'center'
    }
});

function Portfolio() {
    const classes = useStyles();

    return (

        <Container className={classes.container}>
            <Router>
                <div>

                    <Row className={classes.row}>
                        <Card className={classes.welcomeCard}>

                            <Card.Title>
                                <div className={classes.welcomeTitleDiv}>
                                    <h2 className={classes.welcomeTitle}>My Work</h2>
                                </div>
                            </Card.Title>

                            <Card.Body>
                                <div className={classes.portText}>
                                    <p>
                                        Welcome to my portfolio.
                                        I am new to programming, but in a short time I've been able to make a decent portfolio of which I'm proud. I chose to introduce you to my work with a couple of group projects. The first is group project 2 of 3 from my boot camp called <span className="title">My Movie List</span>. This project follows the MVC framework and uses Sequelize to store a database. <span className="title">Trivia with a Twist!</span> is my first group project from the boot camp, where we utilized two server-side APIs to create quiz application. The next piece is I'm including is <span className="title">budget-tracker</span>, my first PWA--which means it works without an internet connection and can be installed as its own app on most smart devices. Even though it's not a deployed application, I waned to showcase my backend skills with <span className="title">soc-net</span>. <span className="title">soc-net</span> is a social networking backend application that stores Users and Friends, as we'll as Users' Thoughts and friends' Reactions to those Thoughts with MongooseDB. The next piece is <span className="title">Work Day Scheduler</span>, where I utilized two APIs to create a simple app that shows weather conditions of cities based on the user's input. <span className="title">Ramones</span>. Seriously, that page is great if only because of its subject.
                                    </p>
                                </div>
                            </Card.Body>

                        </Card>
                    </Row>


                    <div className={classes.portCards}>
                        <Row>

                            <Card className={classes.cardFlex}>
                                <Card.Body>
                                    <Card.Title>
                                        <h3 className={classes.portItemTitle}>
                                            <a href='https://mymovielistapp.herokuapp.com/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#7395ae' }}>
                                                My Movie List
                                            </a>
                                        </h3>
                                    </Card.Title>

                                    <Card.Img variant="top" src={mml} />

                                    <Card.Text>
                                        Here's the second of three group projects where three other classmates and I made a full- stack application that uses its own server and the OMDB API for some movie data. Users can create lists, like other users' lists, comment on others' lists as well as their own.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <br />

                            <Card className={classes.cardFlex}>
                                <Card.Body>
                                    <Card.Title>
                                        <h3>
                                            <a href='https://shilohjones194.github.io/TriviaWithATwist/' target="_blank" rel="noreferrer">
                                                Trivia With a Twist!
                                            </a>
                                        </h3>
                                    </Card.Title>

                                    <Card.Img variant="top" src={trivia} />

                                    <Card.Text>
                                        This the first of three group project assignment. Here, two classmates and I made a drinking trivia application. We were to use at least two server- side APIs, local storage, and have it be interactive. We made this good looking, fun application that generates random drinks and runs through a 5 question general knowledge trivia game, each using a different API.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>


                        <Row>
                            <Card className={classes.cardFlex}>
                                <Card.Body>
                                    <Card.Title>
                                        <h3>
                                            <a href='https://budget-tracker-pablodlc.herokuapp.com/' target="_blank" rel="noreferrer">
                                                budget-tracker got that PWA! ⚡
                                            </a>
                                        </h3>
                                    </Card.Title>

                                    <Card.Img variant="top" src={bt} />

                                    <Card.Text>
                                        budget-tracker is a progressive web application that tracks a budget based on user input. Being a PWA, it remains functional, even when not connected to the internet. It can also be installed as a standalone app on almost any smart device and be used without the need of a web browser!
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className={classes.cardFlex}>
                                <Card.Body>
                                    <Card.Title>
                                        <h3>
                                            <a href='https://youtu.be/js68-kxVTs0' target="_blank" rel="noreferrer">
                                                soc-net
                                            </a>
                                        </h3>
                                    </Card.Title>

                                    <Card.Img variant="top" src={socnet} />

                                    <Card.Text>
                                        soc-net is a NoSql, MongooseDB/Express.js powered backend application. The user creates a profile as a User. Users can post Thoughts that other users can read and to which post a Reaction. Additionally, Users can friend one another, adding each other to their friend arrays. Because this is just a backend application, there is no deployed site to visit, but please visit my YouTube channel to see it in action!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>

                        <Row>
                            <Card className={classes.cardFlex}>
                                <Card.Body>

                                    <Card.Title>
                                        <h3>
                                            <a href='https://pablodlc.github.io/weather-dashboard/' target="_blank" rel="noreferrer">
                                                Weather Dashboard
                                            </a>
                                        </h3>
                                    </Card.Title>

                                    <Card.Img variant="top" src={weather} />

                                    <Card.Text>
                                        An application that lets users search for weather conditions by city, showing current conditions and gives a five-day forecast. That city search is saved to local storage and a button is automatically generated that repeats the search.  Weather Dashboard uses two APIs: OpenWeather One Call API to fetch weather data, and Moment.js for handling dates on the page.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className={classes.cardFlex}>
                                <Card.Body>
                                    <Card.Title>
                                        <h3>
                                            <a href='https://pablodlc.github.io/MFM/' target="_blank" rel="noreferrer">
                                                Ramones Fanpage
                                            </a>
                                        </h3>
                                    </Card.Title>

                                    <Card.Img variant="top" src={ramones} />

                                    <Card.Text>
                                        A vanilla HTML fan page for the greatest band of all time. Ever. This was a pre- work assignment for my boot camp to familiarize us with basic HTML. I include it because, mostly, it's the Ramones. But also to demonstrate my earliest efforts.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Row>
                    </div>
                </div>
            </Router >
        </Container >
    )
}

export default Portfolio