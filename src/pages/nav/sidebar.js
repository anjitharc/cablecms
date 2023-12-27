import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import ReactRoundedImage from "react-rounded-image"
import MyPhoto from "../../Assets/sample.png"
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';


const Nav = styled.div`
  background: #695879;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #695879;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  toolbar: {
    paddingRight: 24
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  width: theme.spacing(7),
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(9)
  },
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  // added the footer class
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    // just this item, push to bottom
    alignSelf: "flex-end"
  }
  

}));



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
    <Toolbar>
    <AppBar>
    
      <IconContext.Provider value={{ color: '#fff' }}>
               
           
        <Nav>          
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />        
          </NavIcon> 
          
          <ReactRoundedImage
           roundedColor="#321124"
          image={MyPhoto}          
          imageWidth="40"
          imageHeight="40"
          roundedSize="5"
          hoverColor="#DD1144"   
          display= 'flex'
          flexDirection= 'row'        
          
        />
         
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
           <h5>CableSeva 1.0</h5>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            
            })}
        
          </SidebarWrap>          
        </SidebarNav>
        
      </IconContext.Provider>
    </AppBar>
      </Toolbar>
    


    </>
  );
};

export default Sidebar;