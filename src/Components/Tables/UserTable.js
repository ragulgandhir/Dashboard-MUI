import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

function UserTable() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#User_ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>UserFullName</th>
            <th>Email-ID</th>
            <th>Phone No</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Denis</td>
            <td>Recheard</td>
            <td>Denis Recheard</td>
            <td>denis@postbox.com</td>
            <td>+1 635 787 3989</td>
            <td>38</td>
            <td>09/22/1984</td>
            <td>
            <Button variant="info">View</Button>{' '}
            <Button variant="secondary">Edit</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Larry</td>
            <td>Page</td>
            <td>Larry Page</td>
            <td>larry@yahoo.com</td>
            <td>+1 356 787 7838</td>
            <td>32</td>
            <td>12/05/1990</td>
            <td>
            <Button variant="info">View</Button>{' '}
            <Button variant="secondary">Edit</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Haris</td>
            <td>Morison</td>
            <td>Haris Morison</td>
            <td>haris@twitter.com</td>
            <td>+1 563 783 3566</td>
            <td>34</td>
            <td>07/25/1987</td>
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

export default UserTable;
