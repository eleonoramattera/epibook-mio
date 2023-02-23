import { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Row>
        <Col>
          <Card
            className="mb-4"
            onClick={() => this.setState({ selected: !this.state.selected })} //devo prendere il contrario
            style={{ border: this.state.selected ? "2px solid red" : " none" }}>
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SingleBook;
