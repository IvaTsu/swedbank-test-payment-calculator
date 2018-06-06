import React from 'react';

// assets
import Images from './../../static/images';

const LOGO = Images.logo;

export default () =>
    <div className="logoContainer">
        <img
            src={ LOGO }
            className="logo"
        />
    </div>
;