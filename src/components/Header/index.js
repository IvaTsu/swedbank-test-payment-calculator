import React from 'react';

// Custom Components
import HeaderStripe from './Stripe';
import HeaderLogo from './HeaderLogo';

// styles
import './main.sass';

export default () => (
    <div>
        <HeaderStripe stripeHeight="0.5rem" />
        <HeaderLogo />
    </div>
);
