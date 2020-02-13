import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '../../components/table/Table';
import Button from '../../components/elements/formelements/button/Button';

function NewlyAddedEmployeesPage({ filterOptions, tableColumns }) {
  const [employees, setEmployees] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        'http://localhost:3003/api/v1/users/inactive-users'
      );
      setEmployees(response.data.users);
    }
    getData();
  }, []);
  const handleCheckBoxChange = itemId => {
    if (!checkedList.includes(itemId)) {
      setCheckedList([...checkedList, itemId]);
    } else {
      setCheckedList(checkedList.filter(id => id !== itemId));
    }
    console.log(itemId);
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
        checkedList={checkedList}
      />
    </div>
  );
}
NewlyAddedEmployeesPage.defaultProps = {
  tableColumns: ['checkbox', '_id', 'fullname', 'groupname'],
  filterOptions: ['fully equiped', 't-shirt equiped', 'shoes equiped']
};

export default NewlyAddedEmployeesPage;
