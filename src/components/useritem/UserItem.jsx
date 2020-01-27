import React from 'react';
import uuid from 'uuid';

function UserItem({ employee, button }) {
  const commingArray =
    button === 'confirm'
      ? Object.keys(employee).concat([`confirm${uuid()}`])
      : button === 'deactivate'
      ? Object.keys(employee).concat([`deactivate${uuid()}`])
      : Object.keys(employee);
  console.log(commingArray);

  return (
    <tr>
      <td>hello</td>
    </tr>
  );
}

export default UserItem;
