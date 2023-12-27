import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Url } from '../../Global';
import { useEffect } from 'react';
import { useState } from 'react';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ClosedLead() {

    const [closedleaddta, closedleaddtachange] = useState(null);

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

      
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="left">BOOKING ID</StyledTableCell>
            <StyledTableCell align="left">NAME</StyledTableCell>
            <StyledTableCell align="left">PHONE</StyledTableCell>
            <StyledTableCell align="left">ADDRESS</StyledTableCell>
            <StyledTableCell align="left">TYPE</StyledTableCell>
            <StyledTableCell align="left">CREATED</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {closedleaddta&&
          closedleaddta.map((row , index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="left">{row.bookingNo}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.mobile}</StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
              <StyledTableCell align="left">{row.leadThrough}</StyledTableCell>
              <StyledTableCell align="left">{row.createdOn}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}