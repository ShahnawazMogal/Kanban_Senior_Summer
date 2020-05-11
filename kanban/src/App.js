import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Col, Row, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="data:image/png;base64,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"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Kanban App
        </Navbar.Brand>
      </Navbar>
      <h2>Your Kanban board:</h2>
      <Jumbotron>
        <Container>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>To-do</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Add new To-do item"
                    />
                  </Form.Group>
                </Form>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Doing</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Add new Doing item"
                    />
                  </Form.Group>
                </Form>{" "}
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Done</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Form>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Add new Done item" />
                  </Form.Group>
                </Form>{" "}
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
