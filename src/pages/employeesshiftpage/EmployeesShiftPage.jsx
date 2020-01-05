import React, { Component } from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';

export class EmployeesShiftPage extends Component {
  static defaultProps = {
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
        fullname: 'Hasan',
        shiftType: 'Muradli',
        shift: 'muradlihasan',
        username: 'groupname'
      },
      {
        id: '2',
        fullname: 'Hasan',
        shiftType: 'Muradli',
        shift: 'muradlihasan',
        username: 'groupname'
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

export default EmployeesShiftPage;
