import React from 'react'
import Image2 from '../../Assets/sample.png'

const EditProfile = () => {
  return (
   
       


<form>
  <div className="row mb-3">
    <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
    <div className="col-md-8 col-lg-9">
      <img src={Image2} alt="Profile" style={{height:"100px" , width:"100px"}}/>
      <div className="pt-2">
        <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></a>
        <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
      </div>
    </div>
  </div>

  <div className="row mb-3">
    <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
    <div className="col-md-8 col-lg-9">
      <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin Anderson"/>
    </div>
  </div>



  <div className="row mb-3">
    <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
    <div className="col-md-8 col-lg-9">
      <input name="company" type="text" className="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
    <div className="col-md-8 col-lg-9">
      <input name="job" type="text" className="form-control" id="Job" value="Web Designer"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
    <div className="col-md-8 col-lg-9">
      <input name="country" type="text" className="form-control" id="Country" value="USA"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
    <div className="col-md-8 col-lg-9">
      <input name="address" type="text" className="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
    <div className="col-md-8 col-lg-9">
      <input name="phone" type="text" className="form-control" id="Phone" value="(436) 486-3538 x29071"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
    <div className="col-md-8 col-lg-9">
      <input name="email" type="email" className="form-control" id="Email" value="k.anderson@example.com"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
    <div className="col-md-8 col-lg-9">
      <input name="twitter" type="text" className="form-control" id="Twitter" value="https://twitter.com/#"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
    <div className="col-md-8 col-lg-9">
      <input name="facebook" type="text" className="form-control" id="Facebook" value="https://facebook.com/#"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
    <div className="col-md-8 col-lg-9">
      <input name="instagram" type="text" className="form-control" id="Instagram" value="https://instagram.com/#"/>
    </div>
  </div>

  <div className="row mb-3">
    <label for="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
    <div className="col-md-8 col-lg-9">
      <input name="linkedin" type="text" className="form-control" id="Linkedin" value="https://linkedin.com/#" />
    </div>
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary">Save Changes</button>
  </div>
</form>
   
  )
}

export default EditProfile
