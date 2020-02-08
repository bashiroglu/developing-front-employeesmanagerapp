import React from 'react';

import ListItem from '../listItem/ListItem';

function List({ items, tableColumns }) {
  return (
    <tbody>
      {items.map(item => {
        return <ListItem tableColumns={tableColumns} item={item} />;
      })}
    </tbody>
  );
}

export default List;
