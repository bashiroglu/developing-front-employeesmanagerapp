import React from 'react';
import List from '../list/List';

function Table({
  tableColumns,
  bookings,
  employees,
  checkbox,
  onChange,
  checkedList,
  handleAllUsers,
  stateOfAllCheckboxs
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
                    {col === 'checkbox' ? (
                      <input
                        onChange={handleAllUsers}
                        type="checkbox"
                        checked={stateOfAllCheckboxs}
                      />
                    ) : (
                      col
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <List
              checkbox={checkbox}
              items={bookings ? bookings : employees}
              tableColumns={tableColumns}
              onChange={onChange}
              checkedList={checkedList}
            />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
