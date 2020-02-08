import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

function AllEmployeesPage({ filterOptions, tableColumns }) {
  const [employees, setEmployees] = useState([]);
  const [equipedFilter, setEquipedFilter] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await axios.get('http://localhost:3003/api/v1/users');
      setEmployees(response.data.users);
    }
    getData();
  }, []);

  // const createAndDownloadPdf = async () => {
  //   await axios.post('/http://localhost:3003/api/v1/pdf', employees);
  // };

  // console.log(employees);

  return (
    <div>
      <Filter
        equipedFilter={equipedFilter}
        setEquipedFilter={setEquipedFilter}
        filterOptions={filterOptions}
      />
      <DownloadButtons  />
      <Table tableColumns={tableColumns} employees={employees} />
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
  tableColumns: [
    'id',
    'name',
    'surname',
    'username',
    'groupname',
    'equipments'
  ],
  filterOptions: [
    'fully equiped',
    't-shirt equiped',
    'shoes equiped',
    'no equipment'
  ]
  // ,
  // employees: [
  //   {
  //     id: '1',
  //     fullname: 'Hasan aslan',
  //     shiftType: '12 hours',
  //     shift: '18:00-6:00',
  //     username: 'hasanaslan'
  //   },
  //   {
  //     id: '2',
  //     fullname: 'hasan murad',
  //     shiftType: '8 hours',
  //     shift: '22:00-6:00',
  //     username: 'hasanmurad'
  //   }
  // ]
};

export default AllEmployeesPage;
