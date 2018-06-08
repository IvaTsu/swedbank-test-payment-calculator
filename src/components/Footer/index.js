import React from 'react';

// Custom Components
import Stripe from '../Header/Stripe';
import SocialBlock from './SocialBlock';
// styles
import './main.sass';

export default () =>
    <div>
        <Stripe stripeHeight="0.3rem" />
        <div className="containerFluidFooter">
            <div className="containerFooter">
                <div className="block">
                    <h4 className="blockHeader">Contact</h4>
                    <a href="tel:6310310" className="header telLink">6 310 310</a>
                    <a href="mailto:info@swedbank.ee" className="emailLink">info@swedbank.ee</a>
                    <p className="contactBlockText">SWEDBANK AS</p>
                    <p className="contactBlockText">liivalaia 8, 15040 Tallinn</p>
                    <p className="contactBlockText">SIFT kood/BIC: HABAEE2X</p>
                    <p className="contactBlockText">Reg. number: 10060701</p>
                    <SocialBlock />
                </div>
                <div className="block">
                    <h4 className="blockHeader">Quicklinks</h4>
                    <ul>
                        <li>
                            <a className="footerLink" href="#">Calculators</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Prices</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Terms of service</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Privacy and security</a>
                        </li>
                    </ul>
                </div>
                <div className="block">
                    <h4 className="blockHeader">Join Swedbank</h4>
                    <ul>
                        <li>
                            <a className="footerLink" href="#">Client programs</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Business customers</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Jobs</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Internships</a>
                        </li>
                    </ul>
                </div>
                <div className="block">
                    <h4 className="blockHeader">Tooted</h4>
                    <ul>
                        <li>
                            <a className="footerLink" href="#">Everyday Banking</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Loans</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Insurance</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Cards</a>
                        </li>
                        <li>
                            <a className="footerLink" href="#">Stocks</a>
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