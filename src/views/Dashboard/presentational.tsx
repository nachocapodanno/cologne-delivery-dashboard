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
import ParcelEditForm from "../../components/ParcelEditForm";
import ParcelForm from "../../components/ParcelForm";
import * as actions from "../../redux/actions/parcel";
import { RootState } from "../../redux/reducers";
import SessionManager from "../../utils/sessionManager";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const parcels = useSelector((state: RootState) => state.parcel.parcels);
  const showSideContainer = useSelector((state: RootState) => state.parcel.showSideContainer);
  const showEditForm = useSelector((state: RootState) => state.parcel.showEditStatus);
  const editDataForm = useSelector((state: RootState) => state.parcel.editData);

  useEffect(() => {
    const id = SessionManager.getSession()?.id
    dispatch(actions.findAllBySenderId(id));
  }, []);

  const hideSideContainer = () => dispatch(actions.hideSideContainer());

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

  const handleUpdate = (
    status: any,
  ) => {
    dispatch(
      actions.update({
        status,
        id: editDataForm.id,
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
        show={showSideContainer}
        onHide={hideSideContainer}
        placement={"bottom"}
        style={{ height: "35vh" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Parcel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {showEditForm ?  <ParcelEditForm action={handleUpdate} status={editDataForm.status} /> :  <ParcelForm action={handleSubmit} /> }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Dashboard;
