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
    FilterOptions: ['fully equiped', 't-shirt equiped', 'shoes equiped']
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

export default AllEmployeesPage;
