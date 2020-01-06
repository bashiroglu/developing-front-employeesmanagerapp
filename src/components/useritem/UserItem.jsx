import React from 'react';

function UserItem({ employee }) {
  return (
    <tr>
      <th scope="row">{employee.id}</th>
      {Object.keys(employee).map(key => (
        <td key={employee[key]}>{employee[key]}</td>
      ))}
    </tr>
  );
}

export default UserItem;
