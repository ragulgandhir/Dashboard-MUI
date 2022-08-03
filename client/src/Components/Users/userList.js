import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import NavbarItems from "../Dashboard/Navbar";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserTable() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/userList`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
           error = new Error();
           console.log(error);
        });
}, [])

const handleDeleteUser = (id) => {
  if (window.confirm("Are you sure you want delete this user ?")) {
    console.log("Delete")
  }
};

  return (
    <div>
       <NavbarItems />
      <Table striped bordered hover variant="dark" style={{ width: '69.8rem', marginLeft:'5.5rem'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {userData.map((user) => {
          return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobileNumber}</td>
            <td>{user.address}</td>
            <td>{user.status}</td>
            <td>
            <Button variant="info" onClick={() => navigate(`/users/details/${user.id}`)}><VisibilityOutlinedIcon/></Button>{' '}
            <Button variant="secondary" onClick={() => navigate(`/users/update/${user.id}`)}><ModeEditOutlineOutlinedIcon/></Button>{' '}
            <Button variant="danger" onClick={() => handleDeleteUser(`/users/delete/${user.id}`)}><DeleteOutlineOutlinedIcon/></Button>{' '}
            </td>
          </tr>
          )})}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
