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

  let filteredEmployees = employees;
  if (equipedFilter === 'all employees') {
    filteredEmployees = employees;
  } else if (equipedFilter === 'fully equiped') {
    filteredEmployees = employees.filter(employee => {
      return (
        employee.equipment.includes('shoe') &&
        employee.equipment.includes('t-shirt')
      );
    });
  } else if (equipedFilter === 'shoes equiped') {
    filteredEmployees = employees.filter(employee => {
      return employee.equipment.includes('shoe');
    });
  } else if (equipedFilter === 't-shirt equiped') {
    filteredEmployees = employees.filter(employee => {
      return employee.equipment.includes('t-shirt');
    });
  } else if (equipedFilter === 'no equipment') {
    filteredEmployees = employees.filter(employee => {
      return (
        !employee.equipment.includes('shoe') &&
        !employee.equipment.includes('t-shirt')
      );
    });
  }

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

AllEmployeesPage.defaultProps = {
  tableColumns: ['_id', 'fullname', 'username', 'groupname', 'equipment'],
  filterOptions: [
    'all employees',
    'fully equiped',
    't-shirt equiped',
    'shoes equiped',
    'no equipment'
  ]
};

export default AllEmployeesPage;
