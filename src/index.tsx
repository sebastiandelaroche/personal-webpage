import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: investigate a better way to do this (for React ecosystem)

/* GLOBAL VARIABLES */
const globalThis = window as any;
globalThis.$primaryLanguage = 'en';
globalThis.$secondaryLanguage = 'pl';
globalThis.$primaryLanguageIconId = 'primary-lang-icon';
globalThis.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
