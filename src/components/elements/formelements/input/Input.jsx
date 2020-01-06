import React, { Component } from 'react';

export class Input extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const {
      onChange,
      type,
      id,
      additionaltextid,
      label,
      additionaltext,
      name,
      value,
      FilterOptions
    } = this.props;
    const element =
      this.props.element === 'input' ? (
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            className="form-control"
            id={id}
            aria-describedby={additionaltextid}
            name={name}
            onChange={onChange}
          />
          {this.props.additionaltext && (
            <small id={additionaltextid} className="form-text text-muted">
              {additionaltext}
            </small>
          )}
        </div>
      ) : this.props.element === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="custom-select my-1 mr-sm-2"
          id={id}
        >
          {FilterOptions.map((option, idx) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <div className="form-group ">
          <label htmlFor={id}>{label}</label>
          <textarea
            className="form-control"
            onChange={onChange}
            id={id}
            rows="3"
            name={name}
            value={value}
          ></textarea>
        </div>
      );
    return element;
  }
}

export default Input;
