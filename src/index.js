import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import Parse from 'parse'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
    'bPiipOdH63i5L5i8CnVJNv72hwa8ZLWsvMDxUuMN', // This is your Application ID
    'tBsVpAtPAzqy8oJ6cfwj51lWrApdJt5I0KmGkOYo' // This is your Javascript key
  );

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
