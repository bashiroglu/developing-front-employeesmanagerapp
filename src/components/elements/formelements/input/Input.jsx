import React, { Component } from 'react';

export class Input extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const { onClick, type, name, id, label, additionaltext } = this.props;
    const element =
      this.props.element === 'input' ? (
        <div class="form-group">
          <label for="exampleInputEmail1">{label}</label>
          <input
            type={type}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onClick={onClick}
          />
          {this.props.additionaltext ? (
            <small id="emailHelp" class="form-text text-muted">
              {additionaltext}
            </small>
          ) : null}
        </div>
      ) : (
        <div className="form-group ">
          <label for="exampleFormControlTextarea1">Worker code</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      );
    return element;
  }
}

export default Input;
