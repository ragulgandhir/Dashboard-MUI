import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

function OrderTable() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#Order_ID</th>
            <th>Product Name</th>
            <th>Serial No</th>
            <th>Price(₹)</th>
            <th>Quantity</th>
            <th>Total Price(₹)</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apple</td>
            <td>APP7873</td>
            <td>₹80</td>
            <td>10</td>
            <td>₹800</td>
            <td>07/20/2022</td>
            <td>Dispatched</td>
            <td>
            <Button variant="info">View</Button>{' '}
            <Button variant="secondary">Edit</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mango</td>
            <td>MG5053</td>
            <td>₹50</td>
            <td>10</td>
            <td>₹500</td>
            <td>07/20/2022</td>
            <td>Packed</td>
            <td>
            <Button variant="info">View</Button>{' '}
            <Button variant="secondary">Edit</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Kiwi</td>
            <td>KW7867</td>
            <td>₹90</td>
            <td>5</td>
            <td>₹450</td>
            <td>07/20/2022</td>
            <td>Billed</td>
            <td>
            <Button variant="info">View</Button>{' '}
            <Button variant="secondary">Edit</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OrderTable;
