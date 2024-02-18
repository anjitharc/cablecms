import { CircularProgress, Input, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import "./Login.css";
import calbelogo from "./CABLE.png";
import { useState } from "react";
import swal from "sweetalert";
import Button from "@material-ui/core/Button";
import ReactLoading from 'react-loading';
import toast, { Toaster } from "react-hot-toast";



const Example = ({ spin, white }) => (
  <ReactLoading type={spin} color={white} height={'20%'} width={'20%'} />
  );


   

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const[userstatus , userstatuschange] = useState(null);
  

  async function loginUser(credentials) {
    setLoading(true);
    return fetch('http://103.146.174.105:8080/TECH/techniques/logins', {
      method: "POST",      
      headers: {
        "Content-Type": "application/json",   
       
      },     
      body: JSON.stringify(credentials),
    }).then((data) => data.json())
    
    .finally(() => {
      setLoading(false);
  });
    
  }

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      userName,
      password,
    });
    if (!response) {
      return <div><h1>Loading...</h1></div>;
    }
    if ( response['success']) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("cmpid", JSON.stringify(response.data[0].companyId));
        localStorage.setItem("data", JSON.stringify(response["data"]));
        window.location.href = "/";                
      });
    } else {
       toast.error("Invalid Credentials")
    }
  };
    
 


return (
    <div>      
      <div><Toaster  position="top-center"
  reverseOrder={false} /></div>
        <div class="wrapper">
          <div class="logo">
            <img src={calbelogo} width={100} height={100} />
          </div>
          <div class="text-center mt-4 name">CABLE MAN</div>
        {loading && <center><CircularProgress /></center>}
          <form class="p-3 mt-3" validate onSubmit={handleSubmit}>
            <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input
                required
                id="email"
                name="email"
                label="User Name"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div class="form-field d-flex align-items-center">
              <span class="fas fa-key"></span>
              <input
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" class="btn mt-3">
              Login
            </Button>
          </form>
        
        </div>  
        <footer>
           <center><h8 className="sticky-bottom">The Complete CableTV Complaint Registration System</h8></center> 
          </footer>   
    </div>
  );
};

export default Login;
