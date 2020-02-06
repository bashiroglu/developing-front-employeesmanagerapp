import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../../components/elements/formelements/input/Input';
import SelectInput from '../../components/elements/formelements/input/SelectInput';
import Button from '../../components/elements/formelements/button/Button';

function BookShiftPage({ filterOptionsShiftType, filterOptionsShift }) {
  const [loading, setLoading] = useState(false);
  const [shiftDate, setShiftDate] = useState(new Date());
  const [shiftType, setShiftType] = useState('8 hours');
  const [fullname, setFullname] = useState('Abdulla Bashir2');
  const [username, setUsername] = useState('bashir');
  const [shift, setShift] = useState('6:00-18:00');

  const createShift = async () => {
    try {
      await axios.post('http://localhost:3003/api/v1/bookings', {
        date: shiftDate,
        shiftType,
        fullname,
        username,
        shift
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    createShift();
    setShiftType('8 hours');
    setShift('6:00-18:00');
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col-8 mt-5" onSubmit={handleSubmit}>
          <DatePicker
            selected={shiftDate ? new Date(shiftDate) : null}
            onChange={setShiftDate}
            onChangeRaw={e => e.preventDefault()}
          />
          <p>
            The day you chose for shift:{' '}
            <span className="text-primary">
              {shiftDate.toLocaleString('en-us', { weekday: 'long' })}
            </span>
          </p>
          <Input
            element
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <Input
            element
            type="text"
            name="fullname"
            onChange={e => setFullname(e.target.value)}
            value={fullname}
          />

          <SelectInput
            name="shiftType"
            value={shiftType}
            filterOptions={filterOptionsShiftType}
            onChange={e => setShiftType(e.target.value)}
          />
          <SelectInput
            name="shift"
            value={shift}
            onChange={e => setShift(e.target.value)}
            filterOptions={filterOptionsShift}
          />
          <Button
            disabled={loading}
            type="submit"
            classes={loading ? 'ml-auto  btn-danger' : 'ml-auto  btn-success'}
          >
            {loading ? 'Booking your shift' : 'Book shift'}
          </Button>
        </form>
      </div>
    </div>
  );
}
BookShiftPage.defaultProps = {
  filterOptionsShiftType: ['12 hours', '8 hours'],
  filterOptionsShift: [
    '6:00-18:00',
    '18:00-6:00',
    '6:00-14:00',
    '14:00-22:00',
    '22:00-6:00'
  ]
};

export default BookShiftPage;
