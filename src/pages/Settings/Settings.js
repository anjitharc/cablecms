import { Divider } from '@material-ui/core'
import React from 'react'

const Settings = () => {
  return (
    <div>
      <form>

<div class="row mb-3">
  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
  <div class="col-md-8 col-lg-9">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="changesMade" checked  />
      <label class="form-check-label" for="changesMade">
        New Complaint Booked
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="newProducts" checked />
      <label class="form-check-label" for="newProducts">
        Information on new services
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="proOffers" />
      <label class="form-check-label" for="proOffers">
        Marketing and promo offers
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled />
      <label class="form-check-label" for="securityNotify">
        Security alerts
      </label>
    </div>
  </div>

  <Divider />

  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">SMS Notifications</label>
  <div class="col-md-8 col-lg-9">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="changesMade" checked  />
      <label class="form-check-label" for="changesMade">
        New Complaint Booked
      </label>
    </div>
    

  </div>

</div>

<div class="text-center">
  <button type="submit" class="btn btn-primary">Save Changes</button>
</div>
</form>
    </div>
  )
}

export default Settings