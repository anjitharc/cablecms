import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserMinus, FaRegEdit } from "react-icons/fa";
import { BiPlusMedical, BiUserPlus } from "react-icons/bi";
import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Fab,
  LinearProgress,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import CmplntAdd from "./CmplntAdd";
import Popup from "./Popup";
import CmplntFetch from "./CmplntFetch";
import { AiOutlinePrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import PrintCmplntlst from "./PrintCmplntlst";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Button } from "mdbreact";
import ReactDatePicker from "react-datepicker";
import swal from "sweetalert";
import { Url } from "../../Global";
import { MenuItem, Select } from "@mui/material";
import "./cmplist.css";
import toast, { Toaster } from "react-hot-toast";
import AddIcon from '@mui/icons-material/Add';
import { FcPlus } from "react-icons/fc";


const CmplntList = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const [cmplntdta, cmplntdtachange] = useState(null);
  const [complaintId, complaintIdchange] = useState("");
  const [complaintReason, complaintReasonchange] = useState("");
  const [statusup, statusupchange] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(Url + "complaint")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cmplntdtachange(resp.data);

      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [statusup , openPopup]);



  const handleClickOpen = (ComplaintId) => (e) => {
    setOpen(true);
    complaintIdchange(ComplaintId);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handlecmpclose = (cmpdtaid) => (e) => {
    e.preventDefault();



    const cmpdta = {
      complaintReason,
      complaintId,
      closedStaffId,
    };
    fetch(Url + "complaint_close", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cmpdta),
    })
      .then((res) => {

        toast.success("Complaint Closed Successfully")
        setOpen(false);
        statusupchange(complaintId + 1)

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [staffdtls, staffdtlschange] = useState(null);
  const [closedStaffId, staffIdchange] = useState();
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

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const closePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <Container maxWidth>

      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >

       
          <h5 align="left" >COMPLAINT LIST</h5>
          {loading &&
            <LinearProgress />}
         
            <div><Toaster position="top-center"
              reverseOrder={false} /></div><br></br>
            <div>
              <FcPlus type="button" size="29" style={{ float: "right" }} onClick={() => setOpenPopup(true)} />

              <Link to="/printcomplaint"> <AiOutlinePrinter
                type="button"
                variant="contained"
                size="29"
                style={{ float: "left" }}
                color="blue"
                className="float-right"
              ></AiOutlinePrinter></Link></div>
            <br></br>
            <br></br>
            <TableContainer className="flex">
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Sl.No</b></TableCell>
                    <TableCell align="center"><b>TICKET NO</b></TableCell>
                    <TableCell align="left"><b>NAME</b></TableCell>
                    <TableCell align="left"><b>PHONE</b></TableCell>
                    <TableCell align="left"><b>ADDRESS</b></TableCell>
                    <TableCell align="left"><b>CATOGORY</b></TableCell>
                    <TableCell align="left"><b>COMPLAINT</b></TableCell>
                    <TableCell align="left"><b>STAFF</b></TableCell>
                    <TableCell align="center"><b>DURATION</b></TableCell>
                    <TableCell align="center"><b>ACTION</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cmplntdta &&
                    cmplntdta.map((row, index) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 5 } }}
                      >
                        <TableCell component="th" scope="row">
                          <center> {index + 1}</center>
                        </TableCell>
                        <TableCell align="center">{row.ticket}</TableCell>
                        <TableCell align="left">{row.customer}</TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.category}</TableCell>
                        <TableCell align="left">{row.complaint}</TableCell>
                        <TableCell align="left">{row.assignedStaffName}</TableCell>
                        <TableCell align="center">{currentTime.toLocaleTimeString()}</TableCell>
                        <TableCell align="center"> <div>


                          <IoMdCloseCircleOutline
                            type="button"
                            size={25}
                            variant="outlined"
                            onClick={handleClickOpen(row.id)}
                          ></IoMdCloseCircleOutline>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                            style={{ maxWidth: "100%", maxHeight: "calc(100vh - -57px)" }}
                          >
                            <input type="hidden" id="hiddenId" value={row.id} />
                            <DialogTitle id="responsive-dialog-title"> {"Complaint Close"}</DialogTitle>
                            <DialogContent>
                              <label>REASON : </label> &nbsp;&nbsp;
                              <TextField
                                onChange={(e) =>
                                  complaintReasonchange(e.target.value)
                                }
                              ></TextField>
                              <br></br><br></br>
                              <label>STAFF : </label> &nbsp;&nbsp;
                              <select style={{ width: `${80 + 100}px` }}

                                onChange={(e) => staffIdchange(e.target.value)
                                } variant="outlined">
                                <option selected>SELECT</option>;
                                {staffdtls
                                  ? staffdtls.map((staffs) => {
                                    return <option value={staffs.id}>{staffs.name}</option>;
                                  }) : null}

                              </select>


                            </DialogContent>
                            <DialogActions>
                              <Button autoFocus onClick={handleClose}>
                                BACK
                              </Button>
                              <Button onClick={handlecmpclose(row.id)} autoFocus >
                                SUBMIT
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div></TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
         
        

        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <CmplntFetch onClose={closePopup}/>
        </Popup>
</Box>
        </Container>
    </>
  );

};

export default CmplntList;
