import React from 'react';
import UserItem from '../useritem/UserItem';

function UserList({ employees, button }) {
  return (
    <tbody>
      {employees.map(employee => {
        console.log(employee._id);

        return <UserItem key={employee._id} employee={employee} />;
      })}
    </tbody>
  );
}

export default UserList;
