import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark" style={{ borderTop: "1px solid gray" }}>
      <Container fluid="md" className="bg-dark text-secondary py-4">
        <Row className="justify-content-center bg-dark align-items-start">
          <Col xs={3} md={2}>
            <div className="d-flex flex-column align-items-start">
              <h3>Library</h3>
              <p style={{ fontSize: "10px", marginBottom: "5px" }}>React & Boostrap</p>
              <p style={{ fontSize: "10px", marginBottom: "5px" }}>online library</p>
              <p style={{ fontSize: "10px", marginBottom: "5px" }}>currently v1.0.0</p>
            </div>
          </Col>
          <Col xs={3} md={2}>
            <div className="d-flex flex-column align-items-start">
              <h4 style={{ fontSize: "20px" }}>Links</h4>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  Home
                </a>
              </div>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  Docs
                </a>
              </div>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  List of books
                </a>
              </div>
            </div>
          </Col>
          <Col xs={3} md={2}>
            <div className="d-flex flex-column align-items-start">
              <h4 style={{ fontSize: "20px" }}>Genere</h4>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  Avventura
                </a>
              </div>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  Horror
                </a>
              </div>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  Fantasy
                </a>
              </div>
            </div>
          </Col>
          <Col xs={3} md={2}>
            <div className="d-flex flex-column align-items-start">
              <h4 style={{ fontSize: "20px" }}>Community</h4>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  Issues
                </a>
              </div>
              <div>
                <a style={{ fontSize: "12px" }} href="#link">
                  Discussions
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
