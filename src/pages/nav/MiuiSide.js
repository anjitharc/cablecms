import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as AiIcons from 'react-icons/ai'
import { AiOutlineCodeSandbox, AiFillSetting,  AiOutlineUser } from "react-icons/ai";
import { Fragment } from "react";


import Routing from "../../Routing";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { Avatar, Button, ButtonBase, Menu, MenuItem, Tooltip } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useEffect } from "react";
import {  Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, Inbox, Drafts, Star, Send } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MiuiSide() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(true);
  const [customers, setcustomers] = React.useState(true);
  const [mastertab, setmastertab] = React.useState(false);
  const [lead, setlead] = React.useState(true);
  const [complaint, setcomplaint] = React.useState(true);
  const [payment, setpayment] = React.useState(true);
  const [master, setmaster] = React.useState(true);
  const [setting, setsetting] = React.useState(true);
  const userstatus = JSON.parse(localStorage.getItem('data'));
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drop, setDrop] = React.useState(false);



  useEffect(() => {

    if (userstatus[0].typeName === "Super admin") {
      setmastertab(true);
      setmaster(false);
      setlead(false);
      setcomplaint(false);
      setpayment(false);
    }
    else if(userstatus[0].admin = "false") {
      setmastertab(false);
      setmaster(true);
      setlead(true);
      setcomplaint(true);
      setpayment(true);
      setsetting(true);
    }
  })

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    window.location.href = "/";
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setDrop(!drop);
  };


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <h6 align="right" style={{ alignContent: 'right' }}>Hi {userstatus[0].name}</h6>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>

        </DrawerHeader>
        <h6>CableMan 1.0</h6>
        <Divider />
        <List>
          <ListItemButton component="a" href="/">
            <ListItemIcon><AiIcons.AiFillDashboard /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>

          {mastertab && (
            <ListItemButton component="a" href="/masterlist">
              <ListItemIcon><AiOutlineCodeSandbox /></ListItemIcon>
              <ListItemText primary={"Company"} />
            </ListItemButton>
          )}          
            
            <ListItemButton onClick={handleClick}>

              <ListItemIcon><AiIcons.AiOutlineContacts /></ListItemIcon>
              <ListItemText primary={"Customers"} />
              {drop ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
           
           <Collapse in={drop} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component="a" href="/Custlist">
              <ListItemIcon>
                <AiOutlineUser />
              </ListItemIcon>
              <ListItemText primary={"Cable TV"} />
            </ListItemButton>
            <ListItemButton component="a" href="/CBroadband">
              <ListItemIcon>
                <AiIcons.AiTwotoneDashboard />
              </ListItemIcon>
              <ListItemText primary={"Broadband"} />
            </ListItemButton>
          </List>
        </Collapse>
        
          

          {lead && (
            <ListItemButton component="a" href="/Leadmenu">

              <ListItemIcon><AiIcons.AiOutlineTeam /></ListItemIcon>
              <ListItemText primary={"Lead"} />

            </ListItemButton>
          )}
          {complaint && (
            <ListItemButton component="a" href="/complaintmenu">

              <ListItemIcon><AiIcons.AiOutlineImport /></ListItemIcon>
              <ListItemText primary={"Complaint"} />

            </ListItemButton>
          )}
          {payment && (
            <ListItemButton component="a" href="/">

              <ListItemIcon><AiIcons.AiOutlineCreditCard /></ListItemIcon>
              <ListItemText primary={"Payment"} />

            </ListItemButton>
          )}
          {master && (
            <ListItemButton component="a" href="/mastermenu">

              <ListItemIcon><AiIcons.AiOutlineCodepenCircle /></ListItemIcon>
              <ListItemText primary={"Master"} />

            </ListItemButton>
          )}
          {setting && (
            <ListItemButton component="a" href="/settings">

              <ListItemIcon><AiFillSetting /></ListItemIcon>
              <ListItemText primary={"Settings"} />

            </ListItemButton>
          )}
        </List>        
        
        <Divider />

      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <Fragment>
          <Routing />
        </Fragment>
      </Main>
    </Box>
  );
}
