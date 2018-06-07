import React, { Component } from 'react';

class EverydayBanking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaymentTabActive: true,
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
            <div>Payment</div>
        ) : (
            <div>Calculator</div>
        );
        return (
            <div>
                <h2>Igapaevapangandus</h2>
                <div>
                    <button onClick={this._handlePaymentTabClick}>Payment</button>
                    <button onClick={this._handleCalculatorTabClick}>Calculator</button>
                </div>
                {renderTab}
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
                    </div>
                </div>
            </div>
        );
    }
}

export default EverydayBanking;