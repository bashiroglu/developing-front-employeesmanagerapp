import React from 'react';
import Table from '../../components/table/Table';

function ManagerListPage({ TableColumns, managers }) {
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
ManagerListPage.defaultProps = {
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

export default ManagerListPage;
