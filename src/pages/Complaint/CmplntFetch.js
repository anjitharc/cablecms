import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ComplaintCtgry from "./ComplaintCtgry";
import { TextField } from "@material-ui/core";
import { IoMdAddCircle } from "react-icons/io";
import swal from "sweetalert";
import { Url } from "../../Global";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";

const CmplntFetch = () => {
  const [serchname, serchnamechange] = useState("");
  const [categoryId, categoryIdchnge] = useState("");
  const [customer, customerchange] = useState("");
  const [phone, phonechange] = useState("");
  const [complaint, remarkchange] = useState("");
  const [custName, custNamechange] = useState("");
  const [address, addresschange] = useState("");
  const [custsearch, custsearchchange] = useState(null);
const [assignedStaffId , staffIdchange ] = useState();
  const[totalrecords ,totalrecordschange] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingfetch, setLoadingfetch] = useState(false);

  

  async function fetchfunctn(credentials) {
    setLoading(true);
    return fetch(Url + "customer_search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const fetchbtn = async (e) => {
    e.preventDefault();   
    const response = await fetchfunctn({
      custName,
      address,
      
    }) 
    .then((response) => {
      custsearchchange(response.data);
      totalrecordschange(response.count);
     
     
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setLoading(false);
  });
};
   

  const handlesubmit = (customer) => (e) => {
    setLoadingfetch(true);
    e.preventDefault();
    const cmplntdta = { categoryId, customer, phone, complaint ,assignedStaffId};
    fetch(Url + "complaint", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cmplntdta),
    })
      .then((res) => {         
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoadingfetch(false);
    });
  };

  const [cmplntctgry, cmplntctgrychange] = useState(null);
  useEffect(() => {
    fetch(Url + "complaint_category")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        cmplntctgrychange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const custdtls = (id) => {
    navigate("/custdtls/" + id);
  };

  const [staffdtls, staffdtlschange] = useState(null);
  useEffect(() => {
    fetch(Url + "staff")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        staffdtlschange(resp.data);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (loading) {
    return <center><Spinner animation="border" variant="primary" /><h5>Fetching Customer ....</h5></center>;
}

if(loadingfetch){
  return <center><Spinner animation="border" variant="primary" /><h5>Assigning Complaint ....</h5></center>;
}
  return (
   
    <div>
       {loading && <center><Spinner animation="border" variant="primary" /><h5>Assigning Complaint ....</h5></center> }
      <div className="offset">
        <form>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-4 pb-2">
                <div className="form-outline">
                  <label>SEARCH : ( Name / CRF Number ) </label>
                  <input
                    required
                    onChange={(e) => custNamechange(e.target.value)}
                    className="form-control form-control-lg"
                  ></input>
                </div>
              </div>
              <div className="col-md-4 mb-4 pb-2">
                <div className="form-outline">
                  <label>ADDRESS : </label>
                  <input
                    required
                    onChange={(e) => addresschange(e.target.value)}
                    className="form-control form-control-lg"
                  ></input>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <div className="ldadd-btn">
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={fetchbtn}
                    >
                      FETCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            {!totalrecords && (<center><h6>no records found</h6></center>)}
            {totalrecords &&
            <table className="table table-bordered">
              <thead className="bg-local text-white">
                <tr>
                  <td>ID</td>
                  <td>CRF NO</td>
                  <td>NAME</td>
                  <td>PHONE</td>
                  <td>ADDRESS</td>
                  <td>COMPLAINT</td>
                  <td>STAFF</td>
                  <td>REMARK</td>
                  <td>ACTION</td>
                </tr>
              </thead>
              <tbody>             
                {custsearch &&
                  custsearch.map((data, index) => (
                  
                   <tr key={data.id}>
                      <td>{index + 1}</td>
                      <Link to={"/custdtls/" + data.id }> <td> {data.crfNumber}</td> </Link>
                      <td>
                        {data.firstName}
                        {data.middleName}
                        {data.lastName}
                      </td>
                      <td>
                        {" "}
                        <TextField
                          defaultValue={data.phone}
                          onChange={(e) => phonechange(e.target.value)}
                        ></TextField>
                      </td>
                      <td>{data.address}</td>
                      <td>
                        <select
                          onChange={(e) => categoryIdchnge(e.target.value)}
                          className="form-select"
                        >
                          <option>SELECT</option>;
                          {cmplntctgry
                            ? cmplntctgry.map((cmplnt) => {
                                return (
                                  <option value={cmplnt.id}>
                                    {cmplnt.name}
                                  </option>
                                );
                              })
                            : null}
                        </select>
                      </td>

                      <td>
                      <select onChange={(e)=> 
                        staffIdchange(e.target.value)
                      } className="form-select">
                      <option>SELECT</option>;
                        {staffdtls
                        ? staffdtls.map((staffs) => {
                          return <option value={staffs.id}>{staffs.name}</option>;
                        } ) :null }
                      </select>
                      </td>

                      <td>
                        <TextField
                          onChange={(e) => remarkchange(e.target.value)}
                        ></TextField>
                      </td>
                      <td>
                        <IoMdAddCircle
                          type="button"
                          size="25"
                          color="blue"
                          onClick={handlesubmit(data.id)}
                        ></IoMdAddCircle>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CmplntFetch;
