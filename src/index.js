import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyDAYcaImgmLEm2YU7V2Zxbv6LHsR4vc6pc",
  authDomain: "chatapplication-e6c68.firebaseapp.com",
  databaseURL: "https://chatapplication-e6c68.firebaseio.com",
  projectId: "chatapplication-e6c68",
  storageBucket: "chatapplication-e6c68.appspot.com",
  messagingSenderId: "397128297326",
  appId: "1:397128297326:web:27fcf5ea9bd17621e8ef7f",
  measurementId: "G-D5ZMFT37MW"
})

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route exact path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
