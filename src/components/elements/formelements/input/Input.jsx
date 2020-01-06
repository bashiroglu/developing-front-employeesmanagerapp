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
      additionaltext
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
          ></textarea>
        </div>
      );
    return element;
  }
}

export default Input;
