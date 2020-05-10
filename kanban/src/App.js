import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { Header } from "semantic-ui-react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      backlog_items: [],
      taskname: "",
    };
  }

  getTasks = () => {
    firebase
      .firestore()
      .collection("todo-items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            backlog_items: doc.data().backlog_items,
            taskname: doc.data().taskname,
          });
          console.log(doc.data());
        });
      });
  };

  componentDidMount() {
    this.getTasks();
  }

  render() {
    return (
      <div>
        <Header as="h2">{"Taskname: " + this.state.taskname}</Header>

        <Header as="h4">{"Backlog: " + this.state.backlog_items + "\n"}</Header>
      </div>
    );
  }
}

export default App;
