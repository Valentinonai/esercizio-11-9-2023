import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/topBar";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Fantasy from "./data/books/fantasy.json";
import { Component } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    books: Fantasy,
    selected: {
      state: null,
      iDBookSelected: null,
    },
  };
  scegli = (book) => {
    this.setState({ books: book });
    this.setState({ selected: { state: null, iDBookSelected: null } });
  };
  selectBook = (stato, id) => {
    this.setState({ selected: { state: stato, iDBookSelected: id } });
  };
  render() {
    return (
      <div className="App">
        <TopBar Fn={this.scegli} />
        <Container fluid>
          <Row>
            <Col xs={9}>
              <BookList books={this.state.books} selectBook={this.selectBook} />
            </Col>
            <Col xs={3} style={{ position: "fixed", top: "80px", right: 0, zIndex: "1" }}>
              <h2>Comments</h2>
              {this.state.selected.state ? (
                <CommentArea iD={this.state.selected.iDBookSelected} selectBook={this.selectBook} />
              ) : (
                <Alert variant="info">Seleziona un libro</Alert>
              )}
            </Col>
          </Row>
        </Container>

        <MyFooter />
      </div>
    );
  }
}

export default App;
