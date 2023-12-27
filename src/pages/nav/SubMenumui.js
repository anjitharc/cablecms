import { List } from '@material-ui/core';
import { Collapse, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const SubMenumui = ({ item }) => {
    
    const theme = useTheme();
    const [subnav, setSubnav] = useState(false);
    const [open, setOpen] = React.useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const [isCollapse, setIsCollapse] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
<>
      <List to={item.path} onClick={item.subNav && showSubnav}>
        <div>
        <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }}/>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </List>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Collapse to={item.path} in={isCollapse} timeout="auto" unmountOnExit key={index}>
                          {item.icon}
              <ListItemText>{item.title}</ListItemText>
            </Collapse>
          );
        })}
  </>
  )
}

export default SubMenumui
