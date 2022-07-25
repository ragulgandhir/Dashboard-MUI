import { React, useState } from 'react'
import { Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default function ProtectedRoute() {

  const [isLogout, setLogout] = useState('Logout')

    const authToken = window.sessionStorage.getItem("AuthToken");
    let decoded = ''
    
    if (authToken === null || authToken === '') {
      console.log('authToken', authToken); 
      return <Navigate to="/login_page" />; 
    } else {
      decoded = jwt_decode(authToken);
    }

 
    function logout () {
        window.sessionStorage.removeItem("AuthToken");
        window.location = 'http://localhost:3001/';
        setLogout(false);
    }

  return (
    <div className="routing__protect" style={{marginTop:"200px"}}>
        <h2 className='pr__head'>User Details </h2>
        <p>UserID: <span>{decoded.userId}</span></p>
        <p>Name: <span>{decoded.name}</span></p>
        <p>Email: <span>{decoded.email}</span></p>
        <p>Phone No: <span>{decoded.mobileNumber}</span></p>
        <button type="submit" onClick={logout}>{isLogout}</button>
    </div>
  )
}

