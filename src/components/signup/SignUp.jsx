import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';
import useInputState from '../../utils/hooks/useInputState';
import useAuthState from '../../utils/hooks/useAuthState';

function SignUp() {
  const [user, setUser] = useAuthState('');
  const [email, handleEmail] = useInputState('');
  const [password, handlePassword] = useInputState('');
  const [groupname, handleGroupname] = useInputState('');
  const [passwordConfirm, handlePasswordConfirm] = useInputState('');
  async function handleSignUpSubmit(e) {
    e.preventDefault();
    const response = await axios.post(
      'http://localhost:3003/api/v1/users/signup',
      {
        name: groupname,
        email: email,
        password: password
      }
    );
    setUser({
      token: response.data.token,
      email: response.data.email,
      userid: response.data.userId
    });
    console.log(user);

    console.log(response.data.token, response.data.userId, response.data.email);
  }
  return (
    <form onSubmit={handleSignUpSubmit}>
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
      <div className="row">
        <Button classes=" mx-3 btn-success">Sign up</Button>
        <Link className="nav-link" to="/sign-in">
          I do have account
        </Link>
      </div>
    </form>
  );
}

export default SignUp;
