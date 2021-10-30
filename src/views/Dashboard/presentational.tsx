import { useEffect } from "react";
import {
  Col,
  Container,
  Offcanvas,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DashboardRow from "../../components/DashboardRow";
import ParcelForm from "../../components/ParcelForm";
import * as actions from "../../redux/actions/parcel";
import { RootState } from "../../redux/reducers";
import SessionManager from "../../utils/sessionManager";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const parcels = useSelector((state: RootState) => state.parcel.parcels);
  const show = useSelector((state: RootState) => state.parcel.showCreateForm);

  useEffect(() => {
    const id = SessionManager.getSession()?.id
    dispatch(actions.findAllBySenderId(id));
  }, []);

  const handleShow = () => dispatch(actions.handleShow());

  const handleSubmit = (
    pickupAddress: any,
    deliveryAddress: any,
    weight: any,
    description: any
  ) => {
    dispatch(
      actions.create({
        pickupAddress,
        deliveryAddress,
        weight,
        description,
      })
    );
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} id="page-content-wrapper">
            {isLoading && <em>Loading parcels...</em>}
            <Table responsive="sm md lg xl">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Weight</th>
                  <th>Status</th>
                  <th>Pickup Address</th>
                  <th>Pickup Time</th>
                  <th>Delivery Address</th>
                  <th>Delivery Time</th>
                  <th>Sender</th>
                  <th>Biker</th>
                </tr>
              </thead>
              <tbody>
                {parcels &&
                  parcels.map((value: any, key: any) => {
                    return <DashboardRow key={key} item={value}/>;
                  })}
              </tbody>
            </Table>
            {parcels && parcels.length === 0 && 
            <div className="container py-5"><div className="alert alert-secondary mt-sm-5 ms-sm-5" role="alert">
            No parcels loaded yet.
          </div>  </div>}
          </Col>
        </Row>
      </Container>
      <Offcanvas
        show={show}
        onHide={handleShow}
        placement={"bottom"}
        style={{ height: "35vh" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Parcel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ParcelForm action={handleSubmit} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Dashboard;
