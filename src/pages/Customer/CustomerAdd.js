import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider, Grid, TextField } from "@material-ui/core";
import { Url } from "../../Global";
import { MdAssignmentInd } from "react-icons/md";
import { TextFields } from "@mui/icons-material";



const CustomerAdd = () => {
  const [crfNumber, crfNumberchange] = useState("");
  const [address, addresschange] = useState("");
  const [phone, phonechange] = useState("");
  const [email, emailchange] = useState("");
  const [firstName, firstNamechange] = useState("");
  const [middleName, middleNamechange] = useState("");
  const [lastName, lastNamechnge] = useState("");
  const [gender, genderchnge] = useState("");
  const [userId, userIdchnge] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);


  const handlesubmit = (e) => {
    e.preventDefault();
    const custdta = {
      address,
      crfNumber,
      email,
      firstName,
      middleName,
      lastName,
      gender,
      phone,
      userId,
    };
    fetch(Url + "customer", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(custdta),
    })
      .then((res) => {
        alert("Saved Successfully");

      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  return (



    <Grid Container>
      <h3 className="card-header mb-4 pb-2 pb-md-0 mb-md-5">
        <MdAssignmentInd />  Customer Registration
      </h3>
      <br></br>
      <form onSubmit={handlesubmit}>

        <Grid item xs={6}>





          <TextField
            label="CRF Number"
            type="tel"
            variant="outlined"
            id="phoneNumber" value={crfNumber}
            className="form-control form-control-lg" onChange={(e) =>
              crfNumberchange(e.target.value)}
          />


        </Grid>
        <Grid item xs={6}>

          <TextField
            variant="outlined"
            label="First Name"
            type="name" value={firstName}
            id="name" onChange={(e) =>
              firstNamechange(e.target.value)}

          />



          <TextField
            type="text" value={middleName}
            id="LastName" placeholder="Middle Name"
            className="form-control form-control-lg" onChange={(e) =>
              middleNamechange(e.target.value)}
          />


          <TextFields
            type="text" value={lastName}

            className="form-control form-control-lg" placeholder="Last Name" onChange={(e) =>
              lastNamechnge(e.target.value)}
          />


        </Grid>
        <Grid item xs={6}>

          <div className="row">
            <div className="col-md-6 mb-4 d-flex align-items-center">
              <div className="form-outline datepicker w-100">
                <input
                  type="tel" value={phone}
                  className="form-control form-control-lg"
                  placeholder=" Mob Number" onChange={(e) =>
                    phonechange(e.target.value)}
                />

              </div>
            </div>
            <div className="col-md-6 mb-4">
              <h6 className="mb-2 pb-1">Gender: </h6>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="femaleGender"
                  value="Female"
                  checked onChange={(e) =>
                    genderchnge(e.target.value)}
                />
                <label className="form-check-label" for="femaleGender">
                  Female
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="maleGender"
                  value="Male" onChange={(e) =>
                    genderchnge(e.target.value)}
                />
                <label className="form-check-label" for="maleGender">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="otherGender"
                  value="Other" onChange={(e) =>
                    genderchnge(e.target.value)}
                />
                <label className="form-check-label" for="otherGender">
                  Other
                </label>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="row">
            <div className="col-md-12 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="text"

                  className="form-control form-control-lg"
                  placeholder=" Address" onChange={(e) =>
                    addresschange(e.target.value)}
                />
              </div>

            </div>
          </div>


          <div className="row">
            <div className="col-md-12 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="email"
                  id="emailAddress" value={email}
                  className="form-control form-control-lg" placeholder="E-Mail" onChange={(e) =>
                    emailchange(e.target.value)}
                />

              </div>
            </div>

          </div>



          <div className="mt-4 pt-2">
            <input
              className="btn btn-primary btn-lg"
              type="submit"
              value="Submit"
            />
          </div>
        </Grid>
      </form>

    </Grid>


  );
};

export default CustomerAdd;
