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
      <Row className="p-5 bg-dark text-secondary gy-3 pt-0 ">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="display-1">{this.props.books[0].category.toUpperCase()}</h2>
          <Form onSubmit={this.filterBookList}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  value={this.state.ricerca}
                  onChange={(event) => this.setState({ ricerca: event.target.value })}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
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
