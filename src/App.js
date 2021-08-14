import React from 'react';
import "./App.css";
import Nav from "./components/pageEls/Nav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/pageEls/Footer";
import Index from "./components/IndexHtml";
import Container from "@material-ui/core/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Body: {
        padding: '0'
    }
})

function App() {
    return (

        <Container disableGutters maxWidth={false}>
            <div>
                <Router>
                    <Nav />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/home" exact>
                            <Home />
                        </Route>

                        <Route path="/is-sleep-deprivation-part-of-programming-or-is-sleep-programming-deprivation" exact>
                            <Home />
                        </Route>

                        <Route path="/portfolio" exact>
                            <Portfolio />
                        </Route>

                        <Route path="/resume" exact>
                            <Resume />
                        </Route>

                        <Route path="/contact" exact>
                            <Contact />
                        </Route>

                        <Route path="/index.html" exact>
                            <Index />
                        </Route>
                    </Switch>
                    <Footer />

                </Router>

            </div>
        </Container>

    );
}

export default App