import React, { useState } from 'react';
import uuid from 'uuid/v4';
import axios from 'axios';

import useInputState from '../../utils/hooks/useInputState';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

function SignUpUserByManagerPage({ userDataTableColumns }) {
  const [loading, setLoading] = useState(false);
  const initialUsers = JSON.parse(localStorage.getItem('usersForRegister'))
    ? JSON.parse(localStorage.getItem('usersForRegister'))
    : [];
  const [users, setUsers] = useState(initialUsers);
  const [fullname, setFullname, resetFullname] = useInputState('');
  const [email, setEmail, resetEmail] = useInputState('');
  const [groupname, setGroupname, resetGroupname] = useInputState('');
  const handleUserDataSubmit = e => {
    e.preventDefault();
    const user = {
      fullname,
      email,
      groupname
    };
    let usersArray = [...users, user];

    setUsers(usersArray);
    localStorage.setItem('usersForRegister', JSON.stringify(usersArray));
    resetFullname();
    resetEmail();
    resetGroupname();
  };

  const handleUsersRegisterSubmit = async () => {
    setLoading(true);
    await axios.post('http://localhost:3003/api/v1/users/signup-many', {
      users
    });
    localStorage.removeItem('usersForRegister');
    setUsers([]);
    setLoading(false);
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <form className="col-md-4" onSubmit={handleUserDataSubmit}>
            <Input
              onChange={setFullname}
              id="fullname"
              label="Full Name"
              name="fullname"
              value={fullname}
              element
              placeholder="Add user full name please"
            />
            <Input
              onChange={setEmail}
              name="emails"
              id="emails"
              label="Email"
              value={email}
              element
              placeholder="Add user email please"
            />
            <Input
              onChange={setGroupname}
              name="groupname"
              id="groupname"
              label="Groupname (not mandatory)"
              value={groupname}
              element
              placeholder="Add user's groupname"
            />
            <Button classes=" mx-3 btn-primary">
              Add user to the list
            </Button>
          </form>
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  {userDataTableColumns.map(col => {
                    return (
                      <th scope="col" key={uuid()}>
                        {col}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {users.map(user => {
                  return (
                    <tr key={uuid()}>
                      {Object.keys(user).map((key, i) => {
                        return <td key={uuid()}>{user[key]}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {users.length > 0 ? (
              <Button
                onClick={handleUsersRegisterSubmit}
                classes=" mx-3 btn-success"
              >
                {loading ? 'Your request is completing' : 'Sign Up all users'}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
SignUpUserByManagerPage.defaultProps = {
  userDataTableColumns: ['fullname', 'email', 'groupname']
};

export default SignUpUserByManagerPage;
