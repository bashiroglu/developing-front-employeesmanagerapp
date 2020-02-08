import React from 'react';

import ListItem from '../listItem/ListItem';

function List({ items, TableColumns }) {
  return (
    <tbody>
      {items.map(item => {
        return <ListItem TableColumns={TableColumns} item={item} />;
      })}
    </tbody>
  );
}

export default List;
