import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      title: "",
      description: "",
    };
  }

  getTasks = () => {
    firebase
      .firestore()
      .collection("tasks")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            data: [...this.state.data, doc.data()],
          });
        });
      });
  };

  componentDidMount() {
    this.getTasks();
  }

  render(){
    return(
      {getTasks()}
    )
  }

}

export default App;
