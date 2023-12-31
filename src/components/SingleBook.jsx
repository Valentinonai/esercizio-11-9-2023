import { Component } from "react";
import { Badge, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    borderColor: "transparent",
  };

  toggleClass = () => {
    this.state.selected
      ? this.setState({ selected: false, borderColor: "transparent" }, () => {
          this.props.selectBook(false, "", "");
          this.props.asinSelect("");
        })
      : this.setState({ selected: true, borderColor: "red" }, () => {
          this.props.selectBook(true, this.props.book.asin, this.props.book.title);
          this.props.asinSelect(this.props.book.asin);
        });
  };
  componentDidUpdate(prevprops) {
    if (this.props.book.asin === prevprops.oldBookSelected) {
      this.setState({ selected: false, borderColor: "transparent" });
    }
    if (prevprops.entireBooks !== this.props.entireBooks) {
      this.setState({ selected: false, borderColor: "transparent" });
      this.props.asinSelect("");
    }
  }
  render() {
    return (
      <Col xs="12" sm="6" md="4" lg="3">
        <Card
          style={{
            overflow: "hidden",
            backgroundColor: "#9b9b9b",
            boxShadow: "0 0 2px 2px gray",
            borderColor: [this.state.borderColor],
          }}
          className="CardSingola"
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ borderRadius: "0 0 5px 5px", boxShadow: "0 0 2px 2px black", cursor: "pointer" }}
            onClick={this.toggleClass}
          />
          <Card.Body>
            <Card.Title
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                color: "#363434",
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "start",
                marginBottom: "20px",
              }}
            >
              {this.props.book.title}
            </Card.Title>
            <Card.Text className="d-flex justify-content-end">
              <Badge bg="dark">{this.props.book.price} $</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
