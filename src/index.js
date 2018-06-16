import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//hello bitches

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'


ReactDOM.render(
    <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />

                </Switch>
                <Footer />
            </div>
    </Router >,
    document.getElementById('root')
);

registerServiceWorker();