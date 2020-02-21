import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';
import useInputState from '../../utils/hooks/useInputState';

function SignUp() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(false);
  const [emailInputValue, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  const [groupname, setGroupname] = useInputState('');
  const [fullnameInputValue, setFullname] = useInputState('');
  const [usernameInputValue, setUsername] = useInputState('');
  const [passwordConfirm, setPasswordConfirm] = useInputState('');
  const [loading, setLoading] = useState(false);
  async function handleSignUpSubmit(e) {
    e.preventDefault();
    try {
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
      if (response.data.operation === 'success') {
        setSuccess(
          'your account has been created, but you need to wait approval of your manager. Then you can enter to you profile'
        );
        setLoading(false);
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSignUpSubmit}>
      {success ? (
        <div class="alert alert-success" role="alert">
          {success}
        </div>
      ) : (
        <>
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
          {error && (
            <div class="alert alert-warning" role="alert">
              {error}
            </div>
          )}
          <div className="row">
            <>
              <Button classes=" mx-3 btn-primary">
                {loading ? 'your account is creating' : 'Sign up'}
              </Button>
              <Link className="nav-link" to="/sign-in">
                I do have account
              </Link>
            </>
          </div>
        </>
      )}
    </form>
  );
}

export default SignUp;
