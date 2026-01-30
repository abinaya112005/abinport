import { Container, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container className="hero-content">
        <h1>
          Hi, I'm <span>Abinaya</span>
        </h1>
        <p>Fresher Frontend Developer (React)</p>
        <Button href="#skills">View Skills</Button>
      </Container>
    </section>
  );
}
