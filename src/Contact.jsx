import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!message.trim()) {
      setError("Message is required");
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setError("Email must be a Gmail address");
      return;
    }

    setError(""); 

   
    alert(`Thank you ${name}! Your message has been sent.`);

 
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Your Name"
            className="mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            type="email"
            placeholder="Your Email"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Message"
            className="mb-3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit" className="contact-btn">
            Send
          </Button>
        </Form>
      </Container>
    </section>
  );
}
