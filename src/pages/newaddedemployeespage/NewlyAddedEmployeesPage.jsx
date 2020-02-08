import React from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

function NewlyAddedEmployeesPage({ filterOptions, tableColumns, employees }) {
  return (
    <div>
      <Filter filterOptions={filterOptions} />
      <DownloadButtons />
      <Table
        tableColumns={tableColumns}
        employees={employees}
        button="confirm"
      />
    </div>
  );
}
NewlyAddedEmployeesPage.defaultProps = {
  tableColumns: [
    'id',
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
