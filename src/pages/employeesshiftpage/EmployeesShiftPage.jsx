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
    ]
  };
  render() {
    const { FilterOptions, TableColumns } = this.props;
    return (
      <div>
        <Filter FilterOptions={FilterOptions} />
        <Table TableColumns={TableColumns} />
      </div>
    );
  }
}

export default EmployeesShiftPage;
