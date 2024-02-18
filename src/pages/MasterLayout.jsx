// MainLayout.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/home';
import MiuiSidebar from './nav/MiuiSidebar';
import LeadList from './Lead/LeadList';
import CustListPagin from './Customer/CustList';
import MasterList from './Master/MasterList';
import CustList from './Customer/CustList';
import LeadMenu from './Lead/LeadMenu';
import ComplaintMenu from './Complaint/ComplainrMenu';
import MasterMenu from './Master/MasterMenu';
import CustomerDetails from './Customer/CustomerDetails';
import BroadbandCPagination from './Customer/BroadbandCPagination';
import PaymentMenu from './Payment/PaymentMenu';
import SettingsMenu from './Settings/SettingsMenu';
import Err404 from './Error/Err404';


const MasterLayout = () => {
  return (
    <Router basename="">
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <MiuiSidebar />

        {/* Main content area */}
        <div style={{ paddingTop: 68, height: '100%', position: 'relative', left: '-30px', width: '100%', overflow: 'hidden', paddingBottom: 35}}>
          {/* Define your routes for the main content */}
          <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="*" element={<Err404 />} />
          <Route path="/leadlist" element={<LeadList />} />
          <Route path="/CableCustomerlist" element={<CustListPagin />} ></Route>
          <Route path="/masterlist" element={<MasterList />} > </Route>
          <Route path="/Custlist" element={<CustList />} ></Route>
          <Route path="/cbroadband" element={<BroadbandCPagination />} ></Route>
          <Route path='/leadmenu' element={<LeadMenu />}></Route>
          <Route path="/complaintmenu" element={<ComplaintMenu />} ></Route>
          <Route path='/mastermenu' element={<MasterMenu />}></Route>
          <Route path="/settings" element={<SettingsMenu />} > </Route>
          <Route path="/payment" element={<PaymentMenu />} > </Route>
          <Route path="/custdtls/:custid" element={<CustomerDetails />} ></Route>
          
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MasterLayout;