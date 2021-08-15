import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'react-bootstrap/Navbar';

const useStyles = makeStyles({
    Row: {
        width: '100%',
    },
    navbar: {
        backgroundColor: '#5d5c61',
        width: '100%',
        justifyContent: 'center'

    },
    flexRow: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    navItems: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    navLinks: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    h1: {
        fontWeight: 'bold',
        fontSize: '48px',
        margin: '0 15px',
        fontFamily: '"Bangers", cursive',
        marginLeft: 'auto',
        padding: '17px 200px 17px 50px',
        textShadow: '0 0 16px rgba(0, 0, 0, 0.8)'
    },
    ul: {
        paddingLeft: '200px'
    },
    li: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '36px',
        justifyContent: 'center',
        margin: '0 15px',
        paddingTop: '17px',
        fontFamily: '"Bangers", cursive',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
        '&:hover': {
            fontFamily: '"Creepster", cursive',
            fontSize: '33px',
            textShadow: '0 0 8px rgba(0, 0, 0, 0.8)'
        }
    }
});

function Nav() {
    const classes = useStyles();

    return (

        <Navbar fluid className={classes.navbar} class='navbar navbar-collapse'>
            <Row className={classes.flexRow}>

                <div className={classes.navItems}>
                    <h1 className={classes.h1}>
                        <Link to="/" style={{ textDecoration: 'none', color: '#7395ae' }}>Pablo De La Cruz</Link>
                    </h1>

                    <ul className={classes.navLinks} >
                        <li className={classes.li}>
                            <Link to="/portfolio" style={{ textDecoration: 'none', color: '#7395ae' }}>Portfolio</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/resume" style={{ textDecoration: 'none', color: '#7395ae' }}>Resume</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/contact" style={{ textDecoration: 'none', color: '#7395ae' }}>Contact Me</Link>
                        </li>
                    </ul>
                </div>

            </Row>
        </Navbar >
    )
}

export default Nav;