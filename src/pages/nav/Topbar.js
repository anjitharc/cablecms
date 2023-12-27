import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        window.location.href = "/";
      };

  return (
    <Navbar sticky="top" expand="md" className="bg-body-tertiary"  bg="primary" data-bs-theme="dark" >
      <Container>
      
          <Navbar.Brand href="/">
            <img
              alt=""
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CableMan
          </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="LEAD" id="basic-nav-dropdown">
              <NavDropdown.Item href="/leadlist">LEAD LIST</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

     
                  <Button variant="outline-success" onClick={handleLogout}>LOGOUT</Button>
               
        </Navbar.Collapse>
       
      </Container>
 

   

    </Navbar>
  );
}

export default BasicExample;