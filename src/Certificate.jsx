import { Container } from "react-bootstrap";

export default function Certificates() {
  const certificates = [
    { name: "My Certificate", file: "NSNCV1024132.pdf" }
  ];

  return (
    <section id="certificates" className="section">
      <Container style={{ textAlign: "center" }}>
        <h2 className="section-title">Certificates</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {certificates.map((cert, index) => (
            <li key={index} style={{ marginBottom: "12px" }}>
              <a
                href={`/${cert.file}#toolbar=0`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "#000" }}
              >
                👉 Open {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
