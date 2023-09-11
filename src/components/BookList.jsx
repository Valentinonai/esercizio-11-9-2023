import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    ricerca: "",
    books: this.props.books,
    booksOriginal: this.props.books,
    asinSelected: null,
  };
  filterBookList = (event) => {
    event.preventDefault();
    this.setState({ books: this.props.books, booksOriginal: this.props.books }, () => {
      this.state.ricerca
        ? this.setState(
            {
              books: this.state.books.filter((elem) =>
                elem.title.toUpperCase().includes(this.state.ricerca.toUpperCase())
              ),
            },
            () => this.setState({ ricerca: "" })
          )
        : this.setState(
            {
              books: this.state.booksOriginal,
            },
            () => this.setState({ ricerca: "" })
          );
    });
  };
  asinSelect = (value) => {
    this.setState({ asinSelected: value });
  };
  render() {
    return (
      <Row className="p-5 bg-dark text-secondary gy-3 pt-5 px-4">
        <Row className=" justify-content-between align-items-center mb-3">
          <Col xs={12} md={6}>
            <h2 className="display-2 display-md-1">{this.props.books[0].category.toUpperCase()}</h2>
          </Col>
          <Col xs={12} md={6}>
            <Form onSubmit={this.filterBookList}>
              <Row className="justify-content-md-end">
                <Col xs={12} md={8}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    value={this.state.ricerca}
                    onChange={(event) => this.setState({ ricerca: event.target.value })}
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Button className="mt-3 mt-md-0" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        {this.state.books.length > 0 ? (
          this.state.books[0].category === this.props.books[0].category ? (
            this.state.books.map((elem, index) => (
              <SingleBook
                book={elem}
                key={`p:${index}`}
                selectBook={this.props.selectBook}
                oldBookSelected={this.state.asinSelected}
                asinSelect={this.asinSelect}
                entireBooks={this.props.books}
              />
            ))
          ) : (
            this.props.books.map((elem, index) => (
              <SingleBook
                book={elem}
                key={`p:${index}`}
                oldBookSelected={this.state.asinSelected}
                selectBook={this.props.selectBook}
                asinSelect={this.asinSelect}
                entireBooks={this.props.books}
              />
            ))
          )
        ) : (
          <Alert key={"warning"} variant={"warning"}>
            Nessun libro trovato
          </Alert>
        )}
      </Row>
    );
  }
}

export default BookList;
