import axios from 'axios';

import React from 'react';
import Button from '../elements/formelements/button/Button';

function ShiftItem({ booking, refresher }) {
  const deleteShift = async () => {
    try {
      await axios.delete(
        `http://localhost:3003/api/v1/bookings/${booking._id}`
      );
      refresher();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    deleteShift();
  };
  return (
    <li className=" list-group-item d-flex justify-content-between align-items-center">
      {new Date(booking.date).toLocaleString('en-us', {
        weekday: 'long'
      })}
      <span className="badge mx-1 badge-primary badge-pill">
        {booking.shiftType}
      </span>
      <span className="badge mx-1 badge-primary badge-pill">
        {booking.shift}
      </span>
      <span className="badge mx-1 badge-primary badge-pill">
        {`${new Date(booking.date).getDate()} ${new Date(
          booking.date
        ).toLocaleString('en-us', { month: 'long' })}`}
      </span>
      <Button onClick={handleClick} classes={'ml-auto  btn-danger'}>
        Cancel
      </Button>
    </li>
  );
}

export default ShiftItem;
