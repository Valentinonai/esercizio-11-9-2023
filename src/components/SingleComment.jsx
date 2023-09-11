import { Component } from "react";
import { Alert, ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  state = {
    alert: {
      stato: false,
      variant: "info",
      message: "",
    },
  };
  EliminaCommento = async () => {
    try {
      const risp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.elementId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YjRlMThkM2Q0OTAwMTRjZmQ3ZDQiLCJpYXQiOjE2OTQwODYzNjksImV4cCI6MTY5NTI5NTk2OX0.UMzNavOw7SiIyoEXvdOL_L1zqNhivjz340RkCbm8TtM",
        },
      });
      if (risp.ok) {
        await risp.json();
        this.setState({
          alert: {
            stato: true,
            variant: "success",
            message: "Eliminazione Completata",
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
            message: `Errore:${risp.status}`,
          },
        });
        setTimeout(() => {
          this.setState({ alert: { stato: false, variant: "danger", message: "" } });
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        {this.state.alert.stato && <Alert variant={this.state.alert.variant}>{this.state.alert.message}</Alert>}

        <ListGroup.Item className="bg-secondary text-white d-flex justify-content-between">
          <div>{this.props.comment}</div>
          <div onClick={this.EliminaCommento}>
            <i className="bi bi-trash3" style={{ cursor: "pointer" }}></i>
          </div>
        </ListGroup.Item>
      </>
    );
  }
}
export default SingleComment;
