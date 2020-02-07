import React from 'react';

function ShiftItem({ booking }) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {new Date(booking.date).toLocaleString('en-us', {
        weekday: 'long'
      })}
      <span class="badge badge-primary badge-pill">{booking.shiftType}</span>
      <span class="badge badge-primary badge-pill">{booking.shift}</span>
      <span class="badge badge-primary badge-pill">
        {`${new Date(booking.date).getDate()} ${new Date(
          booking.date
        ).toLocaleString('en-us', { month: 'long' })}`}
      </span>
    </li>
  );
}

export default ShiftItem;
