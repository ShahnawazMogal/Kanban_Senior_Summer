import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Import Firebase as well as any extensions. In this case we're just adding on Firestore (our database)
import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYuwY7LH70tRUGtpQjZtCvRgP-AZ3zA-g",
  authDomain: "kanban-shahnawaz.firebaseapp.com",
  databaseURL: "https://kanban-shahnawaz.firebaseio.com",
  projectId: "kanban-shahnawaz",
  storageBucket: "kanban-shahnhwat awaz.appspot.com",
  messagingSenderId: "717271670911",
};
firebase.initializeApp(config);

// This prevents a warning message for changes to firestore timestamp syntax in the console
// Firestore is still in Beta - in the future this won't be necessary
const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
