import { Container, Row, Col, Card } from "react-bootstrap";
import history from "../data/history.json";

const AllTheBook = () => {
  return (
    <Container className="width:100%">
      <Row>
        {history.map((book, index) => (
          <Col xs={12} md={4} key={`book-${index}`}>
            <Card className="mb-4">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBook;
