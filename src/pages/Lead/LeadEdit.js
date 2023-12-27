import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate,Link, useParams } from 'react-router-dom';
import { Url } from "../../Global";
import { AiOutlineRollback } from 'react-icons/ai';



const LeadEdit = () => {



   const { ldid } = useParams();
useEffect(() => {
  fetch(Url + "lead/" + ldid).then((res) => {
    return res.json();

  }).then((resp) => {

   
    idchange(resp.data[0].id);
namechange(resp.data[0].name);
addresschange(resp.data[0].address);
mobilechange(resp.data[0].mobile);
bookingNochng(resp.data[0].bookingNo);


  }).catch((err) => {
    console.log(err.message);
  })
}, []);

const [id ,idchange]=useState("");
const[name,namechange]=useState("");
const[address,addresschange]=useState("");
const[mobile,mobilechange]=useState("");
const[bookingNo,bookingNochng]=useState("");

const navigate = useNavigate();

const handlesubmit =(e) =>{
e.preventDefault();
const leaddta={id,name,address,mobile};

fetch(Url + "lead/"+ldid,{
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(leaddta)
}).then((res)=>{ 
alert('Saved Successfully')
navigate('/');
}).catch((err)=>{
  console.log(err.message)
})

}

  return (
    <div>
      
      <div className='row'>     
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handlesubmit}>
            <div className='card' style={{"textAlign":"left"}}>
              <div className='card-title'>
              <AiOutlineRollback type="button"
    variant="contained"
    size="30"
    style={{ float: "right" }}
    color="blue" 
    className="float-left" onClick={() => navigate(-1)}></AiOutlineRollback>
                <h4 className='card-header'>Edit Lead</h4>
              </div>
              <div className='card-body'>
                <div className='row'>

                <div className='col-lg-12'>
                    <div className='form-group'>
                  <label>ID : </label>
                  <input disabled="disabled" value={ldid}  className='form-control'></input>
                    </div>
                  </div>

                <div className='col-lg-12'>
                    <div className='form-group'>
                  <label>BOOKING NUMBER : </label>
                  <input disabled value={bookingNo}  className='form-control'></input>
                    </div>
                  </div>
                  
                  <div className='col-lg-12'>
                    <div className='form-group'>
                  <label>NAME : </label>
                  <input required value={name} onChange={e=>namechange(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                  <label>MOBILE : </label>
                  <input required maxlength="10" value={mobile} onChange={e=>mobilechange(e.target.value)} className='form-control'></input>
                    </div>
                  </div>


                  <div className='col-lg-12'>
                    <div className='form-group'>
                  <label>ADDRESS : </label>
                  <input required value={address} onChange={e=>addresschange(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <div className='ldadd-btn'>
                <button className='btn btn-success' type='submit' >UPDATE</button>
                
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
  )
}

export default LeadEdit
