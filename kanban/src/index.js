import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Import Firebase as well as any extensions. In this case we're just adding on Firestore (our database)
import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOWRJqISVipbhODem_PggnJIHApZ4eMBo",
  authDomain: "kanban-shahbaz.firebaseapp.com",
  databaseURL: "https://kanban-shahbaz.firebaseio.com",
  projectId: "kanban-shahbaz",
  storageBucket: ".kanban-shahbaz.appspot.com",
  messagingSenderId: "176958015532",
};
firebase.initializeApp(config);

// This prevents a warning message for changes to firestore timestamp syntax in the console
// Firestore is still in Beta - in the future this won't be necessary
const firestore = firebase.firestore();
const settings = {};
firestore.settings(settings);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
