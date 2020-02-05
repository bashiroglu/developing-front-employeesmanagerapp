import React from 'react';
import Input from '../elements/formelements/input/Input';

import SelectInput from '../elements/formelements/input/SelectInput';

function Filter({ FilterOptions, name, value, onChange }) {
  return (
    <div className="container my-3">
      <form className="form-inline">
        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Bring
        </label>
        <SelectInput
          id="filterselect"
          name={name}
          onChange={onChange}
          filterOptions={FilterOptions}
          value={value}
        />

        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          employees
        </label>

        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customControlInline"
          />
          {/* <label className="custom-control-label" for="customControlInline">
            Remember my preference
          </label> */}
        </div>

        <button type="submit" className="btn btn-primary my-1 ml-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Filter;
