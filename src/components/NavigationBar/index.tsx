import { Button, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as actions from "../../redux/actions/parcel";
import { useDispatch } from 'react-redux';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(actions.handleShow());

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Cologne Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Button className='d-xs-none' size="sm" variant="primary" onClick={handleShow}>
            New Parcel
          </Button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/login">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;