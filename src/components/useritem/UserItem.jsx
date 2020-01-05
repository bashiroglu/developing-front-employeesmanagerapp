import React from 'react';

function UserItem({ employee }) {
  // console.log(name, id, surname, username);
  // id: '2',
  //       name: 'John',
  //       surname: 'Bottom',
  //       username: 'johnbottom'

  return (
    <tr>
      <th scope="row">{employee.id}</th>
      <td>{employee.name}</td>
      <td>{employee.surname}</td>
      <td>{employee.username}</td>
    </tr>
  );
}

export default UserItem;
