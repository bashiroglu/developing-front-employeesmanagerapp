import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookShiftPage() {
  const [shiftDate, setShiftDate] = useState(new Date());
  const [shiftType, setShiftType] = useState('12 hours');
  const [fullname, setFullname] = useState('Abdulla Bashir2');
  const [username, setUsername] = useState('bashir');
  const [shift, setShift] = useState('14-2200');
  const createShift = async () => {
    try {
      await axios.post('http://localhost:3003/api/v1/bookings', {
        date: shiftDate,
        shiftType,
        fullname,
        username,
        shift
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mt-5">
          <DatePicker
            selected={shiftDate ? new Date(shiftDate) : null}
            onChange={setShiftDate}
            onChangeRaw={e => e.preventDefault()}
          />
          <input type="text" onChange={setShiftType} value={shiftType} />
          <input type="text" onChange={setFullname} value={fullname} />
          <input type="text" onChange={setUsername} value={username} />
          <input type="text" onChange={setShift} value={shift} />
          <button onClick={createShift}>createShift</button>
        </div>
      </div>
    </div>
  );
}

export default BookShiftPage;
