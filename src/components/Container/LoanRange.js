import React, { Component } from 'react';

class LoanRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            marginRight: 0,
        };
    }

    _onChange = (event) => {
        this.setState({
            value: event.target.value,
            marginRight: this.state.value
        });
    };

    render() {
        const { value } = this.state;
        const { minRangeValue, maxRangeValue } = this.props;
        return(
            <div className="sliderContainer">
                <div className="slider">
                    <output className="floatBubble" htmlFor="loan" style={{ left: `${this.state.marginRight / 5}rem` }}>{ value * 32000 }</output>
                </div>
                <div style={{ marginTop: "2rem" }}>
                    <label htmlFor="loan">Loan size</label>
                    <input
                        name="loan"
                        type="range"
                        min={ minRangeValue }
                        max={ maxRangeValue }
                        value={ value }
                        step="1"
                        onChange={ event => this._onChange(event) }
                        style={{ width: "20rem" }}
                    />
                    <div className="initialAndLast">
                        <span className="initial">32000 EUR</span>
                        <span className="last">320000 EUR</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoanRange;