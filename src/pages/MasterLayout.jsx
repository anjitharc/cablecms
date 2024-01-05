// MainLayout.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/home';
import MiuiSidebar from './nav/MiuiSidebar';
import LeadList from './Lead/LeadList';
import CustListPagin from './Customer/CustList';
import MasterList from './Master/MasterList';
import CustList from './Customer/CustList';
import CBroadband from './Customer/CBroadband';
import LeadMenu from './Lead/LeadMenu';
import ComplaintMenu from './Complaint/ComplainrMenu';
import MasterMenu from './Master/MasterMenu';
import Settings from './Master/Settings';


const MasterLayout = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <MiuiSidebar />

        {/* Main content area */}
        <div style={{ paddingTop: 68, height: '100%', position: 'relative', left: '-30px', width: '100%', overflow: 'hidden'}}>
          {/* Define your routes for the main content */}
          <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/leadlist" element={<LeadList />} />
          <Route path="/CableCustomerlist" element={<CustListPagin />} ></Route>
          <Route path="/masterlist" element={<MasterList />} > </Route>
          <Route path="/Custlist" element={<CustList />} ></Route>
          <Route path="/cbroadband" element={<CBroadband />} ></Route>
          <Route path='/leadmenu' element={<LeadMenu />}></Route>
          <Route path="/complaintmenu" element={<ComplaintMenu />} ></Route>
          <Route path='/mastermenu' element={<MasterMenu />}></Route>
          <Route path="/settings" element={<Settings />} > </Route>
          
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MasterLayout;