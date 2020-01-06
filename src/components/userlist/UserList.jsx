import React from 'react';
import UserItem from '../useritem/UserItem';

function UserList({ employees, confirmation }) {
  return (
    <tbody>
      {employees.map(employee => (
        <UserItem key={employee.id} employee={employee} confirmation />
      ))}
    </tbody>
  );
}

export default UserList;
