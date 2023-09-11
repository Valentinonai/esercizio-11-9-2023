import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  creaLista() {
    return this.props.review
      .filter((elem) => elem.elementId === this.props.iD)
      .map((elem, index) => (
        <SingleComment
          comment={elem.comment}
          key={`List-${index}`}
          elementId={elem._id}
          index={index}
          Reload={this.props.Reload}
          addedComment={this.props.addedComment}
        />
      ));
  }
  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.iD !== this.props.iD) {
      this.creaLista();
    }
  }
  render() {
    return <ListGroup>{this.creaLista()}</ListGroup>;
  }
}
export default CommentList;
