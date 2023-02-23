import { Container, Row, Col, Form } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    // per cercare i libri faccio un form. devo collegare lo stato all'input con value e l'input allo stato con onClick o OnChange
    search: "",
  };
  render() {
    return (
      <>
        <Container className="width:100%">
          <Row>
            <Col xs={12} md={4}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Cerca un libro</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cerca un libro.."
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            {this.props.propbook
              .filter((book) => book.title.toLowerCase().includes(this.state.search))

              .map(
                (
                  book,
                  index //propbook è il nome della prop che ho messo in app.js. book è il singolo elemento
                ) => (
                  <Col xs={12} md={4} key={`book-${index}`}>
                    <SingleBook book={book} /> {/*{book} questo è il songolo elemento del map*/}
                  </Col>
                )
              )}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
