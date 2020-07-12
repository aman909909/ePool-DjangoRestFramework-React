import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import AllRides from './components/all-rides/all-rides'
import Login from './components/login/login';
import { Route, BrowserRouter } from 'react-router-dom';
import OfferForm from './components/offer-form/offer-form'
import Signup from './components/signup/signup';
import MyPendingRequest from './components/my-pending-request/my-pending-request'
import {CookiesProvider} from 'react-cookie';
import Urfy from './components/URFY/urfy';


const routing = (
    <BrowserRouter>
      <CookiesProvider>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={App}/>
        <Route exact path="/rides" component={AllRides}/>
        <Route exact path="/offer" component={OfferForm}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/urfy" component={Urfy}/>
        <Route exact path="/my-pending-requests" component={MyPendingRequest}/>
      </CookiesProvider>
    </BrowserRouter>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
