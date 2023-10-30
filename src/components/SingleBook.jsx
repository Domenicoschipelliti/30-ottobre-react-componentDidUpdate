import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12} md={8} className="d-flex">
              <Card
                onClick={() =>
                  this.setState({ selected: !this.state.selected })
                }
                style={{
                  border: this.state.selected ? "3px solid red" : "none",
                }}
              >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    {this.props.book.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              {this.state.selected && (
                <CommentArea asin={this.props.book.asin} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SingleBook;
