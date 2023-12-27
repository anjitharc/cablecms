import { useEffect, useState } from "react";
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { FaUserMinus, FaRegEdit, FaWindowClose } from "react-icons/fa";

import LeadAddPop from "../Lead/LeadAddPop";
import Pops from "../Lead/Pops";

import {

  Box,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,

} from "@material-ui/core";
import { Url, AdminUrl } from "../../Global";
import { BiUserPlus } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Popover from '@mui/material/Popover';




export default function MasterList() {

  const [rmvstatus, rmvstatuschange] = useState(null);
  const [newldstatus, newldstatuschange] = useState(0);
  const [status, statuschange] = useState();
  const [address, addresschange] = useState();
  const [authorisedPerson, authorisedPersonchange] = useState();
  const [email, emailchange] = useState();
  const [mobile, mobilechange] = useState();
  const [name, namechange] = useState();
  const [noOfStaff, noOfStaffchange] = useState();
  const [password, passwordchange] = useState();
  const [userId, userIdchange] = useState();
  const [companydta, companydtachange] = useState(null);


  const handlesubmit = (e) => {
    e.preventDefault();
    const leaddta = {
      address,
      authorisedPerson,
      email,
      mobile,
      name,
      noOfStaff,
      password,
      userId,
    };
    fetch(AdminUrl + "company", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(leaddta),
    })
      .then((res) => {
        toast.success("Company Added Successfully")
        handleClose();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };






  useEffect(() => {
    fetch( AdminUrl + "company")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        companydtachange(resp.data);


      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [companydta]);




  const [openPopup, setOpenPopup] = useState(false);
  const [active, setactive] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleChange = (event) => {
    setactive(event.target.checked);
  };


  return (

    <div className="card">
      <div className="card-body">


        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Toaster position="top-center"
            reverseOrder={false} />
          <div className="card">
            <h5 className="card-header">Company Profile</h5>
            <div className="card-body">
              <form validate required onSubmit={handlesubmit} >
                <Grid container spacing={4}>
                  <Grid container item spacing={2}>
                    <TextField
                      name="fullName"
                      label="Company Name"
                      required onChange={(e) => namechange(e.target.value)}
                    ></TextField> &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                      name="fullName"
                      label="Authorized Person Name"
                      required onChange={(e) => authorisedPersonchange(e.target.value)}
                    ></TextField>&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                      name="fullName"
                      label="Address"
                      required onChange={(e) => addresschange(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid container item spacing={3}>
                    <TextField
                      name="fullName"
                      label="Mob Number"
                      required onChange={(e) => mobilechange(e.target.value)}
                    ></TextField> &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                      name="fullName"
                      label="E-Mail"
                      required onChange={(e) => emailchange(e.target.value)}
                    ></TextField>&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                      name="fullName"
                      label="User Id"
                      required onChange={(e) => userIdchange(e.target.value)}
                    ></TextField>
                  </Grid>

                  <Grid container item spacing={3}>
                    <TextField
                      name="fullName"
                      label="Password"
                      required onChange={(e) => passwordchange(e.target.value)}
                    ></TextField> &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                      name="fullName"
                      label="Number Of Staff"
                      required onChange={(e) => noOfStaffchange(e.target.value)}
                    />
                  </Grid>
                  <Grid container item spacing={3}>
                    <button className="btn btn-primary">SUBMIT</button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </Popover>





        <Container maxWidth="lg">
          <div className="divbtn">
            <div><Toaster position="top-center"
              reverseOrder={false} /></div>
            <Button aria-describedby={id} className="btn btn-primary" variant="contained" onClick={handleClick}>
              NEW
            </Button>
            

            <br></br><br></br>
          </div>
          <h5 className="card-header">Master Admin</h5>
          <TableContainer >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"><b>SL.NO</b></TableCell>
                  <TableCell align="center"><b>COMPANY ID</b></TableCell>
                  <TableCell align="left"><b>NAME</b></TableCell>
                  <TableCell align="left"><b>USERNAME</b></TableCell>
                  <TableCell align="left"><b>WHATSAPP</b></TableCell>
                  <TableCell align="left"><b>MESSAGE</b></TableCell>
                  <TableCell align="left"><b>STATUS</b></TableCell>
                  <TableCell align="center"><b>ACTION</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {companydta &&
                  companydta.map((row, index) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 5 } }}
                    >
                      <TableCell component="th" scope="row">
                        <center> {index + 1}</center>
                      </TableCell>
                      <TableCell align="center">{row.code}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.userId}</TableCell>
                      <TableCell align="left"><Switch defaultChecked color="primary" /></TableCell>
                      <TableCell align="left"><Switch defaultChecked color="primary" /></TableCell>
                      <TableCell align="left"> <Chip
                        label={active ? 'Active ' : 'Inactive '}
                        color={active ? 'primary' : 'secondary'}
                        size="small"
                      /></TableCell>
                      <TableCell align="center">



                        <Switch checked={active}
              onChange={handleChange} color="primary"/> </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pops
            title="Create Lead"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}>
            <LeadAddPop />
          </Pops>

        </Container>

      </div>
    </div>
  );
};

