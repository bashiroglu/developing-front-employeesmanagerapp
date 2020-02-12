import React from 'react';

import Table from '../../components/table/Table';
import Download from '../../components/download/Download';

function NewlyAddedEmployeesPage({ filterOptions, tableColumns, employees }) {
  const handleCheckBoxChange = (item, e) => {
    console.log(item);
    console.log(e);
  };
  return (
    <div>
      <Download />
      <Table
        tableColumns={tableColumns}
        employees={employees}
        button="confirm"
        checkbox={true}
        onChange={handleCheckBoxChange}
      />
    </div>
  );
}
NewlyAddedEmployeesPage.defaultProps = {
  tableColumns: [
    'checkbox',
    '_id',
    'name',
    'surname',
    'username',
    'groupname',
    'equipmentStatus',
    'confirm'
  ],
  filterOptions: ['fully equiped', 't-shirt equiped', 'shoes equiped'],
  employees: [
    {
      id: '1',
      name: 'Hasan',
      surname: 'Muradli',
      username: 'muradlihasan',
      groupname: 'groupname',
      equipmentStatus: 'equipmentStatus'
    },
    {
      id: '2',
      name: 'John',
      surname: 'Bottom',
      username: 'johnbottom',
      groupname: 'groupname',
      equipmentStatus: 'equipmentStatus'
    }
  ]
};

export default NewlyAddedEmployeesPage;
