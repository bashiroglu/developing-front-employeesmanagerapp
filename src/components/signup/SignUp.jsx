import React from 'react';
import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';
import useInputState from '../../utils/hooks/useInputState';

function SignUp() {
  const [email, handleEmail] = useInputState('');
  const [password, handlePassword] = useInputState('');
  const [groupname, handleGroupname] = useInputState('');
  const [passwordConfirm, handlePasswordConfirm] = useInputState('');
  return (
    <form>
      <h2>I don't have account</h2>
      <Input
        label="Email"
        type="email"
        id="email"
        element="input"
        additionaltextid="notifythatyouwillneed"
        additionaltext="Plese provide valid email, you will need to access your account"
        name="email"
        value={email}
        onChange={handleEmail}
      />
      <Input
        label="Password"
        type="password"
        id="password"
        element="input"
        name="password"
        value={password}
        onChange={handlePassword}
      />
      <Input
        label="Password Confirm"
        type="password"
        id="passwordConfirm"
        element="input"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={handlePasswordConfirm}
      />
      <Input
        label="Provide your group name"
        type="text"
        id="groupname"
        element="input"
        additionaltextid="groupnamefromagency"
        additionaltext="You can get your groupname from your agency"
        name="groupname"
        value={groupname}
        onChange={handleGroupname}
      />
      <Button classes=" mx-3 btn-success">Sign up</Button>
    </form>
  );
}

export default SignUp;
