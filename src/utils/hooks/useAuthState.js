import { useState } from 'react';

export default () => {
  const [user, setuser] = useState('');
  return [user, setuser];
};
