import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ReactImg from '../assets/images/logo512.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        padding: '20px 35px',
        display: 'flex',
        flexWrap: 'wrap'
    },
    ReactImg: {
        maxHeight: "500px",
        maxWidth: "500px"
    },
    flexCenter: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

function IndexHtml() {
    const classes = useStyles();

    return (
        <Container>
            <Row>
                <div className={classes.flexCenter}>
                    <h1>Oops, this is a React app!</h1>
                    <h5>Delete the appended `index.html` in the URL above or click any of the links in the Navbar!</h5>
                    <img src={ReactImg} className={classes.ReactImg} alt=""></img>
                </div>
            </Row>
        </Container >
    );
}

export default IndexHtml