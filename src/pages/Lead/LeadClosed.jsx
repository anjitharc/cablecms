import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { useEffect } from 'react';
import { Url } from '../../Global';

const createData = (name, age) => {
  return { name, age };
};

const rows = [
  createData('John Doe', 30),
  createData('Jane Doe', 25),
  createData('Bob Smith', 35),
  createData('Alice Johnson', 28),
  // Add more rows as needed
];

const LeadClosed = () => {
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
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>BOOKING NO</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>MOBILE</TableCell>
              <TableCell>ADDRESS</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>CREATED</TableCell>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default LeadClosed