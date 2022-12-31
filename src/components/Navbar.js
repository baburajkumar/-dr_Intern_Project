import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarStyles.css';
function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <h1>Waiting List</h1>
        {/* <Navbar.Brand href="#">Waiting List</Navbar.Brand>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search with Name,Ip number,Patient ID"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search </Button>
          
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavDropdown title="Waiting List" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Completed</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                review patient
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Appointment
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Online
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Investigation
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-success">New Registration</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="success">Add To Queue</Button>{' '}&nbsp;&nbsp;&nbsp;
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;