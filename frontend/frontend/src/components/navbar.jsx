import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 px-4 w-100">
      <Container fluid>
      <div className="d-flex align-items-center">
          <img 
            src={logo} 
            alt="Logo" 
            width="80" 
            height="80" 
            className="me-2 rounded-circle"
          />
          <div 
            className="p-2 px-3 text-white fw-bold"
            style={{ fontSize: "2.3rem" }}
          >
            Productos Challenge
          </div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/productos" className="mx-2">Artículos</Nav.Link>
            <Nav.Link as={Link} to="/precios-especiales" className="mx-2">Precios Especiales</Nav.Link>
            <Nav.Link as={Link} to="/gestion-precios" className="mx-2">Subida</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
