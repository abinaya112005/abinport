import { Container, Row, Col } from "react-bootstrap";

const skills = [
  { title: "HTML", img: "/htmlloo.png" },
  { title: "CSS", img: "/css3.png" },
  { title: "JavaScript", img: "/javascript.png" },
  { title: "Bootstrap", img: "/bootstrapimg.png" },
  { title: "React JS", img: "/React-icon.svg.png" },
  { title: "MongoDB", img: "/mongodb.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container className="skills-container">
        <h2 className="skills-section-title">Skills</h2>

        <div className="skills-wrapper">
          <Row className="skills-row justify-content-center mb-4">
            {skills.slice(0, 6).map((skill, index) => (
              <Col xs={12} sm={4} key={index} className="skills-col">
                <div className="skills-box">
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="skills-img"
                  />
                  <h5 className="skills-title">{skill.title}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
