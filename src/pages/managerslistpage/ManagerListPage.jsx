import React from 'react';
import Table from '../../components/table/Table';

function ManagerListPage({ tableColumns, managers }) {
  return (
    <div>
      <Table
        tableColumns={tableColumns}
        employees={managers}
        button="deactivate"
      />
    </div>
  );
}
ManagerListPage.defaultProps = {
  tableColumns: ['id', 'name', 'surname', 'position', 'button'],
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

export default ManagerListPage;
