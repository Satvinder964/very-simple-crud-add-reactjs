import React from "react";
import "./styles.css";
import Home from "./Home";
import VIew from "./VIew";
import Account from "./Account";
import Nav from "react-bootstrap/Nav";
import Edit from "./Edit";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Navmy() {
  return (
    <Router>
      <div className="hello">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">Simple Crud App</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/account">Add User</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/edit/:id"></Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/View/:id"></Link>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/View/:id">
          <VIew />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
