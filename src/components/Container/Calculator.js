import React from 'react';

export default () => (
    <div className="calculatorContainer">
        <div className="loanCalculator">
            <div>
                <label htmlFor="loan">Loan size</label>
                <input name="loan" type="range" />
            </div>
            <div>
                <label htmlFor="period">Period</label>
                <select name="period">
                    <option value="30 years">30 years</option>
                </select>
            </div>
            <div>
                <label htmlFor="interest">Interest</label>
                <select name="interest">
                    <option value="4.5%">4.5%</option>
                </select>
            </div>
        </div>
        <div>
            <span>Monthly payment</span>
            <span>573.6 EUR</span>
            <div>
                <button>Apply</button>
            </div>
        </div>
    </div>
);
