import React from 'react';

function Filter() {
  return (
    <div className="container mt-3">
      <form className="form-inline">
        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
          Bring 
        </label>
        <select
          className="custom-select my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
        >
          <option selected>Choose...</option>
          <option value="1">fully equiped</option>
          <option value="2">t-shirt equiped</option>
          <option value="3">shoes equiped</option>
        </select>
        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
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
