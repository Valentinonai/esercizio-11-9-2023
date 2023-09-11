import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    review: [],
    working: true,
    alert: {
      stato: false,
      variant: "info",
      message: "",
    },
    select: false,
  };
  componentDidMount = async () => {
    try {
      const risp = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        // ${this.props.iD}
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YjRlMThkM2Q0OTAwMTRjZmQ3ZDQiLCJpYXQiOjE2OTQwODYzNjksImV4cCI6MTY5NTI5NTk2OX0.UMzNavOw7SiIyoEXvdOL_L1zqNhivjz340RkCbm8TtM",
        },
      });
      if (risp.ok) {
        const libro = await risp.json();
        console.log(libro);
        this.setState({
          review: libro,
          alert: {
            stato: true,
            variant: "info",
            message: "Caricamento Completato",
          },
        });
        setTimeout(() => {
          this.setState({ alert: { stato: false, variant: "info", message: "" } });
        }, 2500);
      } else {
        this.setState({
          alert: {
            stato: true,
            variant: "danger",
            message: `Errore:${risp.status}`,
          },
        });
        setTimeout(() => {
          this.setState({ alert: { stato: false, variant: "danger", message: "" } });
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ working: false });
    }
  };

  render() {
    return (
      <>
        {this.state.working && <Spinner animation="border" />}
        {!this.state.working && (
          <>
            {this.state.alert.stato && <Alert variant={this.state.alert.variant}>{this.state.alert.message}</Alert>}

            <CommentList
              review={this.state.review}
              Reload={this.Reload}
              select={this.state.select}
              iD={this.props.iD}
            />
            <AddComment iD={this.props.iD} />
          </>
        )}
      </>
    );
  }
}
export default CommentArea;
