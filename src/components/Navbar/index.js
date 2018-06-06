import React, { Fragment } from 'react';

// Custom Components
import NavItem from './NavItem';

// styles
import './main.sass';

// icons
import Icons from './../../static/icons';
const HOME = Icons.home;
const WALLET = Icons.wallet;

export default () => (
    <div className="wrapTabs">
        <NavItem imgSrc={ HOME } altText="Home Tab" navLabel="Home" /> {/* Home Tab */}
        <NavItem imgSrc={ WALLET } altText="Everyday banking Tab" navLabel="Everyday banking" /> {/* Everyday banking Tab */}
    </div>
);