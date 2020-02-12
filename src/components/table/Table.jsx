import React from 'react';
import List from '../list/List';

function Table({
  tableColumns,
  bookings,
  employees,
  button,
  checkbox,
  onChange
}) {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col-md-12">
          <table className="table ">
            <thead>
              <tr>
                {tableColumns.map(col => (
                  <th key={col} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <List
              checkbox={checkbox}
              items={bookings ? bookings : employees}
              tableColumns={tableColumns}
              onChange={onChange}
            />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
