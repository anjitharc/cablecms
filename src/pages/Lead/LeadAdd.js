import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "../../Global";
import { Paper } from "@material-ui/core";

const LeadAdd = () => {
  const [name, namechange] = useState("");
  const [address, addresschange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [leadThrough, leadThroughchange] = useState("");
  const [staffId, staffIdchange] = useState("");
  const [type, typechange] = useState("");
  const [leadCategory, leadCategorychnge] = useState("");
  const navigate = useNavigate();

 

  const handlesubmit = (e) => {
    e.preventDefault();
    const leaddta = {
      name,
      address,
      mobile,
      leadThrough,
      staffId,
      type,
      leadCategory,
    };
    fetch(Url + "lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(leaddta),
    })
      .then((res) => {
        alert("Saved Successfully");
        navigate(-1);
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
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form
            validate
            required
            className="container"
            onSubmit={handlesubmit}
            component={Paper}
          >
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="card-header">
                  <center>Create Lead</center>
                </h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>NAME : </label>
                      <input
                        required
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>MOBILE : </label>
                      <input
                        required
                        maxlength="10"
                        value={mobile}
                        onChange={(e) => mobilechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> ADDRESS : </label>
                      <input
                        required
                        value={address}
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>AREA : </label>
                      <input className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>STAFF : </label>
                      <select
                        onChange={(e) => staffIdchange(e.target.value)}
                        className="form-select"
                      >
                        <option>SELECT</option>;
                        {staffdtls
                          ? staffdtls.map((staffs) => {
                              return (
                                <option value={staffs.id}>{staffs.name}</option>
                              );
                            })
                          : null}
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>LEAD CATEGORY : </label>
                      <select
                        onChange={(e) => leadCategorychnge(e.target.value)}
                        className="form-select"
                      >
                        <option value="1">CONFIRM LEAD</option>

                        <option value="2">JUST ENQUIRY</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>LEAD THROUGH : </label>
                      <select
                        onChange={(e) => leadThroughchange(e.target.value)}
                        className="form-select"
                      >
                        <option>SELECT</option>
                        <option value="ONLINE">ONLINE</option>

                        <option value="KCCL MARKETING">KCCL MARKETING</option>

                        <option value="REFERANCE">REFERENCE</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>TYPE : </label>
                      <select
                        onChange={(e) => typechange(e.target.value)}
                        className="form-select"
                      >
                        <option value="CABLE TV">CABLE TV</option>

                        <option selected value="BROADBAND">
                          BROADBAND
                        </option>

                        <option value="COMBO STB">COMBO STB</option>

                        <option value="COMBO ITV">COMBO ITV</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="ldadd-btn">
                        <button className="btn btn-success" type="submit">
                          SAVE
                        </button>

                        <Link to="/leadlist" className="btn btn-danger">
                          {" "}
                          BACK{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadAdd;
