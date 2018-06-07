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
            </div>
        );
    }
}

export default EverydayBanking;