import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const ForgotPassword = () => {
  const [validated, setValidated] = useState(false);
  const [data,setData] = useState({ email:"" })
  const [error, setError] = useState('');

  const { email } = data;

  const changeHandler = (e) => {
    setData({...data,[e.target.name]:[e.target.value]});
  }

  const handleSubmit = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
      event.preventDefault();
      if(!email){
        setError("Please give some input email field");
    }else{
         console.log(data);
         setError("");
      }
      // event.stopPropagation();
    }

  //   setValidated(true);
  // };

  return (
    <Container>
      <Form
        noValidate
        /*validated={validated}*/
        onSubmit={handleSubmit}
        style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}
      >
        <img
          className="mb-4 profile-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png"
          alt="profile"
        />
        <h1>ForgotPassword</h1>
        {error && <h6 style={{ color: "red" }}>{error}</h6>}
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" name="email" value={email} onChange={changeHandler} placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email ID.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Text className="mb-6" id="backtoLogin">
          <nav>
          Back to{" "}<Link to="/login">Login?</Link>
          </nav>
        </Form.Text>
        <br />
        <br />
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Reset
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
export default ForgotPassword;
