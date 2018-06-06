import React from 'react';
import ReactDom from 'react-dom';

// Custom Components
import Header from './components/Header/index';

// styles
import './reset.sass';

const DOCUMENT_ROOT = document.getElementById("root");
const App = () => <Header />;

ReactDom.render(
    <App />,
    DOCUMENT_ROOT,
);