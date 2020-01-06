import React from 'react';

function UserItem({ employee }) {
  return (
    <tr>
      {Object.keys(employee).map(key =>
        key === 'id' ? (
          <th key={employee[key]} scope="row">{employee.id}</th>
        ) : (
          <td key={employee[key]}>{employee[key]}</td>
        )
      )}
    </tr>
  );
}

export default UserItem;
