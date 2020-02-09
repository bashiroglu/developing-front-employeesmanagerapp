import { useState } from 'react';

export default () => {
  const userObject = JSON.parse(localStorage.getItem('userObject'));

  if (userObject) {
    const [user, setuser] = useState(userObject);
    const logout = () => {
      localStorage.removeItem('userObject');
      setuser({});
    };
    return [user, setuser, logout];
  } else {
    const [user, setuser] = useState({});
    const logout = () => {
      localStorage.removeItem('userObject');
      setuser({});
    };
    return [user, setuser, logout];
  }
};
