import React from 'react';

// TODO PropTypes check

export default ({ src, alt, label }) => (
    <div className="iconArea">
        <img
            className="iconAlign"
            src={ src }
            alt={ alt }
        />
        <span className="iconLabel">{ label }</span>
    </div>
);