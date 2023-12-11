import React,{useState} from "react";
// import './Login.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
// import { useHistory } from 'react-router-dom'

function Login(props) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loginData, setloginData] = useState({
      name:"",
    email:"",
    password:""
  });
  const navigate = useNavigate()
//   const history = useHistory();
  
  const baseURL= "https://18b8-182-48-224-214.ngrok-free.app"
  const header ={
    "ngrok-skip-browser-warning": true
  }
 const handleForm=async(e)=>{
     console.log(loginData);
     e.preventDefault();
    if (!isSignIn) {
        const response= await axios.post(`${baseURL}/api/register`, loginData,{header})
     .then(function (response) {
        // localStorage.setItem("token",response.data.token);
        console.log(response.data);
        // history.push('/Sidebar');
        
    })
    .catch(function (error) {
        console.log(error);
        alert(error.msg);
    });
}else{ 
    const response= await axios.post(`${baseURL}/api/login`, loginData,{header})
    .then(function (response) {
        localStorage.setItem("token",response.data.token);
        console.log(response.data.token);
        navigate('/Form/TotalForm');
        props.loginstate(isSignIn);
        //  navigate('/');

        })
        .catch(function (error) {
            console.log(error);
            alert(error.msg);
        });}
 }
  const handleSwitchForm = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  return (
    <div
      className={`wrapper ${isSignIn ? "animated-signin" : "animated-signup"} loginbox`} style={{display:'flex', marginLeft:'8rem', marginTop:'10rem'}}
    >
      <div className={`form-container ${isSignIn ? "sign-in" : "sign-up"}`}  >
        <form onSubmit={handleForm} style={{display:'flex', flexDirection:'column',padding:'2rem' , border:'2px solid black', gap:'1rem'}} >
          <h2>{isSignIn ? "Login" : "Sign Up"}</h2>
          {isSignIn || (
              <div className="form-group" >
              <label htmlFor="">Username</label>
              <br />
            <input type="text" required onChange={(e) => setloginData({ ...loginData, name: e.target.value })} />
            <i className="fas fa-user"></i>
          </div>
          )}
            <div className="form-group" style={{display:'flex', flexDirection:'column-reverse'}}>
              <input type="email" onChange={(e) => setloginData({ ...loginData, email: e.target.value })} required />
              <i className="fas fa-at"></i>
              <label htmlFor="">Email</label>
            </div>
          
          <div className="form-group" style={{display:'flex', flexDirection:'column-reverse'}}>
            <input type="password"onChange={(e) => setloginData({ ...loginData, password: e.target.value })} required />
            <i className="fas fa-lock"></i>
            <label htmlFor="">Password</label>
          </div>
          {!isSignIn && (
              <div className="form-group">
                <label htmlFor="">Confirm Password</label>
                <br />
              <input type="password" required />
              <i className="fas fa-lock"></i>
            </div>
          )}
          {isSignIn ? (
            <button type="submit" className="btn">
              Login
            </button>
          ) : (
            <button type="submit" className="btn">
              Sign Up
            </button>
          )}
          <div className="link">
            <p>
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="switch-link"
                onClick={handleSwitchForm}
              >
                {isSignIn ? " Sign Up" : " Sign In"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
