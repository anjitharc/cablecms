
import './App.css';
import Login from './Auth/Login';
import axios from 'axios';
import Footer from './pages/nav/Footer';
import MasterLayout from './pages/MasterLayout';
//import TestCmp from './pages/Default/index'
//import DefaultNav from './examples/Navbars/DefaultNavbar/DefaultNavbarDropdown'






//var hours = 1;
//var now = new Date().getTime();
//var setupTime = localStorage.getItem('setupTime');

//if (setupTime == null) {
//  localStorage.setItem('setupTime', now)
//} else {
//  if(now-setupTime > hours*60*60*1000) {
  //    localStorage.clear()
    //  localStorage.setItem('setupTime', now);
      //window.location.href = "/";
 // }
//}

axios.create({
  baseURL: "http://103.146.174.105:8080/TECHNIQUES/techniques/" 
});

function App() {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Login />;
  }
  return (

<div className="App">

<MasterLayout />
<Footer />
 </div>
 
  );

}
export default App;
