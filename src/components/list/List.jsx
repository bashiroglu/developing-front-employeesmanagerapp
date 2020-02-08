import React from 'react';

import ListItem from '../listItem/ListItem';

function List({ bookings, TableColumns }) {
  return (
    <tbody>
      {bookings.map(booking => {
        return <ListItem TableColumns={TableColumns} booking={booking} />;
      })}
    </tbody>
  );
}

export default List;
