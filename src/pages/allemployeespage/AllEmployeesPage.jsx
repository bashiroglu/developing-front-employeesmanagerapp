import React from 'react';
import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';

function AllUsersPage() {
  const TableColumns = [
    'id',
    'name, surname',
    'username',
    'groupname',
    'equipmentStatus'
  ];
  return (
    <div>
      <Filter />
      <Table />
    </div>
  );
}

export default AllUsersPage;
