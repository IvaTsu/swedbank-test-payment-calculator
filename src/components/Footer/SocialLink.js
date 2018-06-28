import React from 'react';

export default ({ target, href, src, alt }) => (
    <a target={ target } href={ href }>
        <img src={ src } alt={ alt } />
    </a>
);