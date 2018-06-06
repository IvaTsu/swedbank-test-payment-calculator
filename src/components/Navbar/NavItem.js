import React from 'react';

export default ({ imgSrc, altText, navLabel }) => (
    <div className="tabContainer">
        <img src={ imgSrc } alt={ altText } />
        <span>{ navLabel }</span>
    </div>
);