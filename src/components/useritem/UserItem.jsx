import React from 'react';

function UserItem({ employee: { name, id, surname, username } }) {
  // console.log(name, id, surname, username);
  // id: '2',
  //       name: 'John',
  //       surname: 'Bottom',
  //       username: 'johnbottom'

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
    </tr>
  );
}

export default UserItem;
