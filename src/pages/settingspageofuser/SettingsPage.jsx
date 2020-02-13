import React from 'react';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';
import UpdatePassword from '../../components/updatepassword/UpdatePassword';

function SettingsPage() {
  return (
    <div className="container">
      <div className="row">
        <form className="col-md-6 mt-4">
          <h2>Fill in your details</h2>
          <p>This data will be used to provide you neccessary items to work</p>
          <Input
            label="Email"
            type="email"
            name="email"
            id="email"
            element="input"
            additionaltextid="notifythatyouwillneed"
            additionaltext="Please provide valid email for security purposes"
          />
          <Input label="Name" type="text" id="name" element="input" />
          <Input
            label="Provide your group name"
            type="email"
            id="groupname"
            name="groupname"
            element="input"
            additionaltextid="groupnamefromagency"
            additionaltext="You can get your groupname from your agency"
          />
          <Input
            label="Provide your shoe size"
            type="text"
            id="shoeSize"
            name="shoeSize"
            element="input"
            additionaltextid="shoetext"
            additionaltext="We need this information to provide you with shoes"
          />
          <Input
            label="Provide your body size"
            type="body"
            name="bodySize"
            id="body"
            element="input"
            additionaltextid="bodytext"
            additionaltext="We need this information to provide you with T-shirt"
          />
          <Button classes="mx-3 btn-success">Update</Button>
          {/* <Button classes=" mx-3 btn-success">Sign Up all users</Button> */}
        </form>
        <UpdatePassword />
      </div>
    </div>
  );
}

export default SettingsPage;
