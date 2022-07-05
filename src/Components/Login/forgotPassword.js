import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const ForgotPassword = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}
      >
        <img
          className="mb-4 profile-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png"
          alt="profile"
        />
        <h1>ForgotPassword</h1>
        <Form.Group md="6" controlId="validationCustom03">
          <Form.Label>Email address: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email ID.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Text className="mb-6" id="backtoLogin">
          <nav>
            <Link to="/">Back to Login?</Link>
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
