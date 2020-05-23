import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import AllRides from './components/all-rides/all-rides'
import { Route, BrowserRouter } from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <Route exact path="/home" component={App}/>
        <Route exact path="/rides" component={AllRides}/>
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
