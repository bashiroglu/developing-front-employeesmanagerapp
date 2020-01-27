import React from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

function EmployeesShiftPage({ FilterOptions, TableColumns, employees }) {
  return (
    <div>
      <Filter FilterOptions={FilterOptions} />
      <DownloadButtons />
      <Table TableColumns={TableColumns} employees={employees} />
    </div>
  );
}
EmployeesShiftPage.defaultProps = {
  TableColumns: ['id', 'fullname', 'username', 'shift type', 'shift'],
  FilterOptions: [
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
