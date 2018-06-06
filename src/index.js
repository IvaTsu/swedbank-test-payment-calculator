import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

// Custom Components
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

// styles
import './reset.sass';

const DOCUMENT_ROOT = document.getElementById("root");
const App = () => (
    <Fragment>
        <Header />
        <Navbar />
        <Footer />
    </Fragment>
);

ReactDom.render(
    <App />,
    DOCUMENT_ROOT,
);