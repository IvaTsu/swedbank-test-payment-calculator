import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ route, navLabel, children, linkHover }) => (
    <Link
        className="tabLink"
        to={route}
    >
        <span>{ children }</span>
        <span className={ linkHover ? "tabLabelActive": "tabLabel" }>{ navLabel }</span>
    </Link>
);

NavItem.propTypes = {
    route: PropTypes.string.isRequired,
    navLabel: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    linkHover: PropTypes.bool.isRequired,
};

export default NavItem;