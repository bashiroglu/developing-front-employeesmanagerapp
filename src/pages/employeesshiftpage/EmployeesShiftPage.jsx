import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

function EmployeesShiftPage({ filterOptions, tableColumns }) {
  const [shift, setShift] = useState('6:00-18:00');
  const [shiftDate, setShiftDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    async function getBookings() {
      const response = await axios.get(
        `http://localhost:3003/api/v1/bookings/`
      );
      setBookings(response.data.bookings);
      // console.log(response.data.bookings);
    }
    getBookings();
    // console.log(bookings);
  }, []);
  const filteredBookings = bookings.filter(booking => {
    return booking.shift === shift;
  });
  console.log(filteredBookings);
  return (
    <div>
      <Filter
        shift={shift}
        setShift={setShift}
        shiftDate={shiftDate}
        setShiftDate={setShiftDate}
        filterOptions={filterOptions}
        datepicker
        labelContent="employees shift for this date"
      />
      <DownloadButtons />
      <Table tableColumns={tableColumns} bookings={filteredBookings} />
    </div>
  );
}
EmployeesShiftPage.defaultProps = {
  tableColumns: ['_id', 'fullname', 'username', 'shiftType', 'shift'],
  filterOptions: [
    '6:00-18:00',
    '18:00-6:00',
    '6:00-14:00',
    '14:00-22:00',
    '22:00-6:00'
  ],
  employees: [
    {
      id: '1',
      fullname: 'Hasan aslan',
      shiftType: '12 hours',
      shift: '18:00-6:00',
      username: 'hasanaslan'
    },
    {
      id: '2',
      fullname: 'hasan murad',
      shiftType: '8 hours',
      shift: '22:00-6:00',
      username: 'hasanmurad'
    }
  ]
};
export default EmployeesShiftPage;
