import React, { useEffect, useState } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";
import { Url } from "../../Global";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import "./Customer_Create.css";

export default function NCust({ onClose }) {
  

  const [name, namechange] = useState("");
  const [address, addresschange] = useState("");
  const [mobile, mobilechange] = useState("");
  const [leadThrough, leadThroughchange] = useState("");
  const [staffId, staffIdchange] = useState("");
  const [type, typechange] = useState("");
  const [leadCategory, leadCategorychnge] = useState("");

  const [crfNumber, crfNumberchange] = useState("");

  const [phone, phonechange] = useState("");
  const [email, emailchange] = useState("");
  const [firstName, firstNamechange] = useState("");
  const [middleName, middleNamechange] = useState("");
  const [lastName, lastNamechnge] = useState("");
  const [gender, genderchnge] = useState("");
  const [userId, userIdchnge] = useState("");


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
        onClose();
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
    <div class="container">
      <div class="text">Customer Registration</div>
      <form validate required onSubmit={handlesubmit}>
        <div class="form-row">

            
          <div class="input-data">
            <input
              type="text"
              required
              onChange={(e) => crfNumberchange(e.target.value)}
            />
            <div class="underline"></div>
            <label for="">CRF Number</label>
          </div>

          <div class="input-data">
            <input
              type="text"
              required
              onChange={(e) => lastNamechnge(e.target.value)}
            />
            <div class="underline"></div>
            <label for="">LCO Number</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data">
            <input
              type="text"
              required
              onChange={(e) => firstNamechange(e.target.value)}
            />
            <div class="underline"></div>
            <label for="">First Name</label>
          </div>
          <div class="input-data">
            <input
              type="text"
              required
              onChange={(e) => middleNamechange(e.target.value)}
            />
            <div class="underline"></div>
            <label for="">Last Name</label>       

          </div>  

          <div class="input-data">
            <input
              type="text"
              required
              onChange={(e) => mobilechange(e.target.value)}
            />
            <div class="underline"></div>
            <label for="">Mobile</label>
          </div>   
        </div>
        <div class="form-row">
        <div class="input-data">
            <input
              type="text"
              required
              onChange={(e) => addresschange(e.target.value)}
            />
            <div class="underline"></div>
            <label for="">Address</label>
          </div>   

          <div class="input-data">
            <input
              type="email"
              required
              onChange={(e) => emailchange(e.target.value)}
            />
            <div class="underline"></div>
            <label for="">E-Mail</label>
          </div>   
        

        </div>
        <div class="form-row">

        <div class="input-data">
            <input
              type="number"
              required
              
            />
            <div class="underline"></div>
            <label for="">Amount</label>
          </div> 
<div>
          <label for="cars">Sub Area:
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></label>

</div>

<div>
          <label for="cars">Area:

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select></label>
</div>
         
        </div>
        <div class="form-row">
        <Controls.Button text="Submit" type="submit" />
        <Controls.Button text="Close" color="default" onClick={onClose}/>
        </div>
      </form>
    </div>
  );
}
