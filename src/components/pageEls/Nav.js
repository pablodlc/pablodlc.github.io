import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css';


const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#5d5c61',
        width: '100%',
    },
    flexRow: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
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
        padding: '16px 16px 16px 50px',
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

function Header() {
    const classes = useStyles();

    return (

        <Container>
            <Navbar collapseOnSelect expand="lg" fluid className={classes.navbar}>


                <div className={classes.navItems}>
                    <h1 className={classes.h1} id="navH1">
                        <Link to="/" style={{ textDecoration: 'none', color: '#7395ae' }}>Pablo De La Cruz</Link>
                    </h1>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={classes.navLinks} >

                            <Link to="/portfolio" className={classes.li} style={{ textDecoration: 'none', color: '#7395ae' }}>Portfolio</Link>

                            <Link to="/resume" className={classes.li} style={{ textDecoration: 'none', color: '#7395ae' }}>Resume</Link>

                            <Link to="/contact" className={classes.li} style={{ textDecoration: 'none', color: '#7395ae' }}>Contact Me</Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>


            </Navbar >
        </Container>
    )
}

export default Header;