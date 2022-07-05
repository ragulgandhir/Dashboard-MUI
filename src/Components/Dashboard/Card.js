import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function CardDetail() {
  return (
    <div>
        <Row xs={1} md={3} className="g-4">
        <Col>
        <Card bg="info" variant="info" style={{ width: '18rem', marginLeft:'5.5rem'}}>
        <Card.Header>Products</Card.Header>
        <Card.Body>
          <Card.Title>Available Product</Card.Title>
          <Card.Text>
            InStock Product: 30
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <br />
      <Col>
      <Card bg="warning" variant="warning" style={{ width: '18rem', marginLeft:'3.0rem' }}>
        <Card.Header>Orders</Card.Header>
        <Card.Body>
          <Card.Title>Today's Orders</Card.Title>
          <Card.Text>
            Orders Count: 100
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <br />
      <Col>
      <Card bg="success" variant="success" style={{ width: '18rem' }}>
        <Card.Header>Users Count</Card.Header>
        <Card.Body>
          <Card.Title>Active Users</Card.Title>
          <Card.Text>
            Active Users: 10
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </div>
  );
}
export default CardDetail;
