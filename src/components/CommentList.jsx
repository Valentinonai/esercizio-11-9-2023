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
          addedDeleteComment={this.props.addedDeleteComment}
        />
      ));
  }
  //!Se dovessi fare una fetch ogni volta che seleziono un altro libro dovrei mettere la fetch all'interno di componentdidupdate
  //!Siccome lavoro su un array di commenti cambia la props dell'ID selezionato e si verifica il render per i nuovi commenti
  render() {
    return <ListGroup>{this.creaLista()}</ListGroup>;
  }
}
export default CommentList;
