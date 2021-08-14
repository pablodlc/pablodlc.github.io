import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// footer style
const useStyles = makeStyles({
    h2: {
        fontFamily: '"Bangers", cursive',
        textAlign: 'center',
        color: 'dark-gray',
        fontSize: '40px'
    }
});

function Footer() {
    const classes = useStyles()

    return (
        <div className="footer mt-5">
            <footer className={classes.flex}>
                <h2 className={classes.h2}>Made with ❤️️ by pablodlc</h2>
            </footer>
        </div>
    )
}

export default Footer