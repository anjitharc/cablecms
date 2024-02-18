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


   

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const[userstatus , userstatuschange] = useState(null);
  
  const custdta = {
    userName,
    password,
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://103.146.174.105:8443/TECH/techniques/logins", {
      method: "POST",
      headers: { "content-type": "application/json",
      accept: 'application/json', },
      body: JSON.stringify(custdta),
    })
      .then((res) => res.json())
      .then((res) => {

       console.log(res.data);

      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(true);
      });

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

export default Signin;
