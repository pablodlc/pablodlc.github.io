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
        maxHeight: "300px",
        maxWidth: "300px"
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
            <div className={classes.flexCenter}>
                <Row>
                    <h1>Oops, this is a React app!</h1>
                </Row>

                <Row>
                    <h5 class='text-center'>Delete the appended `index.html` in the URL above or click any of the links in the Navbar!</h5>
                    <br />
                    <div class='text-center'>
                        <img src={ReactImg} className={classes.ReactImg} alt=""></img>
                    </div>
                </Row>
            </div>
        </Container >
    );
}

export default IndexHtml