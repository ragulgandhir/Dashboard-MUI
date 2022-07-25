import { React, useState } from 'react'
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';

export default function SignUp() {

    /////////////////////// For Register

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

///////////////////////Register Controller


const submitHandler = async (e) => {
    e.preventDefault();
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
            address,
            mobileNumber
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
      
        setTimeout(function(){
            window.location.href = 'http://localhost:3001/login_page';
         }, 2000);

    }catch (error){
        swal({
            text: error.response.data.message,
            icon: "error",
            timer: 1500
          });

        console.log(error);
    }
};


  return (

    <div className='d__reg_form'>
        <div class="container">
        <div class="title">SignUp</div>
        <form onSubmit={submitHandler} method="POST">
            <div class="user__details">
            <div class="input__box">
                <span class="details">UserName</span>
                <input type="text" placeholder="John Smith" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
            />
            </div>
            <div class="input__box">
                <span class="details">Email</span>
                <input type="email" placeholder="johnWC98@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </div>
            <div class="input__box">
                <span class="details">Password</span>
                <input type="password" placeholder="********" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                required 
            />
            </div>
            <div class="input__box">
                <span class="details">Confirm Password</span>
                <input type="password" placeholder="********" required />
            </div>
            <div class="input__box">
                <span class="details">Address</span>
                <input type="text" placeholder="Address" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                required 
                />
            </div>
            <div class="input__box">
                <span class="details">Mobile No.</span>
                <input type="number" placeholder="Mobile" 
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                required 
                />
            </div>

            </div>
            <div class="button">
            <input type="submit" value="Register"/>
            </div>
        </form>
        </div>
    </div>
  )
}
