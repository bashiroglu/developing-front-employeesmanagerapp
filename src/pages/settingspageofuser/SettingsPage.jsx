import React from 'react';

import UpdatePassword from '../../components/updatepassword/UpdatePassword';
import UpdateDetails from '../../components/updatedetails/UpdateDetails';

function SettingsPage() {
  return (
    <div className="container">
      <div className="row">
        <UpdateDetails />
        <UpdatePassword />
      </div>
    </div>
  );
}

export default SettingsPage;
