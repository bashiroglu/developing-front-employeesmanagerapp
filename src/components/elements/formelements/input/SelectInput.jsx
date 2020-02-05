import React from 'react';

function SelectInput({ name, value, filterOptions, onChange }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="custom-select my-1 mr-sm-2"
    >
      {filterOptions.map((option, idx) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
