import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './test/state';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Fragment>
  <State/>

    <App />
    </Fragment>
);

reportWebVitals();
