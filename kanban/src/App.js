import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { Form } from "react-bootstrap";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      backlog_items: [],
      taskname: "",
      backlog_input: "",
    };
    this.database = firebase.firestore();
  }

  getTasks = () => {
    this.database
      .collection("todo-items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            backlog_items: doc.data().backlog_items,
            taskname: doc.data().taskname,
          });
        });
      });
  };

  addToBacklog = (e) => {
    console.log("Submitted: " + this.state.backlog_input);
    this.database
      .collection("todo-items")
      .add({ backlog_items: this.state.backlog_input })
      .then((data) => {
        console.log("Data: ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  updateBacklogInput = (e) => {
    this.setState({ backlog_input: e.target.value });
  };

  render() {
    this.getTasks();
    return (
      <div>
        <h1> {this.state.taskname}</h1>
        <h4>{"Backlog: " + this.state.backlog_items + "\n"}</h4>
        <Form onSubmit={this.addToBacklog}>
          <Form.Label>Enter new Backlog Item: </Form.Label>
          <Form.Control
            onChange={this.updateBacklogInput}
            placeholder="Merge Branches"
          />
        </Form>
      </div>
    );
  }
}

export default App;
