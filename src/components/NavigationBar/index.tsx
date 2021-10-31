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
  const id = SessionManager.getSession()?.id
  const handleReload = () => dispatch(actions.findAllBySenderId(id));
  const username = SessionManager.getSession()?.username;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Cologne Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Button
            className="d-none d-sm-block"
            size="sm"
            variant="primary"
            onClick={handleCreate}
          >
            New Parcel
          </Button>
          <Button
            className="d-sm-none"
            size="sm"
            variant="light"
            onClick={handleCreate}
          >
            <Emoji symbol="➕" />
          </Button>
          <Button
            className="d-none d-sm-block ms-3"
            size="sm"
            variant="success"
            onClick={handleReload}
          >
            Reload
          </Button>
          <Button
            className="d-sm-none"
            size="sm"
            variant="light"
            onClick={handleReload}
          >
            <Emoji symbol="🔃" />
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
