import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Url } from "../Global";
import { useEffect } from "react";
import "./Customer/CustomerDetails.css";
import {
  Card,
  Divider,
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SampleTest = (props) => {
  const [cusdta, cusdtachange] = useState("");
  const [complainthistory, complainthistorychange] = useState("");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(Url + "complaint_history/113")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cusdtachange(resp.data);
        complainthistorychange(resp.data.complaintListVOs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div>
        <Typography variant="h6" align="left" gutterBottom>
          Customer Details & History
        </Typography>
        <br></br>
        <Grid
          container
          rowSpacing={1}
          spacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={6}>
            <Card>
              <CardContent align="left">
                <Typography style={{ color: 'red', fontSize: '1.2em', fontWeight:'bold' }}>CRF Number : {cusdta.crfNumber}</Typography>  
                <Typography style={{ fontSize: '1.2em', fontWeight:'bold' }}>LCO Number : {cusdta.crfNumber}</Typography>
                <Typography style={{ fontSize: '1.2em', fontWeight:'bold' }}>Mobile : {cusdta.phone} </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent align="left">
                <Typography style={{ fontSize: '1.2em', fontWeight:'bold' }}>Name : {cusdta.firstName} {cusdta.middleName}{cusdta.lastName}</Typography>
                <Typography style={{ fontSize: '1.2em', fontWeight:'bold' }}>Address : {cusdta.address}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <br></br>
      <Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Complaint History" {...a11yProps(0)} />
              <Tab label="Payment History" {...a11yProps(1)} />
            </Tabs>
          </Box>
          {/* Complaint History Start */}
          <CustomTabPanel value={value} index={0}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>Sl.No</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>DATE</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>TICKET NO</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>COMPLAINT</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>CATOGORY</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>REASON</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>STAFF</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complainthistory &&
                    complainthistory.map((row, index) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 5 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <center> {index + 1}</center>
                        </TableCell>
                        <TableCell align="center">
                          {row.statusChangeDate}
                        </TableCell>
                        <TableCell align="center">{row.ticket}</TableCell>
                        <TableCell align="left">{row.complaint}</TableCell>
                        <TableCell align="left">{row.categoryName}</TableCell>
                        <TableCell align="left">
                          {row.complaintReason}
                        </TableCell>
                        <TableCell align="left">{row.staffName}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>   {/* Complaint History Ends */}
          </CustomTabPanel> 
          <CustomTabPanel value={value} index={1}>
            {/* Payment History Stars */}
          <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>Sl.No</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Date</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Invoice No</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Transaction ID</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Time</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>Mode</b>
                    </TableCell>                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complainthistory &&
                    complainthistory.map((row, index) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 5 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <center> {index + 1}</center>
                        </TableCell>
                        <TableCell align="center">
                          {row.statusChangeDate}
                        </TableCell>
                        <TableCell align="center">{row.ticket}</TableCell>
                        <TableCell align="left">{row.complaint}</TableCell>
                        <TableCell align="left">{row.categoryName}</TableCell>
                        <TableCell align="left">
                          {row.complaintReason}
                        </TableCell>
                        
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>   {/* Payment History Ends */}
          </CustomTabPanel>
        </Box>
      </Box>
    </div>
  );
};

export default SampleTest;
