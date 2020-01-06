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
      value
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
            onChange={onChange}
            name={name}
          />
          {this.props.additionaltext && (
            <small id={additionaltextid} className="form-text text-muted">
              {additionaltext}
            </small>
          )}
        </div>
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
