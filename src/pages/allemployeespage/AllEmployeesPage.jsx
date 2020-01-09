import React, { Component } from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

export class AllEmployeesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'no equipment'
    };
  }

  HandleInputChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  static defaultProps = {
    TableColumns: [
      'id',
      'name',
      'surname',
      'username',
      'groupname',
      'equipmentStatus'
    ],
    FilterOptions: [
      'fully equiped',
      't-shirt equiped',
      'shoes equiped',
      'no equipment'
    ],
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
  HandleInputChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  render() {
    const { FilterOptions, TableColumns, employees } = this.props;
    return (
      <div>
        <Filter
          FilterOptions={FilterOptions}
          onChange={this.HandleInputChange}
          name="filterSelect"
          value={this.state.selected}
        />
        <DownloadButtons />
        <Table TableColumns={TableColumns} employees={employees} />
      </div>
    );
  }
}

export default AllEmployeesPage;
