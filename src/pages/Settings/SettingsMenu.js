import React from 'react'
import { Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap'
import Image2 from '../../Assets/sample.png'
import Profile from './Profile'
import EditProfile from './EditProfile'
import Settings from './Settings'
import ChangePassword from './ChangePassword'
import { Link } from 'react-router-dom'

const SettingsMenu = () => {
  return (
    <Container>
  
            <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item">Settings</li>
          
        </ol>
      </nav>
     
        

        <section className="section profile">
      <div className="row">
        <div className="col-xl-4">

          <div className="card">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src={Image2} alt="Profile" style={{height:"80px" , width:"80px"}} className="rounded-circle"/>
              <h2>Soorya Anjith</h2>
              <h3>Web Designer</h3>
              <div className="social-links mt-2">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>
        
        <div style={{ display: 'block', width: 800, padding: 30 }}>       
      <Tabs defaultActiveKey="second"> 
        <Tab eventKey="first" title="Overview"> 
          <Profile/>
        </Tab> 
        <Tab eventKey="second" title="Edit Profile"> 
          <EditProfile />
        </Tab> 
        <Tab eventKey="third" title="Settings"> 
         <Settings />
        </Tab> 
        <Tab eventKey="fourth" title="Change Password"> 
          <ChangePassword />
        </Tab> 
      </Tabs> 
    </div> 
      </div>
      </section> 
       
       
      </Container>

  )
}

export default SettingsMenu
