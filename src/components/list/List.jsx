import React from 'react';
import uuid from 'uuid';

import ListItem from '../listItem/ListItem';

function List({ items, tableColumns }) {
  return (
    <tbody>
      {items.map(item => {
        return (
          <ListItem key={uuid()} tableColumns={tableColumns} item={item} />
        );
      })}
    </tbody>
  );
}

export default List;
