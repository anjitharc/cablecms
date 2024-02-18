const companyid = JSON.parse(localStorage.getItem('cmpid'));


const Url = 'http://103.146.174.105:8080/TECH/techniques/company/' + companyid + '/'
const AdminUrl = 'https://api.cableman.app/TECHNIQUES/techniques/'

const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    localStorage.removeItem("cmpid");
    window.location.href = "/";
  };

export { Url , AdminUrl , handleLogout }