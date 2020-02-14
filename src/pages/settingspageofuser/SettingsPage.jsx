import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Input from '../../components/elements/formelements/input/Input';
import Button from '../../components/elements/formelements/button/Button';
import UpdatePassword from '../../components/updatepassword/UpdatePassword';
import useInputState from '../../utils/hooks/useInputState';
import { AuthContext } from '../../utils/context/authContext';

function SettingsPage() {
  // const [loading, setLoading] = useState(false);
  const { userObject } = useContext(AuthContext);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  console.log(userObject.email);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:3003/api/v1/users/details/${userObject.email}`
      );
      console.log(response.data);

      const { email, fullname, username } = response.data.user;
      console.log(email, fullname, username);

      setFullname(fullname);
      setEmail(email);
      setUsername(username);
    }
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row">
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
          {/* <Input
            label="Provide your group name"
            type="email"
            id="groupname"
            name="groupname"
            element="input"
            additionaltextid="groupnamefromagency"
            additionaltext="You can get your groupname from your agency"
          />
          <Input
            label="Provide your shoe size"
            type="text"
            id="shoeSize"
            name="shoeSize"
            element="input"
            additionaltextid="shoetext"
            additionaltext="We need this information to provide you with shoes"
          />
          <Input
            label="Provide your body size"
            type="body"
            name="bodySize"
            id="body"
            element="input"
            additionaltextid="bodytext"
            additionaltext="We need this information to provide you with T-shirt"
          /> */}
          <Button classes="mx-3 btn-success">Update</Button>
          {/* <Button classes=" mx-3 btn-success">Sign Up all users</Button> */}
        </form>
        <UpdatePassword />
      </div>
    </div>
  );
}

export default SettingsPage;
