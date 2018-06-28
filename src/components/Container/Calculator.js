import React from 'react';

// Custom Components
import LoanRange from './LoanRange';

export default () => (
    <div className="calculatorContainer">
        <div className="loanCalculator">
            <div className="calculatorContainerStart">
                <LoanRange
                    minRangeValue="1"
                    maxRngeValue="100"
                />
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
        </div>
        <div>
            <div className="line">
                <span className="nextLine">Monthly payment</span>
                <span className="nextLine">573.6 EUR</span>
            </div>
            <div>
                <button>Apply</button>
            </div>
        </div>
    </div>
);
