import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ParcelEditForm = ({ action, status }: any) => {
    const [parcelStatus, setParcelStatus] = useState(status);
  
    const submit = (e: any) => {
    e.preventDefault();
    action(parcelStatus);
  };

  return (
    <div className="d-flex justify-content-center align-items-center container ">
      <Row>
        <Form onSubmit={submit}>
          <Row>
            <Col sm={8}>
              <Form.Select
                value={parcelStatus}
                aria-label="Default select example"
                onChange={(e) => {
                  setParcelStatus(e.target.value);
                }}
                required
              >
                <option value="1">PUBLISHED</option>
                <option value="2">ASSIGNED</option>
                <option value="3">PICKED</option>
                <option value="4">DELIVERED</option>
              </Form.Select>
            </Col>
            <Col sm={2}>
              <Button type="submit">Update</Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

export default ParcelEditForm;
