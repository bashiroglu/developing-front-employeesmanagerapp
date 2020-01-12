import React, { Component } from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

export class AllEmployeesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'no equipment',
      employees: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3003/api/v1/users')
      .then(response => response.json())
      .then(response => {
        console.log(response.users);
        this.setState({ employees: response.users });
      });
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
      'equipments'
    ],
    FilterOptions: [
      'fully equiped',
      't-shirt equiped',
      'shoes equiped',
      'no equipment'
    ]
  };

  render() {
    // const { employees } = this.state;
    const { FilterOptions, TableColumns } = this.props;
    return (
      <div>
        <Filter
          FilterOptions={FilterOptions}
          onChange={this.HandleInputChange}
          name="filterSelect"
          value={this.state.selected}
        />
        <DownloadButtons />
        <Table TableColumns={TableColumns} employees={this.state.employees} />
      </div>
    );
  }
}

export default AllEmployeesPage;
