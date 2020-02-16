import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';
import useInputState from '../../utils/hooks/useInputState';
import { AuthContext } from '../../utils/context/authContext';

function SignUp() {
  const { setUserObject } = useContext(AuthContext);
  const [emailInputValue, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  const [groupname, setGroupname] = useInputState('');
  const [fullnameInputValue, setFullname] = useInputState('');
  const [usernameInputValue, setUsername] = useInputState('');
  const [passwordConfirm, setPasswordConfirm] = useInputState('');
  const [loading, setLoading] = useState(false);
  async function handleSignUpSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post(
      'http://localhost:3003/api/v1/users/signup',
      {
        groupname: groupname,
        email: emailInputValue,
        password,
        fullname: fullnameInputValue,
        username: usernameInputValue
      }
    );
    setLoading(false);
    const { token, email, userId, username, fullname } = response.data;
    localStorage.setItem(
      'userObject',
      JSON.stringify({
        userId,
        token,
        email,
        username,
        fullname
      })
    );
    setUserObject(response.data);

    // console.log(response.data.token, response.data.userId, response.data.email);
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
        additionaltext="Please provide valid email, you will need to access your account"
        name="email"
        value={emailInputValue}
        onChange={setEmail}
      />
      <Input
        label="Fullname"
        type="text"
        id="text"
        element="input"
        additionaltextid="notifythatyouwillneed"
        additionaltext="Please provide valid fullname, you will need to access your account"
        name="fullname"
        value={fullnameInputValue}
        onChange={setFullname}
      />
      <Input
        label="Username"
        type="text"
        id="text"
        element="input"
        additionaltextid="notifythatyouwillneed"
        additionaltext="Please provide valid Username, you will need to access your account"
        name="username"
        value={usernameInputValue}
        onChange={setUsername}
      />
      <Input
        label="Password"
        type="password"
        id="password"
        element="input"
        name="password"
        value={password}
        onChange={setPassword}
      />
      <Input
        label="Password Confirm"
        type="password"
        id="passwordConfirm"
        element="input"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={setPasswordConfirm}
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
        onChange={setGroupname}
      />
      <div className="row">
        <Button classes=" mx-3 btn-success">Sign up</Button>
        <Button classes=" mx-3 btn-primary">
          {loading ? 'your account has been creating' : 'Sign up'}
        </Button>
        <Link className="nav-link" to="/sign-in">
          I do have account
        </Link>
      </div>
    </form>
  );
}

export default SignUp;
