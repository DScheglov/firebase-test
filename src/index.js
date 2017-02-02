import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';
import './index.css';

var config = {
  apiKey: "AIzaSyAdy7xzx3Aqqe0CwsP0iv3McNlEs441hvQ",
  authDomain: "severo14-5adb8.firebaseapp.com",
  databaseURL: "https://severo14-5adb8.firebaseio.com",
  storageBucket: "severo14-5adb8.appspot.com",
  messagingSenderId: "930147993351"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
