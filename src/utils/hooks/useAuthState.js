import { useState } from 'react';

export default () => {
  const userObject = JSON.parse(localStorage.getItem('userObject'));
  if (userObject) {
    const [user, setuser] = useState(userObject);
    return [user, setuser];
  } else {
    const [user, setuser] = useState({});
    return [user, setuser];
  }
};
