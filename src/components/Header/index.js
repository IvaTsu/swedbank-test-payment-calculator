import React, { Fragment } from 'react';
// Custom Components
import Stripe from './Stripe';
import Logo from './Logo';
// styles
import './main.sass';

export default () => (
    <Fragment>
        <Stripe stripeHeight="0.5rem" />
        <Logo />
    </Fragment>
);
