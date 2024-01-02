import React, { useState } from 'react';
import PopupForm from './LeadCreate';


function LeadMain() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="app">
      <button onClick={openPopup}>Open Popup Form</button>

      {isPopupOpen && <PopupForm onClose={closePopup} />}
    </div>
  );
}

export default LeadMain;