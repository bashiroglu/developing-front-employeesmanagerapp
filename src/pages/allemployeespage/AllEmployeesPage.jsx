import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import Download from '../../components/download/Download';

function AllEmployeesPage({ filterOptions, tableColumns }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloadType, setDownloadType] = useState('Export as a pdf file');
  const [equipedFilter, setEquipedFilter] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await axios.get('http://localhost:3003/api/v1/users');
      setEmployees(response.data.users);
      console.log(response.data.users[10].equipments);
    }
    getData();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    createAndDownloadPdf();
  };
  const createAndDownloadPdf = async (req, res) => {
    if (downloadType === 'Export as a pdf file') {
      setLoading(true);
      await axios.post('http://localhost:3003/api/v1/pdf', {
        bookings: employees
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
  tableColumns: ['_id', 'fullname', 'username', 'groupname', 'equipments'],
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
