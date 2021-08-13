import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// footer style
const useStyles = makeStyles({
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    h2: {
        fontFamily: '"Bangers", cursive',
        textAlign: 'center',
        color: 'gray',
        fontSize: '32px'
    }
});

function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.flex}>
                <h2 className={classes.h2}>Made with ❤️️ by pablodlc</h2>
        </footer>
    )
}

export default Footer