import React from 'react';

// TODO PropTypes check

export default ({ src, alt, label, onClick }) => (
    <a
        href="#"
        className="iconArea"
        onClick={ onClick }
    >
        <img
            className="iconAlign"
            src={ src }
            alt={ alt }
        />
        <span className="iconLabel">{ label }</span>
    </a>
);