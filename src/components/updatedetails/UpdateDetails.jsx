import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';
import { AuthContext } from '../../utils/context/authContext';

function UpdateDetails() {
  const { userObject } = useContext(AuthContext);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [groupname, setGroupname] = useState('');
  const [shoesize, setShoesize] = useState('');
  const [bodysize, setBodysize] = useState('');
  console.log(userObject.email);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:3003/api/v1/users/details/${userObject.email}`
      );

      const { email, fullname, username, groupname } = response.data.user;

      setFullname(fullname);
      setEmail(email);
      setUsername(username);
      setGroupname(groupname);
    }
    getData();
  }, [userObject]);
  return (
    <form className="col-md-6 mt-4">
      <h2>Fill in your details</h2>
      <p>This data will be used to provide you neccessary items to work</p>
      <Input
        label="Email"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        element="input"
        additionaltextid="notifythatyouwillneed"
        additionaltext="Please provide valid email for security purposes"
      />
      <Input
        label="Name"
        type="text"
        id="fullname"
        name="fullname"
        element="input"
        value={fullname}
        onChange={e => setFullname(e.target.value)}
      />
      <Input
        label="username"
        type="text"
        id="username"
        name="username"
        element="input"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        label="Provide your group name"
        value={groupname}
        disabled={true}
        type="email"
        id="groupname"
        name="groupname"
        element="input"
        additionaltextid="groupnamefromagency"
        additionaltext="You can not update your groupname"
      />
      <Input
        label="Provide your shoe size"
        type="text"
        id="shoeSize"
        name="shoeSize"
        element="input"
        value={shoesize}
        onChange={e => setShoesize(e.target.value)}
        additionaltextid="shoetext"
        additionaltext="We need this information to provide you with shoes"
      />
      <Input
        label="Provide your body size"
        type="body"
        name="bodysize"
        id="body"
        element="input"
        value={bodysize}
        onChange={e => setBodysize(e.target.value)}
        additionaltextid="bodytext"
        additionaltext="We need this information to provide you with T-shirt"
      />
      <Button classes="mx-3 btn-success">Update</Button>
    </form>
  );
}

export default UpdateDetails;
