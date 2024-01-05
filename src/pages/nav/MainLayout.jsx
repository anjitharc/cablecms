// MainLayout.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiuiSidebar from './MiuiSidebar';
import Dashboard from '../dashboard/home';
import LeadList from '../Lead/LeadList';

const MainLayout = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <MiuiSidebar />

        {/* Main content area */}
        <div style={{ padding: 100 , width: "100%" }}>
          {/* Define your routes for the main content */}
          <Routes>
          <Route path="/" element={<Dashboard />}></Route>
            <Route path="/about" element={<LeadList />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MainLayout;