
import './App.css';
import Login from './Auth/Login';
import axios from 'axios';
import MiuiSide from './pages/nav/MiuiSide';
import Footer from './pages/nav/Footer';
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

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("data");
  window.location.href = "/";
};

function App() {

  const token = localStorage.getItem("token");
  const userdetails = JSON.parse(localStorage.getItem('data'));


  if (!token) {
    return <Login />;
  }
  return (

<div className="App">

<MiuiSide />
<Footer />
 </div>
 
  );

}
export default App;
