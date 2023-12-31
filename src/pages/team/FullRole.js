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
import { FormControlLabel } from '@mui/material';
import axios from 'axios';

const FullRole = () => {

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [access, setAccess] = React.useState([]);
  const [checkedValues, setValue] = useState([]);
  const [roledtls, roledtlschange] = useState(null);
  const [roleid, RoleIdchange] = useState(1);
  const [currentstatus, currentstatuschange] = useState([]);
  const [switchState, setSwitchState] = useState(false);
  const [menuid, menuIdchange] = useState(null);
  const [companyId, companyIdchange] = useState(null);
  const [switchst, switchstchange] = useState(null);

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
    const { value, checked } = event.target
    if (checked) {
      setValue(pre => [...pre, value])
    } else (
      setValue(pre => {
        return [...pre.filter(skill => skill !== value)]
      })
    )

    console.log(checkedValues);


  }



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(access)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const menuAlloc = (id , cmpid , swstatus) => {
  menuIdchange(id);
  companyIdchange(cmpid)
  switchstchange(swstatus)

}

 const handleSwitchChange = async () => {
  try {
    // Update the switch state in the API
    await axios.post( Url + 'menu_allocation', 
    { accessStatus: !switchst,
      companyId: companyId,
      menuId: menuid ,
      roleId:roleid ,
    }); // Replace with your API endpoint
    setSwitchState((prev) => !prev);   

  } catch (error) {
    console.error('Error updating switch state:', error);
  }
};


useEffect(() => {
  fetch(Url + "menu_allocation/" + roleid)
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      currentstatuschange(resp.data);
      setSwitchState(resp.data.accessStatus);
    })
    .catch((err) => {
      console.log(err.message);
    });
}, [roleid , switchState ]);



  return (
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <Container maxWidth="md">
            <div className='card-columns'>
              <FormControl style={{ minWidth: 160, minHeight: 50 }}>
                <Select value={roleid} onChange={(e) =>
                  RoleIdchange(e.target.value)
                } >

                  {roledtls
                    ? roledtls.map((staffs) => {
                      return <MenuItem value={staffs.id}>{staffs.name}</MenuItem>;
                    }) : null}
                </Select>
              </FormControl>
              &nbsp;&nbsp;
              <BiPlus hidden
              type="button"
              color="blue"
              onClick={handleClickOpen}
               size={40}
              />

<br></br><br></br><br></br>
            </div>
            <div className='card'>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align='left'><b>Contents</b></TableCell>
                    <TableCell align="left"><b>Permission</b></TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentstatus.map((row) => (
                    <TableRow
                      key={row.menuId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{row.menu}</TableCell>
                      <TableCell align="left"><Switch checked={row.accessStatus} onChange={handleSwitchChange} onClick={(e) => menuAlloc(row.menuId , row.companyId ,row.accessStatus)}></Switch>
                     
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

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
    </div>
  )
}

export default FullRole
