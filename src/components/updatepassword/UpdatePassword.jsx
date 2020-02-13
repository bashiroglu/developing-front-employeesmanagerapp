import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../utils/context/authContext';

import Input from '../elements/formelements/input/Input';
import Button from '../elements/formelements/button/Button';
import useInputState from '../../utils/hooks/useInputState';

function UpdatePassword() {
  const { userObject } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [
    currentPassword,
    setCurrentPassword,
    resetCurrentPassword
  ] = useInputState('');
  const [password, setPassword, resetPassword] = useInputState('');
  const [
    passwordConfirm,
    setPasswordConfirm,
    resetPasswordConfirm
  ] = useInputState('');
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    if (password === passwordConfirm) {
      await axios.patch('http://localhost:3003/api/v1/users/update-password', {
        email: userObject.email,
        currentPassword,
        password,
        passwordConfirm
      });
      setLoading(false);
      resetPassword();
      resetCurrentPassword();
      resetPasswordConfirm();
    } else {
      console.log('password, passwordConfirm should be the same');
    }
  };
  return (
    <form className="col-md-6 mt-4" onSubmit={handleSubmit}>
      <h2>You can update your password</h2>
      <Input
        label="Password"
        type="password"
        name="password"
        id="password"
        element="input"
        value={currentPassword}
        onChange={setCurrentPassword}
      />
      <Input
        label="New Password"
        type="password"
        id="newpassword"
        name="newpassword"
        element="input"
        value={password}
        onChange={setPassword}
      />
      <Input
        label="New Password Confirm"
        type="password"
        id="newPasswordConfirm"
        name="newPasswordConfirm"
        element="input"
        value={passwordConfirm}
        onChange={setPasswordConfirm}
      />

      <Button classes=" mx-3 btn-success">
        {loading ? 'your request is processing' : 'Update Password'}
      </Button>
    </form>
  );
}

export default UpdatePassword;
