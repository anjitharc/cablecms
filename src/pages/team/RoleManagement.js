import {
  Divider,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BiCapsule, BiPlus } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Url } from "../../Global";
import { Box, Button, Modal, Typography } from "@mui/material";
import RoleAllocation from "./RoleAllocation";

export default function RoleManagement() {
  const [name, namechange] = useState("");
  const [description, decsriptionchange] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const cmplntdta = { name, description };
    fetch(Url + "role", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cmplntdta),
    })
      .then((res) => {
        alert("Saved Successfully");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [cmpntctgry, cmplntctgryschange] = useState(null);
  const [pageNo, pageNochange] = useState("1");
  const [pageSize, pageSizechange] = useState("10");
  const [searchField, searchFieldchange] = useState();
  const [cuslist, cuslistchange] = useState(null);
  const [totalitem, totalitemchange] = useState(null);
  const [currentitems, setCurrentitems] = useState();
  const custdta = {
    pageNo,
    pageSize,
    searchField,
  };

  useEffect(() => {
    fetch(Url + "roles", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(custdta),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        cuslistchange(res.data);


      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const updatefntn = (id) => {
    if (window.confirm("Do You Want To Update")) {
      fetch(Url + "complaint_category/" + id, {
        method: "PUT",
      })
        .then((res) => {
          namechange();
          decsriptionchange();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  let navigate = useNavigate();
  const editfnctn = async (id) => {
    let path = `/roleallocation`;
    navigate(path);
  };




  return (

    <>
      <form validate required>
        <div className="card-body m-sm-3">
          <div className="container-sm">
            <div class="form-group mb-3">
              <Input
                variant="outlined"
                className="form-control-lg"
                required
                type="text"
                value={name}
                onChange={(e) => namechange(e.target.value)}
                placeholder="ROLE"
              ></Input>{" "}
              &nbsp; &nbsp;

              <Button variant="contained" color="success" onClick={handlesubmit}>
                ADD
              </Button>


            </div>

          </div>

        </div>
      </form>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Sl.No</b>
              </TableCell>
              <TableCell align="left">
                <b>Role</b>
              </TableCell>
              <TableCell align="center">
                <b>ACTION</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cuslist &&
              cuslist.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 5 } }}
                >
                  <TableCell component="th" scope="row">
                    {" "}
                    <center> {index + 1}</center>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <div>
                      <FaEye
                        size={20}
                        type="button"
                        onClick={handleOpen}
                      />
                      &nbsp;&nbsp;&nbsp;

                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box maxWidth position={"center"}>

        </Box>
      </Modal>


    </>
  );
};

