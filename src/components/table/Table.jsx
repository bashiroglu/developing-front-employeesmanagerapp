import React from 'react';
import UserList from '../userlist/UserList';

function Table({ TableColumns, employees, confirmation }) {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col-md-12">
          <table className="table ">
            <thead>
              <tr>
                {TableColumns.map(col => (
                  <th key={col} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <UserList employees={employees} confirmation={confirmation} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
