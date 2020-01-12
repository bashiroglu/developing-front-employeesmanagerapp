import React, { Component } from 'react';

import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import DownloadButtons from '../../components/downloadbuttons/DownloadButtons';

export class EmployeesShiftPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  static defaultProps = {
    TableColumns: ['id', 'fullname', 'username', 'shift type', 'shift'],
    FilterOptions: [
      '6:00-18:00',
      '18:00-6:00',
      '6:00-14:00',
      '14:00-22:00',
      '22:00-6:00'
    ]
    /* ,
    employees: [
      {
        id: '1',
        fullname: 'Hasan aslan',
        shiftType: '12 hours',
        shift: '18:00-6:00',
        username: 'hasanaslan'
      },
      {
        id: '2',
        fullname: 'hasan murad',
        shiftType: '8 hours',
        shift: '22:00-6:00',
        username: 'hasanmurad'
      }
    ] */
  };
  getEmployees() {}
  componentDidMount() {
    fetch('http://localhost:3003/api/v1/users')
      .then(response => response.json())
      .then(response => {
        console.log(response.users);
        this.setState({ employees: response.users });
      });
  }
  render() {
    // const { employees } = this.state;
    const { FilterOptions, TableColumns } = this.props;
    return (
      <div>
        <Filter FilterOptions={FilterOptions} />
        <DownloadButtons />
        <Table TableColumns={TableColumns} employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeesShiftPage;
