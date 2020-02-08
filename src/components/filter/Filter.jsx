import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import SelectInput from '../elements/formelements/input/SelectInput';

function Filter({
  FilterOptions,
  name,
  datepicker,
  labelContent,
  shiftDate,
  setShiftDate,
  shift,
  setShift
}) {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="container my-3">
      <form className="form-inline">
        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Bring
        </label>
        <SelectInput
          id="filterselect"
          name={name}
          onChange={e => setShift(e.target.value)}
          filterOptions={FilterOptions}
          value={shift}
        />

        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          {labelContent}
        </label>
        {datepicker ? (
          <DatePicker
            selected={shiftDate ? new Date(shiftDate) : null}
            onChange={setShiftDate}
            onChangeRaw={e => e.preventDefault()}
          />
        ) : null}

        {/* <div className="custom-control custom-checkbox my-1 mr-sm-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customControlInline"
          />
          <label className="custom-control-label" for="customControlInline">
            Remember my preference
          </label>
        </div> */}

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary my-1 ml-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Filter;
