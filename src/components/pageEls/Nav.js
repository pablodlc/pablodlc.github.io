import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'react-bootstrap/Navbar';

const useStyles = makeStyles({
    flexRow: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: '#dbb95f'
    },
    h1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '48px',
        margin: '0 15px',
        fontFamily: '"Bangers", cursive',

    },
    li: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '36px',
        justifyContent: 'center',
        margin: '0 15px',
        fontFamily: '"Bangers", cursive',
        '&:hover': {
            fontFamily: '"Creepster", cursive',
            fontSize: '36px'
        }
    }
});

function Nav() {
    const classes = useStyles();

    return (

        <Navbar className={classes.navbar}>

            <h1 className={classes.h1}>
                <Link to="/" style={{ textDecoration: 'none' }}>Pablo De La Cruz</Link>
            </h1>

            <nav>
                <ul className={classes.flexRow}>
                    <li className={classes.li}>
                        <Link to="/portfolio" style={{ textDecoration: 'none' }}>Portfolio</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/resume" style={{ textDecoration: 'none' }}>Resume</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Me</Link>
                    </li>
                </ul>
            </nav>

        </Navbar >
    )
}

export default Nav;