import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import "../../App.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [register, setRegister] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // set configurations
    // const configuration = {
    //   method: "post",
    //   url: "http://localhost:3000/api/users/register",
    //   data: {
    //     name,
    //     email,
    //     password,
    //     mobileNumber,
    //     address,
    //   },
    // };

    // make the API call
    // axios(configuration)
    //   .then((result) => {
    //     setRegister(true);
    //   })
    //   .catch((error) => {
    //     error = new Error();
    //   });

    // if (!name || !email || !password || !mobileNumber || !address) {
    //   setError("Please give some input all input field");
    // } else {
    //   setError("");
    // }

    try {
      const config = {
          headers: {
              "Content-type":"application/json"
          }
      }
      const { data } = await axios.post("http://localhost:3000/api/users/register", 
      {
          name,
          email,
          password,
          mobileNumber,
          address
      },
      config
  );
  swal({
      text: "Register Success",
      icon: "success",
      timer: 1500
    });

      console.log("data",data);
      localStorage.setItem('userRegisterInfo',JSON.stringify(data));
      // window.location = 'http://localhost:3001/login_page';
      setRegister(true);
    
      setTimeout(function(){
          window.location.href = 'http://localhost:3001/login';
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

  if (!name || !email || !password || !mobileNumber || !address) {
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
        <h1>Please Sign Up</h1>
        {/* {error && <h6 style={{ color: "red" }}>{error}</h6>} */}
        {/* {register && <Navigate to="/login" replace={true} />} */}
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
        <Form.Group className="mb-6" controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
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
        <Form.Group className="mb-6">
          <Form.Text className="mb-6" id="backtoLogin">
            <nav>
              Back to <Link to="/login">Login?</Link>
            </nav>
          </Form.Text>
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
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </Form>
    </Container>
  );
};
export default Registration;
