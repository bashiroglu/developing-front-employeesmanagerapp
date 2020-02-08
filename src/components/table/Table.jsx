import React from 'react';
import List from '../list/List';

function Table({ TableColumns, bookings, employees, button }) {
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
            <List
              items={bookings ? bookings : employees}
              TableColumns={TableColumns}
            />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
