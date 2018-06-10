import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Custom Components
import NavItem from './NavItem';
import Home from '../Container/Home/Home';
import EverydayBanking from './../Container/EverydayBanking';

// styles
import './main.sass';

// icons
import Icons from './../../static/icons';
const HOME = Icons.home;
const WALLET = Icons.wallet;

export default () => (
    <Router>
        <Fragment>
            <div className="wrapTabs">
                <NavItem imgSrc={ HOME } altText="Home Tab" navLabel="Home" route="/" /> {/* Home Tab */}
                <NavItem imgSrc={ WALLET } altText="Everyday banking Tab" navLabel="Everyday banking" route="/banking" /> {/* Everyday banking Tab */}
            </div>
            <div>
                <Route exact path="/" component={ Home } />
                <Route path="/banking" component={ EverydayBanking } />
            </div>
        </Fragment>
    </Router>
);