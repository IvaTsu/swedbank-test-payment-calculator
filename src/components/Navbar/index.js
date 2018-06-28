import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Custom Components
import NavItem from './NavItem';
import Home from '../Container/Home/Home';
import EverydayBanking from './../Container/EverydayBanking';
import HomeIcon from './HomeIcon';
import WalletIcon from './WalletIcon';
// styles
import './main.sass';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: {
                label: 'Home',
                route: '/',
                iconWidth: '20px',
                iconHeight: '18px',
            },
            homeIconColor: '#512B2B',
            homeHover: false,
            banking: {
                label: 'Everyday banking',
                route: '/banking',
                iconWidth: '20px',
                iconHeight: '19px',
            },
            bankingIconColor: '#512B2B',
            bankingHover: false,
        };
    }

    _onMouseEnterHome = () => {
        this.setState({
            homeHover: true,
            homeIconColor: '#F35B1C',
        });
    };

    _onMouseLeaveHome = () => {
        this.setState({
            homeHover: false,
            homeIconColor: '#512B2B',
        });
    };

    _onMouseEnterBanking = () => {
        this.setState({
            bankingIconColor: '#F35B1C',
            bankingHover: true,
        });
    };

    _onMouseLeaveBanking = () => {
        this.setState({
            bankingIconColor: '#512B2B',
            bankingHover: false,
        });
    };

    render() {
        const { home, banking, homeIconColor, homeHover, bankingIconColor, bankingHover }  = this.state;
        return (
            <Router>
                <Fragment>
                    <div className="wrapTabs">
                        {/* Home Tab */}
                        <div
                            className="tabContainer"
                            onMouseEnter={ this._onMouseEnterHome }
                            onMouseLeave={ this._onMouseLeaveHome }
                        >
                            <NavItem
                                navLabel={ home.label }
                                route={ home.route }
                                children={ <HomeIcon
                                    width={ home.iconWidth }
                                    height={ home.iconHeight }
                                    fill={ homeIconColor }
                                /> }
                                linkHover={ homeHover }
                            />
                        </div>

                        {/* Everyday banking Tab */}
                        <div
                            className="tabContainer"
                            onMouseEnter={ this._onMouseEnterBanking }
                            onMouseLeave={ this._onMouseLeaveBanking }
                        >
                        <NavItem
                            navLabel={ banking.label }
                            route={ banking.route }
                            children={ <WalletIcon
                                width={ banking.iconWidth }
                                height={ banking.iconHeight }
                                fill={ bankingIconColor }
                            /> }
                            linkHover={ bankingHover }
                        />
                        </div>
                    </div>
                    <div>
                        <Route exact path={ home.route} component={ Home } />
                        <Route path={ banking.route } component={ EverydayBanking } />
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default Navbar;