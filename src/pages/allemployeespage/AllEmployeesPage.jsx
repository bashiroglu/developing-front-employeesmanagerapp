import React from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

function AllEmployeesPage({ employees, FilterOptions, TableColumns }) {
  return (
    <div>
      <Filter FilterOptions={FilterOptions} name="filterSelect" />
      <DownloadButtons />
      <Table TableColumns={TableColumns} employees={employees} />
    </div>
  );
}

// componentDidMount() {
//   fetch('http://localhost:3003/api/v1/users')
//     .then(response => response.json())
//     .then(response => {
//       console.log(response.users);
//       setState({ employees: response.users });
//     });
// }

AllEmployeesPage.defaultProps = {
  TableColumns: [
    'id',
    'name',
    'surname',
    'username',
    'groupname',
    'equipments'
  ],
  FilterOptions: [
    'fully equiped',
    't-shirt equiped',
    'shoes equiped',
    'no equipment'
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

export default AllEmployeesPage;
