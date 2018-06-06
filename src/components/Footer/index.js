import React from 'react';

// Custom Components
import HeaderStripe from './../Header/HeaderStripe';
// social icons
import Icons from './../../static/icons';
// styles
import './main.sass';

// social icons paths
const FACEBOOK = Icons.facebook;
const INSTAGRAM = Icons.instagram;
const YOUTUBE = Icons.youtube;
const TWITTER = Icons.twitter;
const SKYPE = Icons.skype;

export default () =>
    <div>
        <HeaderStripe />
        <div className="containerF">
            <div className="containerX">
                <div className="block">
                    <h4>Contact</h4>
                    <p>6 310 310</p>
                    <p>info@swedbank.ee</p>
                    <p>SWEDBANK AS</p>
                    <p>liivalaia 8, 15040 Tallinn</p>
                    <p>SIFT kood/BIC: HABAEE2X</p>
                    <p>Reg. number: 10060701</p>
                    <div className="social">
                        <img src={ FACEBOOK } alt="Facebook Social Icon" />
                        <img src={ INSTAGRAM } alt="Instagram Social Icon" />
                        <img src={ YOUTUBE } alt="YouTube Social Icon" />
                        <img src={ TWITTER } alt="Twitter Social Icon" />
                        <img src={ SKYPE } alt="Skype Social Icon" />
                    </div>
                </div>
                <div className="block">
                    <h4>Quicklinks</h4>
                    <ul>
                        <li>
                            <a href="#">Calculators</a>
                        </li>
                        <li>
                            <a href="#">Prices</a>
                        </li>
                        <li>
                            <a href="#">Terms of service</a>
                        </li>
                        <li>
                            <a href="#">Privacy and security</a>
                        </li>
                    </ul>
                </div>
                <div className="block">
                    <h4>Join Swedbank</h4>
                    <ul>
                        <li>
                            <a href="#">Client programs</a>
                        </li>
                        <li>
                            <a href="#">Business customers</a>
                        </li>
                        <li>
                            <a href="#">Jobs</a>
                        </li>
                        <li>
                            <a href="#">Internships</a>
                        </li>
                    </ul>
                </div>
                <div className="block">
                    <h4>Tooted</h4>
                    <ul>
                        <li>
                            <a href="#">Everyday Banking</a>
                        </li>
                        <li>
                            <a href="#">Loans</a>
                        </li>
                        <li>
                            <a href="#">Insurance</a>
                        </li>
                        <li>
                            <a href="#">Cards</a>
                        </li>
                        <li>
                            <a href="#">Stocks</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="additionalInfo">
            <p>
                This is a website of companies offering financial services - Swedbank AS, Swedbank Liising AS, Swedbank P&C Insurance AS, Swedbank Life Insurance SE, and Swedbank Investeerimisfondid AS.
                Before entering into any agreement read the term and conditions of the respective service. Consult a specialist, where necessary.
                Swedbank AS does not provide a credit advisory service for the purposes of the Creditors and Credit Intermediaries Act.
                The borrower makes the decision of taking out a loan, who assesses the suitability of the loan product and contractual terms to his/her personal loan interest,
                need and financial situation on the basis of the information and warnings presented by the bank and is responsible for the consequence related to concluding the agreement.
            </p>
        </div>
    </div>
;