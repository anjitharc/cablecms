import { Container, FormControl, MenuItem, Select, Switch, Table } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { Url } from '../../Global';
import { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CheckBox } from '@mui/icons-material';
import { BiPlus } from "react-icons/bi";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import RoleManagement from './RoleManagement';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Customers', 159, 0, 0, 4.0),
    createData('Lead', 1 , 1, 1, 4.3),
    createData('Complaint', 262, 1, 1, 6.0),
    createData('Payment', 305, 0, 0, 4.3),
    createData('Master', 1, 1, 1, 3.9),
    createData('Settings', 1, 1, 1, 3.9),
    createData('Complaint Category', 1, 1, 1, 3.9),
    createData('Closed Complaint', 1, 1, 1, 3.9),
  ];


const FullRole = () => {

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [access , setAccess] = React.useState([]);
  const [ checkedValues , setValue] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [roledtls, roledtlschange] = useState(null);
    const [roleid, RoleIdchange] = useState(1);

    useEffect(() => {
      fetch(Url + "role_list")
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          roledtlschange(resp.data); 
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);

   const handleCheckbox = (event) => {
    const {value, checked } = event.target
     if(checked){
      setValue(pre => [...pre,value])
     }else(
      setValue(pre =>{
        return [...pre.filter(skill => skill!==value)]
      })
     )
     
     console.log(checkedValues);
    

}   

    

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(access)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
<Container maxWidth="md">
    <div>
    <FormControl style={{minWidth: 160 , minHeight: 100 }}>
     <Select onChange={(e) =>
        RoleIdchange(e.target.value)
      } >

        {roledtls
          ? roledtls.map((staffs) => {
            return <MenuItem value={staffs.id}>{staffs.name}</MenuItem>;
          }) : null}
      </Select>
      </FormControl>
&nbsp;&nbsp; 
      <BiPlus
                type="button"
                color="blue"
                onClick={handleClickOpen}
                size={40}
              />


    </div> 
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'><b>Contents</b></TableCell>
            <TableCell align="left"><b>Permission</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >             
              <TableCell align="left">{row.name}</TableCell>            
              <TableCell align="left"><Switch value={row.name} defaultChecked={row.fat} onChange={handleCheckbox}></Switch></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
     
      </Container>

      <React.Fragment>      
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <RoleManagement />   
           <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
      <button className='btn btn-primary' hidden type='submit'>SUBMIT</button>
    </form>
    </div>
  )
}

export default FullRole
