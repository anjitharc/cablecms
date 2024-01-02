import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LeadAdd from './pages/Lead/LeadAdd';
import LeadEdit from './pages/Lead/LeadEdit';

import Dash from './pages/dashboard/home';
import About from './pages/about';
import TeamAdd from './pages/team/TeamAdd';
import CustAdd from './pages/Customer/CustomerAdd';
import CasualLead from './pages/Lead/CasualLead'
import Area from './pages/Area';
import Signin from './Auth/Signin';
import ComplaintCtgry from './pages/Complaint/ComplaintCtgry';

import Logout from './Auth/Logout';

import CustList from './pages/Customer/CustList';
import LeadAddPop from './pages/Lead/LeadAddPop';
import CmplntFetch from './pages/Complaint/CmplntFetch';
import BulkUpload from './pages/Customer/BulkUpload';

import CustDtls from './pages/Customer/CustDtls';
import CustListPagin from './pages/Customer/CustListPagin';
import Dashbo from './pages/Dash/Dash';

import PrintCmplntlst from './pages/Complaint/PrintCmplntlst';
import Custli from './pages/Customer/CusLitest';
import Role from './pages/team/RoleManagement';
import Rolealloc from './pages/team/RoleAllocation';
import TeamList from './pages/team/TeamList';

import Sideb from './pages/nav/Sideb';
import CustMenu from './pages/Customer/CustMenu';
import LeadMenu from './pages/Lead/LeadMenu';
import ComplainrMenu from './pages/Complaint/ComplainrMenu';
import MasterMenu from './pages/Master/MasterMenu';
import TestWhats from './examples/TestWhats';
import Settings from './pages/Master/Settings';
import MasterList from './pages/Master/MasterList';
import NCust from './pages/Customer/NCust';
import CBroadband from './pages/Customer/CBroadband';



const Routing = () => {
  return (
    
      <Router>
<div>
          <Routes>
            <Route path='/' exact element={<Dash />} >
            </Route>
            <Route path="*" render={() => "404 not found!"} />
            <Route path='/ncust' element={<NCust />}></Route>
            <Route path="/leadadd" element={<LeadAdd />} > </Route>
            <Route path="/masterlist" element={<MasterList />} > </Route>
            <Route path="/settings" element={<Settings />} > </Route>
            <Route path="/leadaddpop" element={<LeadAddPop />} > </Route>
            <Route path="/dash" element={<LeadAdd />} > </Route>
            <Route path="/leadedit/:ldid" element={<LeadEdit />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/teamadd" element={<TeamAdd />} ></Route>
            <Route path="/cbroadband" element={<CBroadband />} ></Route>
            <Route path="/area" element={<Area />} ></Route>
            <Route path="/casualleadlist" element={<CasualLead />} ></Route>
            <Route path="/complaintctgry" element={<ComplaintCtgry />} > </Route>
            
            <Route path="/login" element={<Signin />} > </Route>
            <Route path="/logout" element={<Logout />} ></Route>
            <Route path="/CustAdd" element={<CustAdd />} ></Route>
            <Route path="/Custlist" element={<CustList />} ></Route>
            <Route path="/Cmpfetch" element={<CmplntFetch />} ></Route>
            <Route path="/CustBulk" element={<BulkUpload />} ></Route>
            <Route path="/complaintmenu" element={<ComplainrMenu />} ></Route>
            <Route path="/custdtls/:custid" element={<CustDtls />} ></Route>
            <Route path="/CustlistPag" element={<CustListPagin />} ></Route>
            <Route path="/Dash2" element={<Dashbo />} ></Route>
            <Route path="/printcomplaint" element={<PrintCmplntlst />}></Route>
            <Route path="/custli" element={<Custli />}></Route>
            <Route path='/rolemanagement' element={<Role />}></Route>
            <Route path='/roleallocation' element={<Rolealloc />}></Route>
            <Route path='/mastermenu' element={<MasterMenu />}></Route>
            <Route path='/whatsapp' element={<TestWhats />}></Route>
            <Route path='/custmenu' element={<CustMenu />}></Route>
            <Route path='/leadmenu' element={<LeadMenu />}></Route>
          </Routes>
          </div>
      </Router>


  
  )
}

export default Routing
