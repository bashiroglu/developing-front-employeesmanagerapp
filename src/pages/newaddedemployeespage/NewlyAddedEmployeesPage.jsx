import React from 'react';

import Table from '../../components/table/Table';
import Button from '../../components/elements/formelements/button/Button';

function NewlyAddedEmployeesPage({ filterOptions, tableColumns, employees }) {
  const handleCheckBoxChange = (item, e) => {
    console.log(item);
    console.log(e);
  };
  return (
    <div>
      <div className="row d-flex my-3 mx-3">
        <Button type="submit" classes="ml-auto  btn-success">
          Confirm selected users
        </Button>
      </div>
      <Table
        tableColumns={tableColumns}
        employees={employees}
        button="confirm"
        checkbox={true}
        onChange={handleCheckBoxChange}
      />
    </div>
  );
}
NewlyAddedEmployeesPage.defaultProps = {
  tableColumns: ['checkbox', '_id', 'name', 'surname', 'groupname'],
  filterOptions: ['fully equiped', 't-shirt equiped', 'shoes equiped'],
  employees: [
    {
      _id: '1',
      name: 'Hasan',
      surname: 'Muradli',
      username: 'muradlihasan',
      groupname: 'groupname',
      equipmentStatus: 'equipmentStatus'
    },
    {
      _id: '2',
      name: 'John',
      surname: 'Bottom',
      username: 'johnbottom',
      groupname: 'groupname',
      equipmentStatus: 'equipmentStatus'
    }
  ]
};

export default NewlyAddedEmployeesPage;
