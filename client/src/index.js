import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AOS from 'aos';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css';
import './index.css';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Dashboard from './pages/dashboard/Dashboard';
import FarmersPage from './pages/farmers/FarmersPage';
import Products from './pages/products/Products';
import Markets from './pages/markets/Markets';
import NearbyMarkets from './pages/nearbyMarkets/NearbyMarkets';
import Test from './components/test/Test';
import Axios from 'axios';

// For private route method below (not currently using)
// const isLoggedIn = () => {
//     Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//     Axios.post("/api/auth/jwt").then( (res)=> {
//         if(res.data.success){
//             return true
//         }
//     })
// }

// For private route method (not currently using):
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       isLoggedIn() ?
//           <Component {...props} />
//         : <Redirect to={{
//             pathname: '/login',
//             state: { from: props.location }
//           }} />
//     )} />
//    )

class Site extends Component {

    state = {
        siteName: "TapRoot",
        loggedIn: false
    }

    componentDidMount() {
        AOS.init({
            delay: 100,
            duration: 500
        });
    }

    render() {

        let siteName = this.state.siteName;

        return (
            <Router>
                <div>
                    <Navbar siteName={siteName} />
                    <div id='content'>
                        <Switch>

                            <Route exact path="/signup" render={() => <Signup />} />
                            <Route exact path="/login" render={() => <Login />} />
                            <Route exact path="/protected" component={Test} />
                            <Route path="/farmerspage" component={FarmersPage} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/products" component={Products} />
                            <Route path="/markets" component={Markets} />
                            <Route exact path="/nearbyMarkets" component={NearbyMarkets} />
                            <Route siteName={siteName} render={() => <Home siteName={siteName} />} />

                        </Switch>
                    </div>
                    <Footer siteName={siteName} />
                </div>
            </Router >
        )
    }
}

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker();