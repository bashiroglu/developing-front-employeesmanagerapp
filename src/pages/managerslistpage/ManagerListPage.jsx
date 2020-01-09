import React, { Component } from 'react';
import Table from '../../components/table/Table';

export class ManagerListPage extends Component {
  static defaultProps = {
    TableColumns: ['id', 'name', 'surname', 'position', 'button'],
    managers: [
      {
        id: '1',
        name: 'Hasan',
        surname: 'Muradli',
        position: 'active'
      },
      {
        id: '2',
        name: 'John',
        surname: 'Bottom',
        position: 'active'
      }
    ]
  };
  render() {
    const { TableColumns, managers } = this.props;
    return (
      <div>
        <Table
          TableColumns={TableColumns}
          employees={managers}
          button="deactivate"
        />
      </div>
    );
  }
}

export default ManagerListPage;
