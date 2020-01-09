import React from 'react';
import uuid from 'uuid';
import Button from '../elements/formelements/button/Button';

function UserItem({ employee, button }) {
  const commingArray =
    button === 'confirm'
      ? Object.keys(employee).concat([`confirm${uuid()}`])
      : button === 'deactivate'
      ? Object.keys(employee).concat([`deactivate${uuid()}`])
      : Object.keys(employee);

  return (
    <tr>
      {commingArray.map(key =>
        key === 'id' ? (
          <th key={employee[key]} scope="row">
            {employee.id}
          </th>
        ) : key.startsWith('confirm') ? (
          <td key={employee[key]}>
            <Button classes=" mx-3 btn-success">Confirm</Button>
          </td>
        ) : key.startsWith('deactivate') ? (
          <td key={employee[key]}>
            <Button classes=" mx-3 btn-danger">Deactivate</Button>
          </td>
        ) : (
          <td key={employee[key]}>{employee[key]}</td>
        )
      )}
    </tr>
  );
}

export default UserItem;
