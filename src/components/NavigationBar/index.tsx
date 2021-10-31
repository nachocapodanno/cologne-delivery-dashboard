import { Button, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as actions from "../../redux/actions/parcel";
import { useDispatch } from "react-redux";
import SessionManager from "../../utils/sessionManager";
import Emoji from "../Emoji";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const handleCreate = () => dispatch(actions.handleCreate());
  const username = SessionManager.getSession()?.username;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Cologne Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Button
            className="d-xs-none"
            size="sm"
            variant="primary"
            onClick={handleCreate}
          >
            New Parcel
          </Button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <span className="navbar-text" style={{ color: "#000000"}}>
                <Emoji symbol="👋" /> {`Hi ${username}!`}
              </span>
              <Nav.Link href="/login">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
