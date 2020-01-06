import React from 'react';
import UserItem from '../useritem/UserItem';

function UserList({ employees, confirmation }) {
  const existButton = confirmation ? true : false;
  return (
    <tbody>
      {employees.map(employee => (
        <UserItem
          key={employee.id}
          employee={employee}
          existButton={existButton}
        />
      ))}
    </tbody>
  );
}

export default UserList;
