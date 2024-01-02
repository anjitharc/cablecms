// src/components/PopupForm.js
import React, { useEffect, useState } from "react";
import "./PopupForm.css";
import { Url } from "../../Global";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { IoIosCloseCircle } from "react-icons/io";
import Controls from "../../components/controls/Controls";
const EditLead = ({ onClose, variableFromPage }) => {
  const [staffdtls, staffdtlschange] = useState(null);
  const [name, namechange] = useState("");
  const [address, addresschange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [leadThrough, leadThroughchange] = useState("");
  const [staffId, staffIdchange] = useState("");
  const [type, typechange] = useState("");
  const [leadCategory, leadCategorychnge] = useState("");
  const [id, idchange] = useState("");
  const [bookingNo, bookingNochng] = useState("");

  useEffect(() => {
    fetch(Url + "lead/" + variableFromPage)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.data[0].id);
        namechange(resp.data[0].name);
        addresschange(resp.data[0].address);
        mobilechange(resp.data[0].mobile);
        bookingNochng(resp.data[0].bookingNo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSubmit =(e) =>{
    e.preventDefault();
    const leaddta={id,name,address,mobile};
    
    fetch(Url + "lead/"+variableFromPage,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(leaddta)
    }).then((res)=>{     
    onClose();
    }).catch((err)=>{
      console.log(err.message)
    })    
    }

  useEffect(() => {
    fetch(Url + "staff")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        staffdtlschange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="card">
          <div className="card-body">
            <h5 align="left" className="card-header">
              Lead Edit
            </h5>
           
            <form onSubmit={handleSubmit}>
              {/* Example form fields */}
              <Grid container>
                <Grid item xs={5}>
                  <TextField
                    variant="standard"
                    label="Full Name"
                    required
                    value={name}
                    onChange={(e) => namechange(e.target.value)}
                  ></TextField>

                  <TextField
                    variant="standard"
                    label="Address"
                    name="address"
                    required
                    value={address}
                    onChange={(e) => addresschange(e.target.value)}
                  ></TextField>

                  <TextField
                    label="Mobile"
                    variant="standard"
                    name="mobile"
                    required
                    value={mobile}
                    onChange={(e) => mobilechange(e.target.value)}
                  ></TextField>

                  <TextField
                    variant="standard"
                    label="City"
                    name="city"
                  ></TextField>
                </Grid>

                <Grid item xs={5}>
                  <FormControl style={{ minWidth: 200 }}>
                    <InputLabel>Staff</InputLabel>
                    <Select
                      variant="standard"
                      label="Staff"
                      onChange={(e) => staffIdchange(e.target.value)}
                    >
                      <MenuItem value="">SELECT</MenuItem>
                      {staffdtls
                        ? staffdtls.map((staffs) => {
                            return (
                              <MenuItem key={staffs.id} value={staffs.id}>
                                {staffs.name}
                              </MenuItem>
                            );
                          })
                        : null}
                    </Select>
                  </FormControl>

                  <FormControl style={{ minWidth: 200 }}>
                    <InputLabel>TYPE</InputLabel>
                    <Select
                      label="TYPE"
                      variant="standard"
                      onChange={(e) => typechange(e.target.value)}
                    >
                      <MenuItem value="CABLE TV">CABLE TV</MenuItem>
                      <MenuItem selected value="BROADBAND">
                        BROADBAND
                      </MenuItem>
                      <MenuItem value="COMBO STB">COMBO STB</MenuItem>
                      <MenuItem value="COMBO ITV">COMBO ITV</MenuItem>
                    </Select>
                  </FormControl>
                  <div>
                    <br></br>
                    <Controls.Button text="Submit" type="submit" />
                    <Controls.Button
                      text="Close"
                      color="default"
                      onClick={onClose}
                    />
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLead;
