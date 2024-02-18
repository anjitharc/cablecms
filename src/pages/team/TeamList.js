import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import { Url } from "../../Global";
import { Container } from "@material-ui/core";
import { BiPlusMedical } from "react-icons/bi";
import TeamPop from "./TeamPop";
import TeamAdd from "./TeamAdd";
import { FaRegEdit, FaUserMinus, FaWindowClose } from "react-icons/fa";
import { Fragment } from "react";

export default function TeamList() {
  const [staffdta, staffdtachange] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);


  const closePopup = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    fetch(Url + "staff")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        staffdtachange(resp.data);
        console.log(staffdta);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [openPopup]);

  return (
    <Fragment>
      <Container maxWidth="lg" fixed>

        <BiPlusMedical
          onClick={() => setOpenPopup(true)}
          type="button"
          variant="contained"
          size="25"
          style={{ float: "right" }}
          color="blue"
          className="float-right"
        ></BiPlusMedical>
        <br></br>
        <br></br>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead sx={{ fontSize: 5 }}>
              <TableRow>
                <TableCell align="center"><b>Sl.No</b></TableCell>
                <TableCell align="left"><b>Name</b></TableCell>
                <TableCell align="left"><b>E- Mail</b></TableCell>
                <TableCell align="left"><b>Mobile</b></TableCell>
                <TableCell align="left"><b>User Name</b></TableCell>
                <TableCell align="left"><b>Password</b></TableCell>
                <TableCell align="left"><b>Role</b></TableCell>
                <TableCell align="left"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffdta &&
                staffdta.map((row, index) => (
                  <TableRow
                    key={row.name}

                  >
                    <TableCell align="center" component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.mobile}</TableCell>
                    <TableCell align="left">{row.userName}</TableCell>
                    <TableCell align="left">{row.password}</TableCell>
                    <TableCell align="left">{row.typeName}</TableCell>
                    <TableCell align="left">

                      <div className="flex items-center space-x-4">
                        <div>
                          <FaRegEdit
                            size={20} type="button"
                            onClick={() => {

                            }}
                          />
                        </div>
                        <div>                      <FaUserMinus type="button"
                          color="red"
                          size={20}
                          onClick={() => {

                          }}
                        />
                        </div>

                      </div>
                    </TableCell>

                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <TeamPop openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <TeamAdd onClose={closePopup} />
      </TeamPop>
    </Fragment>
  );
}
