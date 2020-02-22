import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import SelectInput from '../elements/formelements/input/SelectInput';
import './filter.css';

function Filter({
  filterOptions,
  name,
  datepicker,
  labelContent,
  shiftDate,
  setShiftDate,
  shift,
  setShift,
  setEquipedFilter,
  equipedFilter
  // autocomplete,
  // autoCompleteInputValue,
  // setAutoCompleteInputValue
}) {
  return (
    <div className="container my-3">
      <form className="form-inline">
        <SelectInput
          id="filterselect"
          name={name}
          onChange={
            setShift
              ? e => setShift(e.target.value)
              : e => setEquipedFilter(e.target.value)
          }
          filterOptions={filterOptions}
          value={shift ? shift : equipedFilter}
          labelContent={labelContent}
        />
        {/*         {autocomplete ? (
          <Input
            element="input"
            value={autoCompleteInputValue}
            onChange={setAutoCompleteInputValue}
          />
        ) : null} */}

        {datepicker ? (
          <DatePicker
            className="datepicker"
            selected={shiftDate ? new Date(shiftDate) : null}
            onChange={setShiftDate}
            onChangeRaw={e => e.preventDefault()}
          />
        ) : null}
      </form>
    </div>
  );
}

export default Filter;
