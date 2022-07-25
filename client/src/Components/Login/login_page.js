import React, { useState } from "react";
import axios from 'axios';
import '../App.css';
import swal from 'sweetalert';

export default function LoginPage() {

    
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
            // console.log("data",data);
            swal({
                text: "Login Success",
                icon: "success",
                timer: 1500
              });
           
            localStorage.setItem('userInfo',JSON.stringify(data));
            window.sessionStorage.setItem("AuthToken", JSON.stringify(data));
            setTimeout(function(){
                window.location.href = 'http://localhost:3001/';
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

    // useEffect(() => {
    //     swal({
    //         title: "Good job!",
    //         text: "Login Success",
    //         icon: "success",
    //         button: "Ok..!!!",
    //       });
    // },[submitHandler])

  return (
    <div className='login__page_design'>
        <div className="main-wrapper">
            <form onSubmit={submitHandler}>
                <div className="form-cont-1">
                    <h1>Sign In</h1>
                    {/* <p>Forgot your password?</p> */}
                </div>
                <div className="form-cont-2">
                 
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="form-cont-3">
                    <div className="pass-cont">
                     
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                </div>
              
                <div>
                    <button type="submit" className="uc__l_btn">Submit</button>
                </div>
            </form>
            <div className="float circle c-1"></div>
            <div className="float circle c-2"></div>
            <div className="float circle c-3"></div>
            <div className="float line l-1"></div>
            <div className="float line l-2"></div>
            <div className="float line l-3"></div>
        </div>
        <div className="main-wrapper2">
            <div className="border-line"></div>
        </div>
    </div>
  )
}
