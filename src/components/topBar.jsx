import { Component } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import Fantasy from "../data/books/fantasy.json";
import History from "../data/books/history.json";
import Horror from "../data/books/horror.json";
import Romance from "../data/books/romance.json";
import Scifi from "../data/books/scifi.json";
class TopBar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        style={{ backgroundColor: "gray", position: "sticky", top: "0", zIndex: "2" }}
        className="px-3 mb-3"
      >
        <Navbar.Brand href="#home" className="text-white fs-3">
          Library-ReactBoostrap
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#browse" className="text-white">
              Browse
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={() => this.props.Fn(Fantasy)}>
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => this.props.Fn(History)}>
                History
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => this.props.Fn(Horror)}>
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => this.props.Fn(Romance)}>
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => this.props.Fn(Scifi)}>
                Scifi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-secondary" />
      </Navbar>
    );
  }
}

export default TopBar;
