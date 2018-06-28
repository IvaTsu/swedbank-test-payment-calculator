import React, { Component } from 'react';

// Custom Components
import TabNav from './TabNav';
import Account from './Account';
import Calculator from './Calculator';
import TalkBubble from './TalkBubble';

class EverydayBanking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaymentTabActive: true
        };
    }

    _handlePaymentTabClick = () => {
        this.setState({
            isPaymentTabActive: true
        });
    };

    _handleCalculatorTabClick = () => {
        this.setState({
            isPaymentTabActive: false
        });
    };

    render() {
        const renderTab = this.state.isPaymentTabActive ? (
            <Account />
        ) : (
            <Calculator />
        );
        {/* Handling Background change for the Tabs */}
        const backgroundColorOfActiveTab = {
            backgroundColor: "white",
        };
        const backgroundColorOfUnactiveTab = {
            backgroundColor: "rgb(247,245,243)",
        };
        const changeBackgroundOfPaymentTab = this.state.isPaymentTabActive ? backgroundColorOfActiveTab : backgroundColorOfUnactiveTab;
        const changeBackgroundOfCalculatorTab = !this.state.isPaymentTabActive ? backgroundColorOfActiveTab : backgroundColorOfUnactiveTab;

        return (
            <div className="containerFluid">
                <h2 className="header headerMargin">Igapaevapangandus</h2>
                <div className="tabsContainer">
                    <TabNav href="#" onClick={this._handlePaymentTabClick} label="Payment" style={ changeBackgroundOfPaymentTab } />
                    <TabNav href="#" onClick={this._handleCalculatorTabClick} label="Calculator" style={ changeBackgroundOfCalculatorTab } />
                </div>
                <div className="container">
                    {renderTab}
                </div>
                <div className="container containerSeparator">
                    <div className="containerWrap">
                        <div className="innerContainerWrap">
                            <TalkBubble />
                            <div className="info">
                                <h4 className="infoHeader">Welcome to Swedbank!</h4>
                                <p className="infoContent">
                                    With 7.2 million private customers and more than 574 000 corporate and organisational customers.
                                    This makes us Sweden's largest bank in terms of number of customers and gives us a leading position in our other home markets of Estonia, Latvia and Lithuania.
                                    As a major bank, we are a significant part of the financial system and play an important role in the local communities we serve.
                                    We are dedicated to helping our customers, our shareholders and society as a whole stay financially sound and sustainable.
                                </p>
                                <div className="infoNavBlock">
                                    <a href="#" className="infoLink">Read more</a>
                                    <button className="btn btnGo">Go</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default EverydayBanking;