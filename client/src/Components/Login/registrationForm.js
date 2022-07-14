import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [data,setData] = useState({ first_name:"", last_name:"", email:"", password:"", confirm_password:"", phone:"" })
    const [error, setError] = useState(''); 

    const {first_name, last_name, email, password, confirm_password, phone} = data;

    const changeHandler = (e) => {
      setData({...data,[e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) => {
        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
          e.preventDefault();
          if(!first_name || !last_name || !email || !password || !confirm_password || !phone){
            setError("Please give some input all input field");
        }else{
             console.log(data);
             setError("");
          }
          // e.stopPropagation();
        }
    
        // setValidated(true);
      // };

  return (
    <Container>
      <Form noValidate /*validated={validated}*/ onSubmit={handleSubmit} style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
        <img
          className="mb-4 profile-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png"
          alt="profile"
        />
        <h1>Please Sign Up</h1>
        {error && <h6 style={{ color: "red" }}>{error}</h6>}
        <Form.Group  md="6" controlId="validationCustom03">
        <Form.Label>First Name: </Form.Label>
          <Form.Control type="text" name="first_name" value={first_name} onChange={changeHandler} placeholder="First Name" required/>
          <Form.Control.Feedback type="invalid">Please provide a valid user firstname.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  md="6" controlId="validationCustom03">
        <Form.Label>Last Name: </Form.Label>
          <Form.Control type="text" name="last_name" value={last_name} onChange={changeHandler} placeholder="Last Name" required/>
          <Form.Control.Feedback type="invalid">Please provide a valid user lastname.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  md="6" controlId="validationCustom03">
        <Form.Label>User Email ID: </Form.Label>
          <Form.Control type="email" name="email" value={email} onChange={changeHandler} placeholder="Enter Email ID" required/>
          <Form.Control.Feedback type="invalid">Please provide a valid Email ID.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="formBasicPassword">
        <Form.Label>Password: </Form.Label>
          <Form.Control type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" required />
          <Form.Control.Feedback type="invalid">Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  md="6" controlId="validationCustom03">
        <Form.Label>Confirm Password: </Form.Label>
          <Form.Control type="password" name="confirm_password" value={confirm_password} onChange={changeHandler} placeholder="Confirm Password" required/>
          <Form.Control.Feedback type="invalid">Please password and confirm password same.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  md="6" controlId="validationCustom03">
        <Form.Label>Phone: </Form.Label>
          <Form.Control type="number" name="phone" value={phone} onChange={changeHandler} placeholder="Enter Phone Number" required/>
          <Form.Control.Feedback type="invalid">Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group className="mb-6">
          <Form.Text className="mb-6" id="backtoLogin">
          <nav>
            Back to{" "}<Link to="/">Login?</Link>
          </nav>
        </Form.Text>
        </Form.Group>
        <br />
        <div className="d-grid">
          <Button variant="primary" type="submit" name="submit">
            Submit
          </Button>
          <br />
          <Button variant="light" type="reset">
            Cancel
          </Button>
        </div>
        <p className="mt-5 text-muted">&copy; Shenll Technology Pvt Ltd(2021-2022)</p>
      </Form>
      </Container>
  );
};
export default Registration;
