import { Container, Card, CardGroup } from "react-bootstrap";

export default function Education() {
  return (
    <section id="education" className="section">
      <Container>
        <h2 className="section-title">Education</h2>
        <CardGroup>
          <Card className="mx-2">
            <Card.Body>
              <Card.Title>B.Sc Computer Science</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">MS University – St. Hindu College</Card.Subtitle>
              <Card.Text>Year: 2022 - 2025 <br/> CGPA: 7.42</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mx-2">
            <Card.Body>
              <Card.Title>Java Full Stack Development Course</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Training Institute</Card.Subtitle>
              <Card.Text>Learned frontend and backend fundamentals including HTML, CSS, JS, React and MongoDB.</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </section>
  );
}
