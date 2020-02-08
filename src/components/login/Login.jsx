import React, { useContext } from 'react';
import useInputState from '../../utils/hooks/useInputState';
import Input from './../elements/formelements/input/Input';
import Button from './../elements/formelements/button/Button';
import { AuthContext } from '../../utils/context/authContext';

function Login() {
  const [email, handleEmail] = useInputState('');
  const [password, handlePassword] = useInputState('');
  const { setUserObject } = useContext(AuthContext);

  function handleLoginSubmit(e) {
    e.preventDefault();
    setUserObject({ user: { email, password } });
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
      <Button classes=" mx-3 btn-primary">Log in</Button>
    </form>
  );
}

export default Login;
