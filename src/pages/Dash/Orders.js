import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useEffect } from 'react';
import { useState } from 'react';
import { Url } from "../../Global";


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {

  
const [leaddta, leaddtachange] = useState(null);
useEffect(() => {
  fetch(Url + "lead_managment")
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      leaddtachange(resp.data);
     
    })
    .catch((err) => {
      console.log(err.message);
    });
}, []);

  return (
    <React.Fragment>
      <Title>Recent Leads</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {leaddta&&
          leaddta.map((row , index) => (
            <TableRow key={row.id}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}