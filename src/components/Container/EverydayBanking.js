import React, { Component } from 'react';

// Custom Components
import TabNav from './TabNav';

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
            <div>
                <label htmlFor="name">Account</label>
                <select name="account">
                    <option value="Account name 1">Account name 1</option>
                    <option value="Account name 2">Account name 2</option>
                </select>
                <label htmlFor="payments">Saved payments</label>
                <select name="payments">
                    <option disabled defaultValue="Select a saved payment">Select a saved payment</option>
                    <option value="Payment option 1">Payment option 1</option>
                </select>
                <label htmlFor="amount">Amount</label>
                <input name="amount" type="number" min="1" />
                <select name="currency">
                    <option value="EUR">EUR</option>
                </select>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
                <div>
                    <button>Save</button>
                    <button>Pay</button>
                </div>
            </div>
        ) : (
            <div>
                <label htmlFor="loan">Loan size</label>
                <input name="loan" type="range" />
                <label htmlFor="period">Period</label>
                <select name="period">
                    <option value="30 years">30 years</option>
                </select>
                <label htmlFor="interest">Interest</label>
                <select name="interest">
                    <option value="4.5%">4.5%</option>
                </select>
                <div>
                    <span>Monthly payment</span>
                    <span>573.6 EUR</span>
                    <div>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
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
                <h2 className="header">Igapaevapangandus</h2>
                <div className="tabsContainer">
                    <TabNav href="#" onClick={this._handlePaymentTabClick} label="Payment" style={ changeBackgroundOfPaymentTab } />
                    <TabNav href="#" onClick={this._handleCalculatorTabClick} label="Calculator" style={ changeBackgroundOfCalculatorTab } />
                </div>
                <div className="container">

                    <div>
                        {renderTab}
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Welcome to Swedbank!</h4>
                        <p>
                            With 7.2 million private customers and more than 574 000 corporate and organisational customers.
                            This makes us Sweden's largest bank in terms of number of customers and gives us a leading position in our other home markets of Estonia, Latvia and Lithuania.
                            As a major bank, we are a significant part of the financial system and play an important role in the local communities we serve.
                            We are dedicated to helping our customers, our shareholders and society as a whole stay financially sound and sustainable.
                        </p>
                        <div>
                            <a href="#">Read more</a>
                            <button>Go</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EverydayBanking;