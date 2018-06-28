import React, { Component } from 'react';
// Images
import Images from './../../static/images';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoImg: Images.logo,
            logoAltText: 'Swedbank Logo',
        };
    }
    render() {
        const { logoImg, logoAltText } = this.state;
        return (
            <div className="logoContainer">
                <a href="#">
                    <img
                        className="logo"
                        src={ logoImg }
                        alt={ logoAltText }
                    />
                </a>
            </div>
        );
    }
}

export default Logo;