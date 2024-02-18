import {
  Divider,
  FormControl,
  Grid,
  Input,
  MenuItem,
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
import { FaRegEdit, FaUserMinus } from "react-icons/fa";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { Link, Navigate, useParams } from "react-router-dom";
import { Url } from "../../Global";
import { Select } from "@mui/material";

const ComplaintCtgry = () => {
  const [name, namechange] = useState("");
  const [description, decsriptionchange] = useState("");
  const [updatebtn, updatebtnshow] = useState(false);
  const [addbtn, addbtnshow] = useState(true);

  const handlesubmit = (e) => {
    e.preventDefault();
    const cmplntdta = { name, description };
    fetch(Url + "complaint_category", {
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
  useEffect(() => {
    fetch(Url + "complaint_category")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cmplntctgryschange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const removefntn = (id) => {
    if (window.confirm("Do You Want To Remove")) {
      fetch(Url + "complaint_category/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully");
          window.location.reload();
          console.alert(id);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

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

  const editfnctn = async (id) => {
    addbtnshow(false);
    updatebtnshow(true);
    const response = await fetch(Url + "complaint_category/" + id).then(
      (response) => response.json()
    );

    // update the state
    namechange(response.data[0].name);
    decsriptionchange(response.data[0].description);
  };

  return (

    <>
      <Divider />


      <Grid container rowSpacing="15px" alignItems="center" style={{ marginBottom: "25px", marginTop: "25px"}}>
        <FormControl style={{ minWidth: 120, flexDirection: "row" , paddingRight:"10px"}}>
          <Input
            variant="outlined"
            className="form-control-lg"
            required
            type="text"
            value={name}
            onChange={(e) => namechange(e.target.value)}
            placeholder="COMPLAINT"
          ></Input>
          &nbsp; &nbsp;
          <Input
            className="form-control-lg"
            variant="outlined"
            required
            type="text"
            value={description}
            onChange={(e) => decsriptionchange(e.target.value)}
            placeholder="DESCRIPTION"
          ></Input>
          &nbsp; &nbsp;

          <select
            style={{ minWidth: 190 }}
            variant="standard"
            required
            placeholder="CATEGORY"
          >

            <option value={10}>Broadband</option>
            <option value={20}>Cable TV</option>


          </select>
        </FormControl>
        &nbsp;&nbsp;
        {addbtn && (
          <BiPlus
            type="button"
            color="blue"
            onClick={handlesubmit}
            size={40}
          />)}
        {updatebtn && (
          <button className="btn btn-primary" onClick={updatefntn}>
            UPDATE
          </button>)}

      </Grid>


      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Sl.No</b>
              </TableCell>
              <TableCell align="left">
                <b>COMPLAINT</b>
              </TableCell>
              <TableCell align="left">
                <b>DESCRIPTION</b>
              </TableCell>
              <TableCell align="left">
                <b>CATEGORY</b>
              </TableCell>
              <TableCell align="left">
                <b>ACTION</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cmpntctgry &&
              cmpntctgry.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 5 } }}
                >
                  <TableCell component="th" scope="row">

                    <center> {index + 1}</center>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">CABLE TV</TableCell>
                  <TableCell align="center">


                    <div className="flex items-center space-x-4">
                      <FaRegEdit
                        size={20}
                        type="button"
                        onClick={() => {
                          editfnctn(row.id);
                        }}
                      />

                      <HiArchiveBoxXMark
                        type="button"
                        color="red"
                        size={20}
                        onClick={() => {
                          removefntn(row.id);
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComplaintCtgry;
