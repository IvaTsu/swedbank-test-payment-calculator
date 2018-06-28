import React from 'react';
import PropTypes from 'prop-types';

const Stripe = ({ stripeHeight }) =>
    <div
        className="stripe"
        style={{ height: stripeHeight }}
    />
;

Stripe.propTypes = {
    stripeHeight: PropTypes.string.isRequired,
};

export default Stripe;