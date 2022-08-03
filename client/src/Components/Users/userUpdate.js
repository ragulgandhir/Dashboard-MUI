import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import "../../App.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
          headers: {
              "Content-type":"application/json"
          }
      }
      const { data } = await axios.put("http://localhost:3000/api/users/update/{id}", 
      {
          name,
          email,
          mobileNumber,
          address
      },
      config
  );
  swal({
      text: "Updated Success",
      icon: "success",
      timer: 1500
    });

      console.log("data",data);
      localStorage.setItem('userUpdateInfo',JSON.stringify(data));
      setUpdate(true);
    
      setTimeout(function(){
          window.location.href = 'http://localhost:3001/User';
       }, 2000);

  }catch (error){
      swal({
          text: error.response.data.message,
          icon: "error",
          timer: 1500
        });

      console.log(error);
      error = new Error();
  }

  if (!name || !email || !mobileNumber || !address) {
      setError("Please give some input all input field");
    } else {
      setError("");
    }
  };

  return (
    <Container>
      <Form
        noValidate
        onSubmit={(e) => handleSubmit(e)}
        style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}
      >
        <img
          className="mb-4 profile-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png"
          alt="profile"
        />
        <h1>Update User Details</h1>
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>User Name: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="User Name"
            required
          />
        </Form.Group>
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>User Email ID: </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID"
            required
          />
        </Form.Group>
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Mobile Number: </Form.Label>
          <Form.Control
            type="number"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Mobile Number"
            required
          />
        </Form.Group>
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Address: </Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Your Address"
            required
          />
        </Form.Group>
        <br />
        <div className="d-grid">
          <Button
            variant="primary"
            type="submit"
            name="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
          <br />
          <Button variant="light" type="reset">
            Cancel
          </Button>
        </div>
        <p className="mt-5 text-muted">
          &copy; Shenll Technology Pvt Ltd(2021-2022)
        </p>
      </Form>
    </Container>
  );
};
export default Registration;
