import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Projects from './projects';
import About from './about';
import Resume from './resume';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/sobre" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contato" component={Contact} />
    </Switch>
)

export default Main;