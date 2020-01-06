import React from 'react';
import Input from './../elements/formelements/input/Input';

import Button from './../elements/formelements/button/Button';

function SignUp() {
  return (
    <div>
      <Input
        label="Email"
        type="email"
        id="email"
        element="input"
        additionaltextid="notifythatyouwillneed"
        additionaltext="Plese provide valid email, you will need to access your account"
      />
      <Input label="Password" type="password" id="password" element="input" />
      <Input
        label="Password Confirm"
        type="password"
        id="passwordConfirm"
        element="input"
      />
      <Input
        label="Provide your group name"
        type="email"
        id="groupname"
        element="input"
        additionaltextid="groupnamefromagency"
        additionaltext="You can get your groupname from your agency"
      />

      <Button classes=" mx-3 btn-success">Sign up</Button>
    </div>
  );
}

export default SignUp;
