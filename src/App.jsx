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
      title: null,
    },
  };
  scegli = (book) => {
    this.setState({ books: book });
    this.setState({ selected: { state: null, iDBookSelected: null } });
  };
  selectBook = (stato, id, title) => {
    this.setState({ selected: { state: stato, iDBookSelected: id, title } });
  };
  render() {
    return (
      <div className="App">
        <TopBar Fn={this.scegli} />
        <Container fluid style={{ marginTop: "70px" }} className="bg-dark pb-3">
          <Row>
            <Col xs={7} md={9}>
              <BookList books={this.state.books} selectBook={this.selectBook} />
            </Col>
            <Col
              xs={5}
              md={3}
              style={{
                position: "fixed",
                top: "65px",
                right: 0,
                backgroundColor: "white",
                paddingTop: "20px",
                height: "100%",
                paddingBottom: "210px",
                overflowY: "scroll",
              }}
            >
              <h2>Comments</h2>
              <h5 style={{ fontWeight: "200" }} className="mb-4">
                <i>{this.state.selected.title}</i>
              </h5>
              {this.state.selected.state ? (
                <CommentArea iD={this.state.selected.iDBookSelected} selectBook={this.selectBook} />
              ) : (
                <Alert variant="dark">Seleziona un libro</Alert>
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
