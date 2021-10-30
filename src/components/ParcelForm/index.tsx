import { Button, Col, Form, Row } from "react-bootstrap";

const ParcelForm = ({ action }: any) => {
  const submit = (e: any) => {
    e.preventDefault();
    action(
      e.target.pickupAddress.value,
      e.target.deliveryAddress.value,
      e.target.weight.value,
      e.target.description.value
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center container ">
    <Row>
    <Form onSubmit={submit}>
      <Row>
        <Col sm={3}>
          <Form.Control
            name="pickupAddress"
            type="text"
            placeholder="Pickup Address"
            required
          />
        </Col>
        <Col sm={3}>
          <Form.Control
            name="deliveryAddress"
            type="text"
            placeholder="Delivery Address"
            required
          />
        </Col>
        <Col sm={3}>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
            required
          />
        </Col>
        <Col sm={2}>
          <Form.Control
            name="weight"
            type="number"
            placeholder="Weight"
            required
          />
        </Col>
        <Col sm={1}>
          <Button type="submit">Create</Button>
        </Col>
      </Row>
    </Form>
    </Row>
    </div>
  );
};

export default ParcelForm;
