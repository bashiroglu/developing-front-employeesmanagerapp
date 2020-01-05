import React, { Component } from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';

export class AllEmployeesPage extends Component {
  static defaultProps = {
    TableColumns: [
      'id',
      'name',
      'surname',
      'username',
      'groupname',
      'equipmentStatus'
    ],
    FilterOptions: ['fully equiped', 't-shirt equiped', 'shoes equiped'],
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

  render() {
    const { FilterOptions, TableColumns, employees } = this.props;
    return (
      <div>
        <Filter FilterOptions={FilterOptions} />
        <Table TableColumns={TableColumns} employees={employees} />
      </div>
    );
  }
}

export default AllEmployeesPage;
