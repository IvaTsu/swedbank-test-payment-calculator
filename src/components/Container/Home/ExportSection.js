import React, { Component } from 'react';

// Custom Components
import Icon from './Icon';
// styles
import './main.sass'
// Icons
import Icons from './../../../static/icons';

class ExportSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pdfIcon: Icons.pdf,
            pdfIconAltText: 'Icon that displays a blank A4',
            pdfLabel: 'PDF',
            xlsLabel: 'XLS'
        };
    }
    render() {
        const { pdfIcon, pdfIconAltText, pdfLabel, xlsLabel } = this.state;
        return(
            <div className="container">

                <div className="exportSection">
                    <p className="exportSectionHeader">Your Swedbank overview</p>
                    <div className="exportSectionIcons">
                        <Icon src={ pdfIcon } alt={ pdfIconAltText } label={ pdfLabel } />
                        <Icon src={ pdfIcon } alt={ pdfIconAltText } label={ xlsLabel } />
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Account</th>
                        <th>Balance</th>
                        <th>Credit</th>
                        <th>Reserved</th>
                        <th>Available</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Siim Tamm EE752000221057734534</td>
                        <td>3 342 000.00</td>
                        <td>20.00</td>
                        <td>725.00</td>
                        <td>900.56 EUR</td>
                    </tr>
                    <tr>
                        <td>Marju Lepik EE752000221057734534</td>
                        <td>50.90</td>
                        <td>2 000.00</td>
                        <td></td>
                        <td>3 000.00 EUR</td>
                    </tr>
                    <tr>
                        <td>Liina Roosipold EE752000221057734534</td>
                        <td>12 041.00</td>
                        <td>20.00</td>
                        <td></td>
                        <td>1300.12 EUR</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>5456.56</td>
                        <td>456.56 EUR</td>
                        <td></td>
                        <td>456.56 EUR</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExportSection;