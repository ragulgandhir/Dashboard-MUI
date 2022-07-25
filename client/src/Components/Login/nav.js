import '../App.css';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert';

function Nav() {
  const authToken = window.sessionStorage.getItem("AuthToken");

  function AtVerify () {
    if (!authToken) {
      return console.log('No Login Users')
    }


    const decoded = jwt_decode(authToken);
    const u__name = decoded.name;
    console.log(u__name); 
    return <p>Welcome <span style={{fontWeight:"600",color:"orangered",textTransform:"capitalize"}}>{u__name}</span><i className="fa fa-user" style={{paddingLeft:"10px"}} aria-hidden="true"></i></p>
  }

  function logout () {
    localStorage.removeItem('userInfo');
    window.sessionStorage.removeItem("AuthToken");
    swal({
      text: "Logout Success",
      icon: "success",
      timer: 1500
    });
    setTimeout(function(){
      window.location.href = 'http://localhost:3001/';
   }, 2000);

  
}

function ReactLogout () {
  if (!authToken) {
    return console.log('No Logout')
  }else {
    return <Link to="#"><button className='r__logbtn' type="submit" onClick={logout}>Logout</button></Link>
  }
}
  
  return (
    <nav>
        <Link to="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png' alt='Logo' style={{width:'50px',height:'50px'}} />
        </Link>
        
        <ul className="nav-link">
            <Link to="/" style={{textDecoration:"none"}}><li className='re_nav'>Home</li></Link>
            <Link to="/about" style={{textDecoration:"none"}}> <li className='re_nav'>About Us</li></Link>
            <Link to="/contact" style={{textDecoration:"none"}}> <li className='re_nav'>Contact Us</li></Link>
            <div class="rn__dropdown">
              <button class="dropbtn">Account</button>
              <div class="dropdown-content">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login_page">Login</Link>
              <Link to="/signup">Register</Link>
              {/* <Link to="#"><button className='r__logbtn' type="submit" onClick={logout}>Logout</button></Link> */}
              <ReactLogout />
              </div>
            </div>
            <div>
              <AtVerify />
            </div>
        </ul>
    </nav>
  );
}

export default Nav;