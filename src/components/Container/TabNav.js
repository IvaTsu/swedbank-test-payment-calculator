import React from 'react';

export default ({
    href,
    onClick,
    label,
    style
}) => <a
        className="tab"
        href={ href }
        onClick={ onClick }
        style={ style }
    >{ label }</a>;