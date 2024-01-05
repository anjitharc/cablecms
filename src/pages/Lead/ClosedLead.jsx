import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { useEffect } from 'react';
import { Url } from '../../Global';

const ClosedLead = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [closedleaddta, closedleaddtachange] = useState([]);

  useEffect(() => {
    fetch(Url + "closed_leads")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        closedleaddtachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
   
    <div className='card'>
       
      <h6 className="card-header" align="left">Closed Lead</h6>
     
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>BOOKING NO</b></TableCell>
              <TableCell><b>NAME</b></TableCell>
              <TableCell><b>MOBILE</b></TableCell>
              <TableCell><b>ADDRESS</b></TableCell>
              <TableCell><b>TYPE</b></TableCell>
              <TableCell><b>CREATED</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {closedleaddta.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{row.bookingNo}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.leadThrough}</TableCell>
                <TableCell>{row.createdOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={closedleaddta.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
};

export default ClosedLead
