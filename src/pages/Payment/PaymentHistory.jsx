import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./PaymentHistory.css";
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
import ReactPaginate from "react-paginate";

const PaymentHistory = () => {

  const [cuslist, cuslistchange] = useState(null);
  const [pageNo, pageNochange] = useState("1");
  const [pageSize, pageSizechange] = useState("10");
  const [searchField, searchFieldchange] = useState();
  const [totalitem, totalitemchange] = useState(null);
  const [currentitems, setCurrentitems] = useState();
  const [rmvstatus, rmvstatuschange] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState("");

  const handleStartDateChange = (event) => {
    setSelectedStartDate(event.target.value);
  };

  const [selectedEndDate, setSelectedEndDate] = useState("");

  const handleEndDateChange = (event) => {
    setSelectedEndDate(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlepageclick = (event) => {
    console.log(event.selected);
    pageNochange(event.selected + 1);

    let currentPage = event.selected + 1;
  };

  

  useEffect(() => {
    console.log(selectedStartDate);
    console.log(selectedEndDate);
  }, [selectedStartDate]);

  return (
    <div>
      <div className="select-container">
        <label htmlFor="myDateInput">Select Start Date:</label>
        <input
          type="date"
          id="myDateInput"
          name="myDateInput"
          value={selectedStartDate}
          onChange={handleStartDateChange}
        />
        &nbsp;&nbsp;&nbsp;
        <label htmlFor="myDateInput">Select End Date:</label>
        <input
          type="date"
          id="myDateInput"
          name="myDateInput"
          value={selectedEndDate}
          onChange={handleEndDateChange}
        />
        &nbsp;&nbsp;&nbsp;
        <label htmlFor="mySelectInput">Mode:</label>
        <select
          id="mySelectInput"
          name="mySelectInput"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">Select...</option>
          <option value="option1">Online</option>
          <option value="option2">Whatsapp</option>
          <option value="option3">App</option>
        </select>
        &nbsp;&nbsp;&nbsp;
        <input type="button" className="btn btn-primary" value="SUBMIT" />
      </div>
      <hr />

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
                  <b>NAME</b>
                </TableCell>
                <TableCell align="left">
                  <b>ADDRESS</b>
                </TableCell>
                <TableCell align="center">
                  <b>MOBILE</b>
                </TableCell>
                <TableCell align="left">
                  <b>AMOUNT</b>
                </TableCell>
                <TableCell align="left">
                  <b>MODE</b>
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
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
