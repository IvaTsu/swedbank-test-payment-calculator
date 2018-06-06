import React from 'react';
import { Link } from 'react-router-dom';

export default ({ imgSrc, altText, navLabel, route }) => (
    <div className="tabContainer">
        <Link to={route}>
            <img src={ imgSrc } alt={ altText } />
            <span>{ navLabel }</span>
        </Link>
    </div>
);