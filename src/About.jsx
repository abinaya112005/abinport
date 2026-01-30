import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="abtsection">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <img
              src="/abin3.jpg"
              alt="Profile"
              className="aboutimg"
            />
          </Col>
          
          <Col md={8}>
          <div id="abtdivpara">
            <p>
              I am a motivated and passionate frontend developer, skilled in React, HTML, CSS, Bootstrap, and React-Bootstrap. As a fresher, I’m eager to learn and build modern, responsive, and interactive web applications, while contributing to real-world projects and continuously improving my frontend skills.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
