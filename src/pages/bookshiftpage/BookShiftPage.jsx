import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookShiftPage() {
  const [shiftDate, setShiftDate] = useState(new Date());
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mt-5">
          <DatePicker
            selected={shiftDate ? new Date(shiftDate) : null}
            onChange={setShiftDate}
            onChangeRaw={e => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}

export default BookShiftPage;
