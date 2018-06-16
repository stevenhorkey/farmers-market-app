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
// import Login from './components/Login';
// import Register from './components/Register';

import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import SubmitScript from './components/submitscript/SubmitScript'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Team from './containers/team/Team'
import SubmitArticle from './components/submitarticle/SubmitArticle'
import SubmitEmail from './components/submitemail/SubmitEmail'
import UploadAudio from './components/uploadaudio/UploadAudio'
import AudioSamples from './components/audiosamples/AudioSamples'
import CFooter from './components/cfooter/CFooter'

// Reducers
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <div>
                {/* <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} /> */}
                <Navbar/>
                <Switch>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/submitScript" component={SubmitScript}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/submitArticle" component={SubmitArticle}/>
                    <Route path="/submitEmail/:ReqID" component={SubmitEmail}/>
                    <Route path="/uploadAudio/:ReqID" component={UploadAudio}/>
                    <Route path="/audioSamples/:usrID" component={AudioSamples}/>
                    <Route path="/" component={SubmitArticle}/>
                </Switch>
                <CFooter/>
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);
registerServiceWorker();