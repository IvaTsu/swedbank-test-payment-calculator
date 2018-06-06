import React from 'react';
import ReactDom from 'react-dom';

const DOCUMENT_ROOT = document.getElementById("root");
const App = () => <div>Hello</div>;

ReactDom.render(
    <App />,
    DOCUMENT_ROOT,
);