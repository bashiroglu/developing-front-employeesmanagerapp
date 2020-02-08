import React from 'react';
import uuid from 'uuid';
function ListItem({ item, tableColumns }) {
  return (
    <tr key={uuid()}>
      {Object.keys(item).map((bookingObjKey, i) => {
        return <td key={uuid()}>{item[tableColumns[i]]}</td>;
      })}
    </tr>
  );
}

export default ListItem;
