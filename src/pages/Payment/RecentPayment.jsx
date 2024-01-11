import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMinus, FaRegEdit, FaWindowClose } from "react-icons/fa";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Url } from "../../Global";
import { BiUserPlus } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "react-bootstrap";

export default function RecentPayment() {
  const [cmpid, cmpidchange] = useState(null);
  const [rmvstatus, rmvstatuschange] = useState(null);
  const [newldstatus, newldstatuschange] = useState(0);
  const navigate = useNavigate();
  const [openPopuptwo, setOpenPopuptwo] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupOpenLE, setPopupOpenLE] = useState(false);
  const [variableToSend, setVariableToSend] = useState(null);

  const LoadEdit = (id) => {
    navigate("/leadedit/" + id);
  };

  const removefntn = (id) => {
    if (window.confirm("Do You Want To Remove")) {
      fetch(Url + "zoom/lead/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          toast.success("Lead Removed");
          rmvstatuschange(1);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const closebtn = (id) => {
    fetch(Url + "change_lead_status/" + id + "/3", {
      method: "GET",
    })
      .then((res) => {
        toast.success("Lead Closed");
        rmvstatuschange(id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [paymentlist, paymentlistchange] = useState(null);
  useEffect(() => {
    fetch(Url + "payment_approval_list")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        paymentlistchange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [rmvstatus, isPopupOpen, isPopupOpenLE]);

  const editpops = (id) => {
    setPopupOpenLE(true);
    setVariableToSend(id);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const openPopupLE = () => {
    setPopupOpenLE(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const closePopupLE = () => {
    setPopupOpenLE(false);
  };

  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Sl.No</b>
              </TableCell>
              <TableCell align="center">
                <b>PAYMENT ID</b>
              </TableCell>
              <TableCell align="left">
                <b>NAME</b>
              </TableCell>
              <TableCell align="left">
                <b>PHONE</b>
              </TableCell>
              <TableCell align="left">
                <b>ADDRESS</b>
              </TableCell>
              <TableCell align="left">
                <b>AMOUNT</b>
              </TableCell>
              <TableCell align="left">
                <b>MODE</b>
              </TableCell>
              <TableCell align="center">
                <b>ACTION</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentlist &&
              paymentlist.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 5 } }}
                >
                  <TableCell component="th" scope="row">
                    <center> {index + 1}</center>
                  </TableCell>
                  <TableCell align="center">{row.paymentId}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.amount}</TableCell>
                  <TableCell align="left">{row.paymentMode}</TableCell>
                  <TableCell align="center">
                    <Button className="btn btn-primary">APPROVE</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
