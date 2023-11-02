import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navegation() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-light mt-2 pe-2 text-decoration-none">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/Group%2039%20(1).png?alt=media&token=4714770b-2eae-49bd-874d-a2bb3c5dcdc1&_gl=1*5k6t8b*_ga*MTExNzIyMzk2OC4xNjk4ODgyMDUx*_ga_CW55HF8NVT*MTY5ODk2NjQ1OC40LjEuMTY5ODk2NzkyMy41My4wLjA."
                alt="logo happy cake"
              />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="text-light mt-2 pe-2 text-decoration-none">
              Home
            </Link>
            <Link
              to="/contact"
              className="text-light mt-2 pe-2 text-decoration-none"
            >
              contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegation;
