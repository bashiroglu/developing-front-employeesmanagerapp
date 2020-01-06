import React from 'react';
import uuid from 'uuid';
import Button from '../elements/formelements/button/Button';

function UserItem({ employee, confirmation }) {
  return (
    <tr>
      {/* {Object.keys(employee).map(key =>
        key === 'id' ? (
          <th key={employee[key]} scope="row">
            {employee.id}
          </th>
        ) : confirmation ? (
          
        ) : (
          <td key={employee[key]}>{employee[key]}</td>
        )
      )} */}
      {Object.keys(employee)
        .concat([`confirm${uuid()}`])
        .map(key =>
          key === 'id' ? (
            <th key={employee[key]} scope="row">
              {employee.id}
            </th>
          ) : key.startsWith('confirm') ? (
            <td key={employee[key]}>
              <Button classes=" mx-3 btn-success">Confirm</Button>
            </td>
          ) : (
            <td key={employee[key]}>{employee[key]}</td>
          )
        )}
    </tr>
  );
}

export default UserItem;
