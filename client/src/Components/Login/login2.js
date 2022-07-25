import React, { useState } from "react";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = async (e) => {
        e.preventDefault();
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
            // console.log("data",data.data.userList);
            console.log("data",data);
            // const items = data.data.userList;
            // {items.map(item => (
            //     <div>
            //         <h2 key={item.id}>Name: {item.name}</h2>
            //     </div>
            // )
            // )}
          
            localStorage.setItem('userInfo',JSON.stringify(data));
        }catch (error){
            console.log(error);
        }
    };

  return (
    <div className='login' style={{textAlign:"center"}}>
      
        <section className="uc__log">
            <div className="container login__card" id="uc_container">
                <div className="form-container sign-in-container">
                    <div className="loginContainer">
                    <h3>Sign in</h3>
                       
                        
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="uc__l_btn">
                                Submit
                            </Button>
                        </Form>
           
                    </div>
                </div>
               
            </div>
        
        </section>

    </div>
  )
}

