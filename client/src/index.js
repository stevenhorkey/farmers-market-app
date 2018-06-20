import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import FarmersPage from './pages/farmers/FarmersPage';
import Products from './pages/products/Products';
import Markets from './pages/markets/Markets';
import NoMatch from './pages/NoMatch/NoMatch';


class Site extends Component {

    state = {
        siteName: 'Farmers Market App',
        loggedIn: false
    }

    render() {

        let siteName = this.state.siteName;


        return (
            <Router>
                <div>
                    <Navbar siteName={siteName} />
                    <Switch>

                        <Route exact path="/" render={() => <Home siteName={siteName} />} />
                        <Route exact path="/farmerspage" render={FarmersPage} />
                        <Route exact path="/dashboard" render={Dashboard} />
                        <Route exact path="/products" render={Products} />
                        <Route exact path="/markets" render={Markets} />
                        <Route component={NoMatch} />


                    </Switch>
                    <Footer />
                </div>
            </Router >
        )
    }
}

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker();