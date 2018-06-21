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
import Test from './components/test/Test';
import Axios from 'axios';

const isLoggedIn = () => {
    Axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    Axios.post("/api/auth/jwt").then( (res)=> {
        if(res.data.success){
            return true
        }
    })
}

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

class Site extends Component{

    state = {
        siteName: 'Farmers Market App',
        loggedIn: false
    }

    render(){

        let siteName = this.state.siteName;

        

        return(
            <Router>
                <div>
                    <Navbar siteName={siteName} />
                    <Switch>

                        <Route exact path="/" render={() => <Home siteName={siteName} />} />
                        <Route exact path="/signup" render={() => <Signup />} />
                        <Route exact path="/login" render={() => <Login />} />
                        <Route exact path="/protected" component={Test} />

                    </Switch>
                    <Footer />
                </div>
            </Router >
        )
    }
}
    
ReactDOM.render(<Site/>,document.getElementById('root'))
registerServiceWorker();