import React from 'react';
import uuid from 'uuid';
function ListItem({ booking, TableColumns }) {
  return (
    <tr key={uuid()}>
      {Object.keys(booking).map((bookingObjKey, i) => {
        return <td key={uuid()}>{booking[TableColumns[i]]}</td>;
      })}
    </tr>
  );
}

export default ListItem;
