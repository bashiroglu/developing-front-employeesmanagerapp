import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import Download from '../../components/download/Download';

function AllEmployeesPage({ filterOptions, tableColumns }) {
  // const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadType, setDownloadType] = useState('Export as a pdf file');
  const [equipedFilter, setEquipedFilter] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await axios.get('http://localhost:3003/api/v1/users');

      setEmployees(response.data.users);
      console.log(response.data.users);
    }
    getData();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    createAndDownloadPdf();
  };
  // const handleFilterInputChange = value => {
  //   setEquipedFilter(value);

  //   console.log(filteredEmployees);
  // };
  let filteredEmployees = employees;
  if (equipedFilter === 'all employees') {
    filteredEmployees = employees;
  } else if (equipedFilter === 'fully equiped') {
    filteredEmployees = employees.filter(employee => {
      return (
        employee.equipments.includes('shoe') &&
        employee.equipments.includes('t-shirt')
      );
    });
  } else if (equipedFilter === 'shoes equiped') {
    filteredEmployees = employees.filter(employee => {
      return employee.equipments.includes('shoe');
    });
  } else if (equipedFilter === 't-shirt equiped') {
    filteredEmployees = employees.filter(employee => {
      return employee.equipments.includes('t-shirt');
    });
  } else if (equipedFilter === 'no equipment') {
    filteredEmployees = employees.filter(employee => {
      return (
        !employee.equipments.includes('shoe') &&
        !employee.equipments.includes('t-shirt')
      );
    });
  }
  // const filterEmployees = employees.filter(employee =>
  //   employee.equipments.includes('shoe')
  // );
  // const filterEmployees = employees.filter(
  //   employee =>
  //     employee.equipments.includes('shoe') &&
  //     employee.equipments.includes('t-shirt')
  // );
  // const filterEmployees = employees.filter(employee =>
  //   employee.equipments.includes('t-shirt')
  // );
  // const filterEmployees = () => {
  //   // const filteredEmployees
  //   let filteredEmployees2;
  //   if (equipedFilter === 'all employees') {
  //     filteredEmployees2 = employees;
  //   } else if (equipedFilter === 'fully equiped') {
  //     filteredEmployees2 = employees.filter(
  //       employee =>
  //         employee.equipments.includes('shoe') &&
  //         employee.equipments.includes('t-shirt')
  //     );
  //   }
  // setFilteredEmployees(filteredEmployees2);
  // console.log(filteredEmployees2);

  // const filter =
  // const equipedFilter = employees.filter(employee =>
  //   employee.equipments.includes('shoe')
  // );
  // };

  const createAndDownloadPdf = async (req, res) => {
    if (downloadType === 'Export as a pdf file') {
      setLoading(true);
      await axios.post('http://localhost:3003/api/v1/pdf', {
        items: employees
      });
      const response = await axios.get('http://localhost:3003/api/v1/pdf', {
        responseType: 'blob'
      });
      const pdfBlob = await new Blob([response.data], {
        type: 'application/pdf'
      });

      saveAs(pdfBlob, `Usersliston(${new Date().toLocaleDateString()}).pdf`);
      setLoading(false);
    } else {
      console.log('not implemented yet');
    }
  };
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
      <Download
        downloadType={downloadType}
        onChange={e => setDownloadType(e.target.value)}
        onSubmit={handleSubmit}
        loading={loading}
      />
      <Table tableColumns={tableColumns} employees={filteredEmployees} />
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
  tableColumns: ['_id', 'fullname', 'username', 'groupname', 'equipments'],
  filterOptions: [
    'all employees',
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
