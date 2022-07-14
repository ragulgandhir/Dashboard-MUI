import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [data,setData] = useState({ username:"", password:"" })
    const [error, setError] = useState('');

    const {username,password} = data;

    const changeHandler = (e) => {
      setData({...data,[e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) => {
        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
          e.preventDefault();
          if(!password){
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
        <h1>Please Sign In</h1>
        {error && <h6 style={{ color: "red" }}>{error}</h6>}
        <Form.Group  md="6" controlId="validationCustom03">
        <Form.Label>Email address: </Form.Label>
          <Form.Control type="email" name="username" value={username} onChange={changeHandler} placeholder="Enter email" required/>
          <Form.Control.Feedback type="invalid">Please provide a valid Email ID.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-6" controlId="formBasicPassword">
        <Form.Label>Password: </Form.Label>
          <Form.Control type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" required />
          <Form.Control.Feedback type="invalid">Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group className="mb-6" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me"/>&ensp;
          <Form.Text className="mb-6" id="backtoLogin">
          <nav>
            <Link to="/ForgotPassword">ForgotPassword?</Link>
            &nbsp; &nbsp;
            Not yet{" "}<Link to="/Registration">Sign Up?</Link>
          </nav>
        </Form.Text>
        </Form.Group>
        <br />
        <div className="d-grid">
          <Button variant="primary" type="submit" name="submit">
            Sign in
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
export default Login;
