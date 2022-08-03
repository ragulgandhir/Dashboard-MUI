import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import "../../App.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, setLogin] = useState(false);
  // const [error, setError] = useState("");

  // let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // set configurations
    // const configuration = {
    //   method: "post",
    //   url: "http://localhost:3000/api/users/login",
    //   data: {
    //     email,
    //     password,
    //   },
    // };

    // make the API call
    // axios(configuration)
    //   .then((response) => {
    //     setLogin(true);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     error = new Error();
    //   });

    // if (!email || !password) {
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
      const { data } = await axios.post("http://localhost:3000/api/users/login", 
      {
          email,
          password,
      },
      config
  );
      // console.log("data",data);
      swal({
          text: "Login Success",
          icon: "success",
          timer: 1500
        });
     
      localStorage.setItem('userInfo',JSON.stringify(data));
      window.sessionStorage.setItem("AuthToken", JSON.stringify(data));
      setTimeout(function(){
          window.location.href = 'http://localhost:3001/Dashboard';
       }, 2000);
       

  }catch (error){
      console.log(error)
      swal({
          text: error.response.data.message,
          icon: "error",
          timer: 1500
        });
      console.log(error);
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
        <h1>Please Sign In</h1>
        {/* {error && <h6 style={{ color: "red" }}>{error}</h6>} */}
        {/* {login && <Navigate to="/Dashboard" replace={true} />} */}
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Email address: </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
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
        <br />
        <Form.Group className="mb-6" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
          &ensp;
          <Form.Text className="mb-6" id="backtoLogin">
            <nav>
              <Link to="/ForgotPassword">ForgotPassword?</Link>
              &nbsp; &nbsp; Not yet <Link to="/Registration">Sign Up?</Link>
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
            Sign in
          </Button>
          <br />
          <Button variant="light" type="reset">
            Cancel
          </Button>
        </div>
        <p className="mt-5 text-muted">
          &copy; Shenll Technology Pvt Ltd(2021-2022)
        </p>
        {/* {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )} */}
      </Form>
    </Container>
  );
};
export default Login;
