import { Component } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    working: false,
    alert: {
      stato: false,
      variant: "info",
      message: "",
    },
  };
  aggiungiCommento = async (event) => {
    event.preventDefault();
    this.setState({ working: true });
    try {
      const ris = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        method: "POST",
        body: JSON.stringify({ comment: this.state.comment, rate: this.state.rate, elementId: this.props.iD }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YjRlMThkM2Q0OTAwMTRjZmQ3ZDQiLCJpYXQiOjE2OTQwODYzNjksImV4cCI6MTY5NTI5NTk2OX0.UMzNavOw7SiIyoEXvdOL_L1zqNhivjz340RkCbm8TtM",
        },
      });
      if (ris.ok) {
        await ris.json();
        this.setState({
          alert: {
            stato: true,
            variant: "success",
            message: "Operazione Completata",
          },
        });
        setTimeout(() => {
          this.setState({ alert: { stato: false, variant: "success", message: "" } });
        }, 2500);
        this.props.addedDeleteComment();
      } else {
        this.setState({
          alert: {
            stato: true,
            variant: "danger",
            message: `Errore:${ris.status}`,
          },
        });
        setTimeout(() => {
          this.setState({ alert: { stato: false, variant: "danger", message: "" } });
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ comment: "", rate: "", working: false });
    }
  };
  render() {
    return (
      <>
        {this.state.working && <Spinner animation="border" />}
        {!this.state.working && (
          <>
            {this.state.alert.stato && <Alert variant={this.state.alert.variant}>{this.state.alert.message}</Alert>}

            <Form className="m-1 p-2 border rounded shadow mt-5" onSubmit={this.aggiungiCommento}>
              <h5>Aggiungi Commento</h5>
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Comment"
                  value={this.state.comment}
                  onChange={(event) => this.setState({ comment: event.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Rate from 1 to 5"
                  min={1}
                  max={5}
                  value={this.state.rate}
                  onChange={(event) => this.setState({ rate: event.target.value })}
                />
              </Form.Group>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </>
        )}
      </>
    );
  }
}
export default AddComment;
