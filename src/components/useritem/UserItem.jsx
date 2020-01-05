import React from 'react';

function UserItem({ employee: { name, id, surname, username,groupname,equipmentStatus } }) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
      <td>{username}</td>
      <td>{username}</td>
      <td>{username}</td>
    </tr>
  );
}

export default UserItem;
