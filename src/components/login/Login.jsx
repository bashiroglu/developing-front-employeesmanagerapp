import React, { useContext, useState } from 'react';
import axios from 'axios';
import useInputState from '../../utils/hooks/useInputState';
import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';
import { AuthContext } from '../../utils/context/authContext';
import { Link } from 'react-router-dom';

function Login() {
  const [emailInputValue, handleEmail] = useInputState('');
  const [password, handlePassword] = useInputState('');
  const { setUserObject } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post(
      'http://localhost:3003/api/v1/users/login',
      {
        email: emailInputValue,
        password
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
  }
  return (
    <form onSubmit={handleLoginSubmit}>
      <h2>I have already account</h2>
      <Input
        label="Email"
        type="email"
        id="email"
        element="input"
        name="email"
        value={emailInputValue}
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
      <Button classes=" mx-3 btn-primary">
        {loading ? 'signing' : 'Log in'}
      </Button>
      <Link className="nav-link" to="/sign-up">
        I do not have account
      </Link>
    </form>
  );
}

export default Login;
