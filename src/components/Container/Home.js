import React from 'react';

// styles
import './main.sass';

export default () =>
    <div className="containerFluid">
        <h2 className="header">Home</h2>
        <div className="container">
            <div className="exportSection">
                <p>Your Swedbank overview</p>
                <div>
                    <span>PDF</span>
                    <span>XLS</span>
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

        <div className="container containerSeparator">
            <div className="sectionWrap">
                <div className="section">
                    <h3>Open</h3>
                    <p>One of the core values of Swedbank</p>
                    <p>Lorem ipsum dolor sit amet, consectur adipising elit.</p>
                </div>
                <div className="caring">
                    <h3>Caring</h3>
                    <p>Cum enim libero quisquam rerum. Dolorum fuga magnam nemo quae voluptas voluptates voluptatum.</p>
                    <a href="#">Read more</a>
                </div>
                <div className="section">
                    <h3>Simple</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectur adipising elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectur adipising elit.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
;