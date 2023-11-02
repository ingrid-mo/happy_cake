import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navegation() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
<Link to= "/" className="text-light mt-2 pe-2 text-decoration-none"> 
Home
</Link>
<Link to= "/contact" className="text-light mt-2 pe-2 text-decoration-none"> 
contact
</Link>
          </Nav>
        </Container>
      </Navbar>

 
    </>
  );
}

export default Navegation;