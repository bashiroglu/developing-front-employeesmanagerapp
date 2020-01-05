import React from 'react';
import UserItem from '../useritem/UserItem';

function UserList({ employees }) {
  return (
    <tbody>
      {employees.map(employee => (
        <UserItem key={employee.id} employee={employee} />
      ))}
    </tbody>
  );
}

export default UserList;
