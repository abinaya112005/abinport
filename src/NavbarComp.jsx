import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar fixed="top" className="simple-navbar">
      <Container>
        <Navbar.Brand href="#home">Abinaya</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#certificates">Certificates</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
