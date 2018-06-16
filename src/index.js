import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Login from './components/login/Login'
import Signup from './components/signup/Signup'


ReactDOM.render(
        <Router>
            <div>
                
            </div>
        </Router>,
  document.getElementById('root')
);

registerServiceWorker();