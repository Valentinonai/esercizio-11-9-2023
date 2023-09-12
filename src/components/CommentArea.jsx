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
    addedDeleteComment: false,
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
  addedDeleteComment = () => {
    this.setState({ addedDeleteComment: !this.state.addedDeleteComment });
  };
  componentDidUpdate = async (prevprops, prevstate) => {
    if (prevstate.addedDeleteComment !== this.state.addedDeleteComment) {
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
          });
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
    }
  };
  render() {
    return (
      <>
        {this.state.working && <Spinner animation="border" />}
        {!this.state.working && (
          <>
            {this.state.alert.stato && <Alert variant={this.state.alert.variant}>{this.state.alert.message}</Alert>}
            {!this.state.alert.stato &&
            this.state.review.filter((elem) => elem.elementId === this.props.iD).length === 0 ? (
              <h5>Nessun Commento</h5>
            ) : (
              <CommentList
                review={this.state.review}
                Reload={this.Reload}
                select={this.state.select}
                iD={this.props.iD}
                addedDeleteComment={this.addedDeleteComment}
              />
            )}

            <AddComment iD={this.props.iD} addedDeleteComment={this.addedDeleteComment} />
          </>
        )}
      </>
    );
  }
}
export default CommentArea;
