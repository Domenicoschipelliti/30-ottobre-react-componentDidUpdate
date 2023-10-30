import { Col, ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => (
  <Col>
    <ListGroup style={{ color: "black" }} className="mt-2">
      {commentsToShow.map((comment) => (
        <SingleComment comment={comment} key={comment._id} />
      ))}
    </ListGroup>
  </Col>
);

export default CommentList;
