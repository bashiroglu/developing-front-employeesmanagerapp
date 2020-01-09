import React from 'react';
import UserItem from '../useritem/UserItem';

function UserList({ employees, button }) {
  
  return (
    <tbody>
      {employees.map(employee => (
        <UserItem
          key={employee.id}
          employee={employee}
          button={button}
        />
      ))}
    </tbody>
  );
}

export default UserList;
