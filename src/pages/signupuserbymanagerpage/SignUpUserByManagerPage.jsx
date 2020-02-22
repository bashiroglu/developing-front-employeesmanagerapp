import React, { useState } from 'react';
import uuid from 'uuid/v4';
import axios from 'axios';

import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';

function SignUpUserByManagerPage({ userDataTableColumns }) {
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const initialUsers = JSON.parse(localStorage.getItem('usersForRegister'))
    ? JSON.parse(localStorage.getItem('usersForRegister'))
    : [];
  const [users, setUsers] = useState(initialUsers);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [groupname, setGroupname] = useState('');
  const [itemToModify, setItemToModify] = useState('');
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
    setFullname('');
    setEmail('');
    setGroupname('');
    setUpdating(false);
  };

  const handleUsersRegisterSubmit = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:3003/api/v1/users/signup-many', {
        users
      });
      localStorage.removeItem('usersForRegister');
      setUsers([]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckboxChange = email => {
    if (itemToModify === email) {
      setItemToModify('');
    } else {
      setItemToModify(email);
    }
  };
  const handleDelete = email => {
    const usersArray = users.filter(user => user.email !== email);
    setItemToModify('');
    setUsers(usersArray);
    localStorage.setItem('usersForRegister', JSON.stringify(usersArray));
  };
  const handleUpdate = email => {
    const user = users.find(user => user.email === email);
    setItemToModify('');
    setFullname(user.fullname);
    setEmail(user.email);
    setGroupname(user.groupname);
    // handleUserUpdatedDataSubmit(email);

    // setUsers(usersArray);
    // localStorage.setItem('usersForRegister', JSON.stringify(usersArray));
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <form className="col-md-4" onSubmit={handleUserDataSubmit}>
            <Input
              onChange={e => setFullname(e.target.value)}
              id="fullname"
              label="Full Name"
              name="fullname"
              value={fullname}
              element
              placeholder="Add user full name please"
            />
            <Input
              onChange={e => setEmail(e.target.value)}
              name="emails"
              id="emails"
              label="Email"
              value={email}
              element
              placeholder="Add user email please"
            />
            <Input
              onChange={e => setGroupname(e.target.value)}
              name="groupname"
              id="groupname"
              label="Groupname (not mandatory)"
              value={groupname}
              element
              placeholder="Add user's groupname"
            />
            <Button classes=" mx-3 btn-primary">
              {updating ? 'Update user data' : 'Add user to the list'}
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
                      {['checkbox', ...Object.keys(user)].map((key, i) => {
                        return key === 'checkbox' ? (
                          <td key={uuid()}>
                            <input
                              onChange={() => handleCheckboxChange(user.email)}
                              type="checkbox"
                              checked={user.email === itemToModify}
                            />
                          </td>
                        ) : (
                          <td key={uuid()}>{user[key]}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="row">
              {users.length > 0 ? (
                <Button
                  onClick={handleUsersRegisterSubmit}
                  classes=" mx-3 btn-success"
                >
                  {loading ? 'Your request is completing' : 'Sign Up all users'}
                </Button>
              ) : null}
              {users.length > 0 ? (
                <Button
                  onClick={() => handleDelete(itemToModify)}
                  classes=" mx-3 btn-danger"
                  disabled={itemToModify === ''}
                >
                  Delete
                </Button>
              ) : null}
              {users.length > 0 ? (
                <Button
                  onClick={() => {
                    setUpdating(true);
                    handleDelete(itemToModify);
                    handleUpdate(itemToModify);
                  }}
                  classes=" mx-3 btn-warning"
                  disabled={itemToModify === ''}
                >
                  Update
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
SignUpUserByManagerPage.defaultProps = {
  userDataTableColumns: ['checkbox', 'fullname', 'email', 'groupname']
};

export default SignUpUserByManagerPage;
