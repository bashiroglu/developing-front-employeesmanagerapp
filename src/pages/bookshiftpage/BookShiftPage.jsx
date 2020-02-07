import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../../components/elements/formelements/input/Input';
import SelectInput from '../../components/elements/formelements/input/SelectInput';
import Button from '../../components/elements/formelements/button/Button';
import ShiftItem from '../../components/bookedshiftitem/ShiftItem';

function BookShiftPage({ filterOptionsShiftType, filterOptionsShift }) {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [bookings, setBookings] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shiftDate, setShiftDate] = useState(new Date());
  const [shiftType, setShiftType] = useState('8 hours');

  const [username, setUsername] = useState('Bashiroglu');
  const [shift, setShift] = useState('6:00-18:00');
  useEffect(() => {
    async function getBookings() {
      const response = await axios.get(
        `http://localhost:3003/api/v1/bookings/${username}`
      );
      setBookings(response.data.bookings);
      console.log(response.data.bookings);
    }
    getBookings();
  }, [needRefresh, username]);

  const refreshBookings = () => {
    setNeedRefresh(!needRefresh);
  };

  const createShift = async () => {
    try {
      await axios.post('http://localhost:3003/api/v1/bookings', {
        date: shiftDate,
        fullname: 'Abdulla Bashir',
        username,
        shift,
        shiftType: '8 hours'
      });
      setLoading(false);
      setNeedRefresh(!needRefresh);
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
        <form className="col-7 mt-5" onSubmit={handleSubmit}>
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
            disabled={true}
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
            classes={
              loading
                ? ' my-2 ml-auto  btn-danger'
                : 'my-2 l-auto  btn-success'
            }
          >
            {loading ? 'Booking your shift' : 'Book shift'}
          </Button>
        </form>
        {bookings ? (
          <ul className="list-group mt-5 col-5">
            {bookings.map(booking => (
              <ShiftItem
                refresher={refreshBookings}
                booking={booking}
                key={booking._id}
              />
            ))}
          </ul>
        ) : null}
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
