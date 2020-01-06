import React from 'react';
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
      {Object.keys(employee).map(key =>
        key === 'id' ? (
          <th key={employee[key]} scope="row">
            {employee.id}
          </th>
        ) : (
          <td key={employee[key]}>{employee[key]}</td>
        )
      )}
    </tr>
  );
}

export default UserItem;
