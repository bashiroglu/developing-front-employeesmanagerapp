import React from 'react';
import uuid from 'uuid';
function ListItem({ item, TableColumns }) {
  return (
    <tr key={uuid()}>
      {Object.keys(item).map((bookingObjKey, i) => {
        return <td key={uuid()}>{item[TableColumns[i]]}</td>;
      })}
    </tr>
  );
}

export default ListItem;
