import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@material-ui/core";
import { Checkbox, TableRow } from "@mui/material";
import { useEffect } from "react";
import { Url } from "../../Global";
import { useState } from "react";
import axios from "axios";



function RoleAllocation(props) {


  const [checked, setChecked] = React.useState(true);
  const [roleid, RoleIdchange] = useState(1);
  const [rolemenu, rolemenuchange] = useState(null);
  const [rolesubmenu, rolesubmenuchange] = useState(null);
  const [rolemenuid, rolemenuidchange] = useState();
  const fetchdata = async () => {
    axios.get(Url + 'role_menus/' + roleid,
      {
        pageNo: '1',
        pageSize: '10',
        searchField: '',
      })
      .then((response) => {

        rolemenuchange(response.data.data[0].menus)
        console.log(response.data.data[0])
      })
      .catch((err) => {

      })
  }
  useEffect(() => {
    fetchdata();
  }, []);

  const [roledtls, roledtlschange] = useState(null);
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


  const tabledata = (id) => {
    axios.post(Url + 'role_menu_allocation',
      {
        moduleId: id,
        roleId: roleid,

      })
      .then((response) => {
        rolesubmenuchange(response.data.data.subModuleAlloc)
        console.log(response.data.data.subModuleAlloc)


      })
      .catch((err) => {

      })
  }


  const handleChange = (e , index ) => {
   console.log(e.target.value)
   const activeData = document.getElementById(index).checked
   console.log(activeData,"activeData")

  }

const handleSubmit = () => {

  
}




  return (

    <>

<form onSubmit={handleSubmit}>
      <select onChange={(e) =>
        RoleIdchange(e.target.value)
      } className="form-select">

        {roledtls
          ? roledtls.map((staffs) => {
            return <option value={staffs.id}>{staffs.name}</option>;
          }) : null}
      </select>
      <br></br>
      <Box sx={{ display: "flex" }}>


        <List>
          {rolemenu &&
            rolemenu.map((row) => (



              <ListItemButton onClick={() => {
                tabledata(row.id);
              }} >

                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary={row.name} />
              </ListItemButton>


            ))}
        </List>
  

        <TableContainer>

          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right"> </TableCell>
                <TableCell align="right">VIEW</TableCell>
               

              </TableRow>
            </TableHead>
            <TableBody>

              {rolesubmenu &&
                rolesubmenu.map((row , i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell >
                      {row.subModuleName}
                    </TableCell>
                    <TableCell align="right"><Checkbox value={row.moduleName} onChange={(e) => handleChange(e , i)} /></TableCell>
                    <TableCell align="right"><Checkbox  id={i} onChange={(e) => handleChange(e , i)}/></TableCell>
                    <TableCell align="right"><Checkbox id={i} onChange={(e) => handleChange(e , i)}/></TableCell>
                    <TableCell align="center"><Checkbox id={i} onChange={(e) => handleChange(e , i)}/></TableCell>

                  </TableRow>
                ))}               
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <br></br>
      <button className="btn btn-primary" type="submit">UPDATE</button>
      </form>
    </>
  );
}

RoleAllocation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default RoleAllocation;
