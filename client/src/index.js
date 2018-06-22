import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
import Dashboard from './pages/dashboard/Dashboard';
import FarmersPage from './pages/farmers/FarmersPage';
import Products from './pages/products/Products';
import Markets from './pages/markets/Markets';
// import NoMatch from './pages/NoMatch/NoMatch';
import Test from './components/test/Test';
import Axios from 'axios'; 

// For private route method below (not currently using)
// const 

const isLoggedIn = () => {
    Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return(Axios.post("/api/auth/jwt"))
}

// For private route method (not currently using):
const PrivateRoute = ({ component: Component, ...rest }) => {
    return(isLoggedIn().then( (res)=> {
        if(res.data.success){
             return (<Route {...rest} render={(props) => (<Component {...props} />)} />)
        }
        else {
            return (<Redirect to={{
                pathname: '/login',
                // state: { from: props.location }
              }} />)
        }
    }))
}

class Site extends Component {

    state = {
        siteName: 'Farmers Market App',
        loggedIn: false
    }

    // isLoggedIn=() => {
    //     Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    //     return(Axios.post("/api/auth/jwt"))
    // }

    // PrivateRoute=({ component: Component, ...rest }) => {
    //     this.isLoggedIn().then( (res)=> {
    //         if(res.data.success){
    //              return (<Route {...rest} render={(props) => (<Component {...props} />)} />)
    //         }
    //         else {
    //             return (<Redirect to={{
    //                 pathname: '/login',
    //                 state: { from: this.props.location }
    //               }} />)
    //         }
    //     })
    // }



    render() {

        let siteName = this.state.siteName;

        

        return (
            <Router>
                <div>
                    <Navbar siteName={siteName} />
                    <Switch>

                        <Route exact path="/" render={() => <Home siteName={siteName} />} />
                        <Route exact path="/signup" render={() => <Signup />} />
                        <Route exact path="/login" render={() => <Login />} />
                        <PrivateRoute exact path="/protected" component={Test} />
                        <Route exact path="/farmerspage" render={FarmersPage} />
                        <Route exact path="/dashboard" render={Dashboard} />
                        <Route exact path="/products" render={Products} />
                        <Route exact path="/markets" render={Markets} />
                        
                        {/* <Route component={NoMatch} /> */}


                    </Switch>
                    <Footer />
                </div>
            </Router >
        )
    }
}

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker();