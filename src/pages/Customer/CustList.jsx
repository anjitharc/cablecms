import { useEffect, useState } from "react";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "../../Global";
import ReactPaginate from "react-paginate";
import {
  NativeSelect,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustAddPop from "../Customer/CustAddPop";
import NCust from "./NCust";
import "./CustList.css";

const CustList = () => {
  const [cuslist, cuslistchange] = useState(null);
  const [pageNo, pageNochange] = useState("1");
  const [pageSize, pageSizechange] = useState("10");
  const [searchField, searchFieldchange] = useState();
  const [totalitem, totalitemchange] = useState(null);
  const [currentitems, setCurrentitems] = useState();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [rmvstatus, rmvstatuschange] = useState(null);
  const closePopup = () => {
    setOpenPopup(false);
  };

  const custdta = {
    pageNo,
    pageSize,
    searchField,
  };

  useEffect(() => {
    setLoading(false);
    fetch(Url + "customer_list", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(custdta),
    })
      .then((res) => res.json())
      .then((res) => {
        cuslistchange(res.data);
        setCurrentitems(Math.ceil(res.totalCount / pageSize));
        totalitemchange(res.totalCount);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(true);
      });
  }, [pageNo, pageSize, searchField, rmvstatus, openPopup]);

  const handlepageclick = (event) => {
    console.log(event.selected);
    pageNochange(event.selected + 1);

    let currentPage = event.selected + 1;
  };

  const LoadEdit = () => {};
  const handleSearch = () => {};

  const removefntn = (id) => {
    fetch(Url + "customer/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        rmvstatuschange(id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div align="left">
        <p class="header_top">
          <u>Cable TV Customers</u>
        </p>
      </div>
      {/* Search input */}
      <div>
        <div align="left">
          <TextField
            label="Search"
            value={searchField}
            onChange={(e) => searchFieldchange(e.target.value)}
          />
        </div>
        <div class="buttontop" align="right">
          <input
            align="right"
            type="button"
            className="btn btn-primary"
            value="Create Customer"
            onClick={() => setOpenPopup(true)}
          />
        </div>
      </div>

      <TableContainer>
        {!totalitem && (
          <center>
            <h3>... No Customers Found ...</h3>
          </center>
        )}
        {totalitem && (
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ minWidth: "10px" }}>
                  <b>Sl.No</b>
                </TableCell>
                <TableCell align="center">
                  <b>CRF No</b>
                </TableCell>
                <TableCell align="center">
                  <b>LCO No</b>
                </TableCell>
                <TableCell align="left">
                  <b>NAME</b>
                </TableCell>
                <TableCell align="center">
                  <b>PHONE</b>
                </TableCell>
                <TableCell align="left">
                  <b>ADDRESS</b>
                </TableCell>
                <TableCell align="left">
                  <b>AREA</b>
                </TableCell>
                <TableCell align="left">
                  <b>SUB AREA</b>
                </TableCell>
                <TableCell align="center">
                  <b>AMOUNT</b>
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
                      <center> {index + 1}</center>
                    </TableCell>{" "}
                    <Link to={"/custdtls/" + row.id}>
                      <TableCell align="center">{row.crfNumber} </TableCell>
                    </Link>
                    <TableCell align="center">{row.crfNumber} </TableCell>
                    <TableCell align="left">
                      {" "}
                      {row.firstName}&nbsp;{row.middleName}&nbsp;
                      {row.lastName}
                    </TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">{"Area"}</TableCell>
                    <TableCell align="left">{"SubArea"}</TableCell>
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center">
                      <EditIcon
                        style={{
                          fontSize: "20px",
                          color: "blue",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer"
                        onClick={() => {
                          LoadEdit(row.id);
                        }}
                      />
                      &nbsp;&nbsp;&nbsp;
                      <DeleteIcon
                        style={{
                          fontSize: "20px",
                          color: "darkred",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          removefntn(row.id);
                        }}
                      />
                      &nbsp;&nbsp;&nbsp;
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <br></br>
      {/* Pagination */}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={currentitems}
        marginPagesDisplayed={2}
        pageRangeDisplayed={6}
        onPageChange={handlepageclick}
        containerClassName={"pagination pagination-md justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
      <div className="row">
        <div>
          <NativeSelect
            style={{ float: "left" }}
            onChange={(e) => pageSizechange(e.target.value)}
            defaultValue={10}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>10</option>
            <option value={20}>30</option>
            <option value={30}>50</option>
            <option value={100}>100</option>
          </NativeSelect>

          <h5 style={{ float: "right" }}>
            TOTAL CUSTOMERS :{totalitem}
            {loading ? (
              loading
            ) : (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
          </h5>
        </div>

        <CustAddPop openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <NCust onClose={closePopup} />
        </CustAddPop>
      </div>
    </div>
  );
};
export default CustList;
