import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Url } from "../../Global";
import { AiFillBackward } from "react-icons/ai";

function CustDtls() {
  const navigate = useNavigate();

  const { custid } = useParams();

  const [cusdta, cusdtachange] = useState("");
  const [complainthistory, complainthistorychange] = useState("");

  useEffect(() => {
    fetch(Url + "complaint_history/" + custid)
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
    <div className="container container-fluid">
      <div className="card">
        <div className="card-body">
          <h4 className="card-header"> Customer Details & History</h4>
          <AiFillBackward
            type="button"
            style={{ float: "right" }}
            size="30"
            color="blue"
            onClick={() => navigate(-1)}
            className="card"
          ></AiFillBackward>
          <br></br> <br></br>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    CRF Number : {cusdta.crfNumber}{" "}
                  </li>
                  <li class="list-group-item">
                    Name : {cusdta.firstName} {cusdta.middleName}{" "}
                    {cusdta.lastName}
                  </li>
                  <li class="list-group-item">Gender : {cusdta.gender}</li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Address : {cusdta.address}</li>
                  <li class="list-group-item">E-Mail : {cusdta.email}</li>
                  <li class="list-group-item">Mob : {cusdta.phone}</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <h6 className="text-justify text-left">
              <u>Customer Complaint History</u>
            </h6>
            <Divider></Divider>
            <br></br>
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
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustDtls;
