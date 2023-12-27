import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "../../Global";

const CmplntAdd = () => {
  const [categoryId, categoryIdchange] = useState("");
  const [complaint, complaintchange] = useState("");
  const [customer, customerchange] = useState("");
  const [phone , phonechange] = useState("");
  
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const leaddta = { categoryId, complaint, customer ,phone  };
    fetch(Url + "complaint", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(leaddta),
    })
      .then((res) => {
        alert("Saved Successfully");
        navigate("/cmplntlist");
        window.location.reload(true)
        
      })
      .catch((err) => {
        console.log(err.message);
      });      
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



  return (
    <div>
      
        <div className="offset">
          <form onSubmit={handlesubmit}>
           
              
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>COMPLAINT CATEGORY : </label>
                      <input
                        required
                        value={categoryId}
                        onChange={(e) => categoryIdchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>NAME : </label>
                      <input
                        required
                        maxlength="10"
                        value={customer}
                        onChange={(e) => customerchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                    <label> COMPLAINT : </label> 
                      <input
                        required
                        value={complaint}
                        onChange={(e) => complaintchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                    <label> PHONE : </label> 
                      <input
                        required
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>


           

                  
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="ldadd-btn">
                        <button className="btn btn-success" type="submit">
                          SAVE
                        </button>
                        
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
          </form>
        </div>
      </div>
    
  );
};

export default CmplntAdd;
