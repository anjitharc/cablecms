import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserMinus ,FaRegEdit } from "react-icons/fa";
import {BiUserPlus} from "react-icons/bi";
import { Url } from "../../Global";


const LeadList = () => {

    const navigate = useNavigate();

const LoadEdit = (id) => {

navigate("/leadedit/"+id);
}



  const removefntn = (id) => {
    if (window.confirm("Do You Want To Remove")) {
      fetch(Url + "lead/" +id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully");
          window.location.reload();
          console.alert(id)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };


  const [leaddta, leaddtachange] = useState(null);
  useEffect(() => {
    fetch(Url + "casual_leads")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        leaddtachange(resp.data);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2> NORMAL ENQ LEAD LIST</h2>
        </div>

        <div className="card-body">
         
          
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>BOOKING ID</td>
                <td>NAME</td>
                <td>PHONE</td>
                <td>ADDRESS</td>
                <td>TYPE</td>
                <td>LEAD THROUGH</td>
              </tr>
            </thead>
            <tbody>
              {leaddta &&
                leaddta.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index+1}
                    </td>
                    <td>{item.bookingNo}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.address}</td>
                    <td>{item.type}</td>
                    <td>{item.leadThrough}
        
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default LeadList;
