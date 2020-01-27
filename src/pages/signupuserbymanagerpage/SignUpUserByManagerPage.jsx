import React from 'react';

import useInputState from '../../utils/hooks/useInputState';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

function SignUpUserByManagerPage() {
  const [fullName, handleFullName] = useInputState('');
  const [emails, handleEmails] = useInputState('');

  return (
    <div>
      <form className="container mt-4">
        <Input
          onChange={handleFullName}
          id="fullName"
          label="Name and Surnames"
          name="fullName"
          value={fullName}
        />
        <Input
          onChange={handleEmails}
          name="emails"
          id="emails"
          label="Emails"
          value={emails}
        />
        <Button classes=" mx-3 btn-primary">
          Check and give list of users
        </Button>
        {/* <Button classes=" mx-3 btn-success">Sign Up all users</Button> */}
      </form>
    </div>
  );
}

export default SignUpUserByManagerPage;
