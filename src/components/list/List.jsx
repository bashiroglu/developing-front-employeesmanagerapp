import React from 'react';
import uuid from 'uuid';

import ListItem from '../listItem/ListItem';

function List({ items, tableColumns, checkbox, onChange,checkedList }) {
  return (
    <tbody>
      {items.map(item => {
        return (
          <ListItem
            key={uuid()}
            checkbox={checkbox}
            tableColumns={tableColumns}
            item={item}
            onChange={onChange}
            checkedList={checkedList}
          />
        );
      })}
    </tbody>
  );
}

export default List;
