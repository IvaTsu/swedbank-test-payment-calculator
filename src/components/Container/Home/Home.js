import React from 'react';

// Custom Components
import ExportSection from './ExportSection';

// styles
import '../main.sass';

export default () =>
    <div className="containerFluid">
        <h2 className="header headerMargin">Home</h2>
        <ExportSection />
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