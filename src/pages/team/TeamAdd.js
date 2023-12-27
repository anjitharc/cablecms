import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "../../Global";
import { Stack, TextField } from "@mui/material";


const TeamAdd = () => {
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [userName, usernamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [typeId, RoleIdchange] = useState("");


  const handlesubmit = (e) => {
    e.preventDefault();
    const roledta = { name, email, mobile, userName, password, typeId };
    fetch(Url + "staff", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(roledta),
    })
      .then((res) => {

  window.location.reload()
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [roledtls, roledtlschange] = useState(null);
  useEffect(() => {
    fetch(Url + "role_list")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        roledtlschange(resp.data);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
   <>
      <form className="container-sm" Validate required>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="First Name"
            fullWidth
            required
            value={name}
            onChange={(e) => namechange(e.target.value)}
          ></TextField>

          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Last Name"
            fullWidth
            
          />

        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
       
           
            <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Mobile Number"
              required
              maxlength="10"
              value={mobile}
              onChange={(e) => mobilechange(e.target.value)}
              className="form-control"
            ></TextField>

<TextField
            type="email"
            variant='outlined'
            color='secondary'
            label="E-Mail"
              required
              maxlength="10"
              value={email}
              onChange={(e) => emailchange(e.target.value)}
              className="form-control"
            ></TextField>

        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Address"
            fullWidth
            
          />
</Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
       
            <TextField
             type="text"
             variant='outlined'
             color='secondary'
             label="Username"
              required
              maxlength="10"
              value={userName}
              onChange={(e) => usernamechange(e.target.value)}
              className="form-control"
            ></TextField>
   

     
         
            <TextField 
            type="password"
            variant='outlined'
            color='secondary'
            label="Password"
              required
              maxlength="10"
              value={password}
              onChange={(e) => passwordchange(e.target.value)}
              className="form-control"
            ></TextField>
      
</Stack>
        <div className="col-lg-12">
          <div className="form-group">
            <br></br>
            <label> ROLE TYPE : &nbsp;&nbsp; </label>
            <select onChange={(e) =>
              RoleIdchange(e.target.value)
            } className="form-select">
              <option>SELECT</option>;
              {roledtls
                ? roledtls.map((staffs) => {
                  return <option value={staffs.id}>{staffs.name}</option>;
                }) : null}
            </select>
          </div>
        </div>



        <div className="col-lg-12">
          <div className="form-group">
            <div className="ldadd-btn">
              <button className="btn btn-success" type="submit" onClick={handlesubmit}>
                SAVE
              </button>
              <Link to="/teamlist" className="btn btn-danger">
                {" "}
                BACK{" "}
              </Link>
            </div>
          </div>
        </div>


      </form>
      </>

  );
};

export default TeamAdd;
