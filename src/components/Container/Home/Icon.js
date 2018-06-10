import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ src, alt, label, onClick }) => (
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

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Icon;