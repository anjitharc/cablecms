import React, { useEffect, useState } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";
import { Url } from "../../Global";
import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import butto from "./Pops";



export default function LeadAddPop(props) {

  const { addOrEdit, recordForEdit } = props

  const [name, namechange] = useState("");
  const [address, addresschange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [leadThrough, leadThroughchange] = useState("");
  const [staffId, staffIdchange] = useState("");
  const [type, typechange] = useState("");
  const [leadCategory, leadCategorychnge] = useState("");
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);



  const handlesubmit = (e) => {
    e.preventDefault();
    const leaddta = { name, address, mobile, leadThrough, staffId, type, leadCategory };
    fetch(Url + "lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(leaddta),
    })
      .then((res) => {

       window.location.reload();
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [staffdtls, staffdtlschange] = useState(null);
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
    <div>

      <form validate required onSubmit={handlesubmit}  >
        <Grid container>

          <Grid item xs={6}>



            <TextField
              variant="outlined"
              name="fullName"
              label="Full Name"
              required
              value={name}
              onChange={(e) => namechange(e.target.value)}

            ></TextField>



            <TextField
              variant="outlined"
              label="Address"
              name="address"
              required
              value={address}
              onChange={(e) => addresschange(e.target.value)}

            ></TextField>




            <TextField
              label="Mobile"
              variant="outlined"
              name="mobile"
              required
              value={mobile}
              onChange={(e) => mobilechange(e.target.value)}

            ></TextField>


            <TextField
              variant="outlined"
              label="City"
              name="city"
            ></TextField>



          </Grid>

          <Grid item xs={6}>
            <FormControl style={{ minWidth: 200 }}>
              <InputLabel >Staff</InputLabel>
              <Select variant="outlined" label="Staff" onChange={(e) =>
                staffIdchange(e.target.value)
              } >
                <MenuItem value="">SELECT</MenuItem>
                {staffdtls
                  ? staffdtls.map((staffs) => {
                    return <MenuItem key={staffs.id} value={staffs.id}>{staffs.name}</MenuItem>;
                  }) : null}
              </Select>

            </FormControl>







            <FormControl style={{ minWidth: 200 }}>
              <InputLabel >TYPE</InputLabel>
              <Select label="TYPE" variant="outlined" onChange={(e) =>
                typechange(e.target.value)} >
                <MenuItem value="CABLE TV">CABLE TV</MenuItem>
                <MenuItem selected value="BROADBAND">BROADBAND</MenuItem>
                <MenuItem value="COMBO STB">COMBO STB</MenuItem>
                <MenuItem value="COMBO ITV">COMBO ITV</MenuItem>
              </Select>
            </FormControl>
            <div >
              <br></br>
              <Controls.Button text="Submit" type="submit" />
              <Controls.Button
                text="Reset"
                color="default"
              />
            </div>
          </Grid>
        </Grid>
      </form>

    </div>


  );
};

